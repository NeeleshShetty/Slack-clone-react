import React from 'react'
import styled from "styled-components"
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
  return (
      <HeaderContainer>
          {/* Header Left */}
        
          <HeaderLeft>
              <HeaderAvatar onClick={()=>auth.signOut()} alt={user?.displayName} src={user?.photoURL} />
            <AccessTimeIcon />
          </HeaderLeft>

            
          {/* Header Search */}
          <HeaderSearch>
              <SearchIcon />
              <input type={"text"}placeholder="Search..." />
            </HeaderSearch>
          {/* Header Right */}
          <HeaderRight>
              <HelpOutlineIcon />
          </HeaderRight>
          
      </HeaderContainer>
  )
}

export default Header



const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	background-color: var(--slack-color);
    color:white;
`;

const HeaderLeft = styled.div`
	display: flex;
	flex: 0.3;
	align-items: center;
	margin-left: 20px;

    >.MuiSvgIcon-root{
        margin-left:auto;
        margin-right:40px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor:pointer;

    :hover{
        opacity:0.8;
    }
`;

const HeaderSearch = styled.div`
    flex:0.4;
    opacity:1;
    border-radius:6px;
    background-color:#421f44;
    text-align:center;
    
    >input{
        width:90%;
        height:30px;
        background-color:transparent;
        border:none;
        outline: none;
        min-width:30vw;
        text-align:center;
        color:white;
    }
`

const HeaderRight = styled.div`
    flex:0.3
    display:flex;
    align-items:flex-end;
`