import styled from "styled-components"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import {useCollection, useDocument} from "react-firebase-hooks/firestore"
import ChatInput from "../ChatInput/ChatInput";
import { collection, doc, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Message from "../Message/Message";
import { useEffect, useRef } from "react";
const Chat = () => {
    const roomId = useSelector(selectRoomId)
    const chatRef = useRef(null)
    const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId))
    // const [roomMessages,loading] = useCollection(roomId && collection(db,"rooms",roomId,"messages"))
   
const messagesRef = roomId ? collection(db, 'rooms', roomId, 'messages') : null;
const messagesQuery = messagesRef
	? query(messagesRef, orderBy('timestamp', 'asc'))
	: null;
const [roomMessages, loading] = useCollection(messagesQuery);
   

    useEffect(() => {
         if (chatRef && chatRef.current) {
    chatRef.current.scrollIntoView({ behaviour: "smooth" });
  }
    }, [roomId,loading])
    
   
    console.log(roomDetails?.data());
    console.log(roomMessages);

  return (
		<>
			{roomDetails && roomMessages && (
				<ChatContainer>
					<Header>
						<HeaderLeft>
							<h4>
								<strong>#{roomDetails?.data().name}</strong>
							</h4>
							<StarBorderIcon />
						</HeaderLeft>

						<HeaderRight>
							<p>
								<InfoIcon /> Details
							</p>
						</HeaderRight>
					</Header>

					<ChatMessages>
						{roomMessages?.docs.map((doc) => {
							const { message, timestamp, user, userImage } = doc.data();

							return (
								<Message
									key={doc.id}
									message={message}
									timestamp={timestamp}
									user={user}
									userImage={userImage}
								/>
							);
						})}

						<ChatBottom ref={chatRef} />
					</ChatMessages>

					<ChatInput
						chatRef={chatRef}
						channelName={roomDetails?.data().name}
						channelId={roomId}
					/>
				</ChatContainer>
			)}
		</>
	);
}

export default Chat

const ChatBottom = styled.div`
padding-bottom:200px;
`
const ChatMessages = styled.div``

const ChatContainer = styled.div`
flex:0.7;
flex-grow:1;
overflow-y:scroll;
margin-top:52px;
`

const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray;
`
const HeaderLeft = styled.div`
display:flex;
align-items:center;

>h4{
    display:flex;
    text-transform:lowercase;
    margin-right:10px
}


> h4 > MuiSvgIcon-root{
    margin-left:10px;
    font-size:18px;
}
`
const HeaderRight = styled.div`
> p{
    display:flex;
    align-items:center;
    font-size:14px;
}

> p > MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size:16px;
}
`
