import { Link } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';

export default function Navbar({ currentUser }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: '0.3fr auto 1fr 1fr 1fr auto',
							gridTemplateRows: '1fr',
						}}
					>
						<Box
							sx={{
								gridColumn: '1',
								width: 80,
								height: 80,
							}}
						>
							<img
								style={{ height: '100%' }}
								src="https://icons.iconarchive.com/icons/iconarchive/cute-animal/256/Cute-Cat-icon.png"
								alt="cool cat news icon"
							/>
						</Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gridColumn: '2',
							}}
						>
							<Typography
								sx={{
									fontFamily: 'gill',
									fontSize: 60,
								}}
							>
								Cool Cat News
							</Typography>
						</Box>
						<Box
							sx={{
								gridColumn: '3',
								display: 'flex',
								alignItems: 'end',
								justifyContent: 'end',
							}}
						>
							<Link
								to="/articles"
								style={{ textDecoration: 'none' }}
							>
								<Typography sx={{ color: 'white' }}>
									Articles
								</Typography>
							</Link>
						</Box>
						<Box
							sx={{
								gridColumn: '4',
								display: 'flex',
								alignItems: 'end',
								justifyContent: 'center',
							}}
						>
							<Link
								to="/topics"
								style={{ textDecoration: 'none' }}
							>
								<Typography sx={{ color: 'white' }}>
									Topics
								</Typography>
							</Link>
						</Box>
						<Box
							sx={{
								gridColumn: '5',
								display: 'flex',
								alignItems: 'end',
								justifyContent: 'start',
							}}
						>
							<Link
								to="/users"
								style={{ textDecoration: 'none' }}
							>
								<Typography sx={{ color: 'white' }}>
									Users
								</Typography>
							</Link>
						</Box>
						<Box
							sx={{
								display: 'flex',
								paddingLeft: 75,
								width: 80,
								height: 90,
								gridColumn: '6',
							}}
						>
							<IconButton
								sx={{
									display: 'flex',
									width: 80,
									height: 80,
									alignItems: 'center',
								}}
							>
								<Avatar>
									<img
										style={{ height: '100%' }}
										alt={currentUser.username}
										src={currentUser.avatar_url}
									/>
								</Avatar>
							</IconButton>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
