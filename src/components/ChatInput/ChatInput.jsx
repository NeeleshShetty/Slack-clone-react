import { Button } from "@mui/base"
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore"
import {  useState } from "react"
import styled from "styled-components"
import {db} from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase"
const ChatInput = ({ channelId, channelName,chatRef }) => {
    const [input, setInput] = useState("");
    const timeStamp = Timestamp.now();
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault();
        if (!input) {
            alert("Enter the input")
            return
        }
        if (!channelId) {
            return false;
        }
    //    console.log(channelId);
        
       
        const collectionVal = collection(db, 'rooms', channelId, 'messages');
        addDoc(collectionVal, {
					message: input,
					timestamp: timeStamp,
					user: user.displayName,
					userImage: user.photoURL,
				});
        setInput("")
        chatRef?.current?.scrollIntoView({
            behaviour:"smooth"
        })
    }
  return (
      <>
          <ChatInputContainer>
              <form>
                  <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                  <Button hidden  type="submit" onClick={sendMessage}>
                      SEND
                  </Button>
              </form>
      </ChatInputContainer>
      </>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius:20px;

    > form {
        position:relative;
        display:flex;
        justify-content:center;
    }
    
    > form > input {
        position:fixed;
        bottom:30px;
        width:60%;
        border:1px solid gray;
        border-radius:3px;
        padding:20px;
        outline:none;
    }

`