import { Button } from "@mui/base";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components"
import { auth, provider } from "../../firebase";

const Login = () => {
    const signin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).catch((error)=> alert(error.message))
    }
  return (
		<LoginContainer>
			<LoginInnerContainer>
				<img
					src="https://play-lh.googleusercontent.com/mzJpTCsTW_FuR6YqOPaLHrSEVCSJuXzCljdxnCKhVZMcu6EESZBQTCHxMh8slVtnKqo"
					alt=""
              />
              <h1> SignIn To Slack</h1>

              <Button onClick={signin}>
                  Sign in with Google
              </Button>
			</LoginInnerContainer>
		</LoginContainer>
	);
}

export default Login

const LoginContainer = styled.div`
background-color:#f8f8f8;
height:100vh;
display:grid;
place-items:center;
`
const LoginInnerContainer = styled.div`
	padding: 100px;
	text-align: center;
	background-color: white;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	> img {
		object-fit: contain;
		height: 100px;
		margin-bottom: 40px;
	}

    > button{
        margin-top:50px;
        text-transform:inherit !important;
        background-color: #0a8d48 !important;
        color:white;
        cursor:pointer
        
    }
`;