import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import styled from "styled-components"
import './App.css'
import { store } from "./app/store";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase"
import Login from "./components/Login/Login";
function App() {
	const [user, loading] = useAuthState(auth)
	
	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContent>
					<img
						src="https://play-lh.googleusercontent.com/mzJpTCsTW_FuR6YqOPaLHrSEVCSJuXzCljdxnCKhVZMcu6EESZBQTCHxMh8slVtnKqo"
						alt="img"
					/>
					
				</AppLoadingContent>
			</AppLoading>
		);
	}
  return (
		<>
			{!user ? (
				<Login />
			) : (
				<Provider store={store}>
					<BrowserRouter>
						<Header />
						<AppBody>
							<Sidebar />
							<Routes>
								<Route
									path="/"
									element={<Chat />}
								/>
							</Routes>
						</AppBody>
					</BrowserRouter>
				</Provider>
			)}
		</>
	);
}

export default App


const AppBody = styled.div`
display:flex;
height:100vh;
`

const AppLoading = styled.div`

`;
const AppLoadingContent = styled.div`
> img {
	height:100px;
	padding:20px;
	margin:40px;
}`;