import React from 'react'
import styled from "styled-components"
import CreateIcon from '@mui/icons-material/Create';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarrOptions from './components/SidebarrOptions';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../../firebase';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
const Sidebar = () => {
    
    const [channels, error, loading] = useCollection(collection(db, 'rooms'));
  return (
		<>
			<SidebarContainer>
				<SidebarHeader>
					<SidebarInfo>
						<h2>Neelesh Team</h2>
						<h3>
							<FiberManualRecordIcon />
							Neel Shetty
						</h3>
					</SidebarInfo>
					<CreateIcon />
				</SidebarHeader>
				<SidebarrOptions
					icon={<InsertCommentIcon />}
					title="Threads"
				/>
				<SidebarrOptions
					icon={<InboxIcon />}
					title="Mentions & reactions"
				/>
				<SidebarrOptions
					icon={<DraftsIcon />}
					title="Saved Items"
				/>
				<SidebarrOptions
					icon={<BookmarkIcon />}
					title="Channel browser"
				/>
				<SidebarrOptions
					icon={<PeopleAltIcon />}
					title="People & user groups"
				/>
				<SidebarrOptions
					icon={<AppsIcon />}
					title="Apps"
				/>
				<SidebarrOptions
					icon={<FileCopyIcon />}
					title="File browser"
				/>
				<SidebarrOptions
					icon={<ExpandLessIcon />}
					title="Show Less"
				/>
				<hr />
				<SidebarrOptions
					icon={<ExpandMoreIcon />}
					title="Channels"
				/>
				<hr />
				<SidebarrOptions
					icon={<AddIcon />}
					title="Add Channel"
					addChannelOption
				/>

				{channels?.docs.map((doc) => (
					<SidebarrOptions key={doc.id} id={doc.id} title={doc.data().name} />
				))}
			</SidebarContainer>
		</>
	);
}

export default Sidebar;


const SidebarContainer = styled.div`
    color:white;
   flex:0.3;
    background-color:var(--slack-color);
    border-top:1px solid #49274b;
    max-width:260px;
    margin-top:60px;


`

const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 10px solid #49274b;
	padding-bottom: 10px;
	padding: 13px;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;;
        font-size:18px;
        background-color:white;
        border-radius:999px
	}
`;

const SidebarInfo = styled.div`
	flex: 1;

	> h2 {
		font-weight: 15px;
		font-weight: 900;
		margin-bottom: 5px;
	}
	> h3 {
		display: flex;
		align-items: center;
		font-weight: 400;
		font-size: 13px;
	}

	> h3 > .MuiSvgIcon-root {
		font-size: 14px;
		margin-top: 1px;
		margin-right: 2px;
		color: green;
	}
`;
