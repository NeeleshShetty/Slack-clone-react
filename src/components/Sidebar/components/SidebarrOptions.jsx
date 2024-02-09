import { Icon } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { db } from '../../../firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore'; 
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch } from "react-redux"
import { enterRoom } from '../../../features/appSlice';

const SidebarrOptions = ({ icon, title, addChannelOption,id }) => {
    const dispatch = useDispatch();
     const addChannel = () => {
        const channelName = prompt('Please enter the channel name.')
            if (channelName) {
            addDoc(collection(db, 'rooms'), {
                name: channelName
            });
        }
    }

    const selectChannel = () => {
        if(id){
        dispatch(enterRoom({
            roomId: id
        }))
        }

        console.log("action dispatched");
    }
	return (
		<>
			<SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
				<span>{icon}</span>
				{icon ? (
					<h3>{title}</h3>
				) : (
					<SidebarOptionalChannel>
						<span>#</span> {title}
					</SidebarOptionalChannel>
				)}
			</SidebarOptionContainer>
		</>
	);
};

export default SidebarrOptions

const SidebarOptionContainer = styled.div`
display:flex;
font-size:12px;
align-items:center;
padding-items:2px;
cursor:pointer;
margin-top:10px;

:hover{
    opacity:0.9;
    background-color:#340e36;
}

>h3{
    margin-left:10px;
}

>span{
    margin-left:10px;
}
`

const SidebarOptionalChannel = styled.div`
    
`