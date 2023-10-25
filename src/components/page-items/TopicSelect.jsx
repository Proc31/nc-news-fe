import { useState } from 'react';
import { Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 48;

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color:
			theme.palette.mode === 'light'
				? 'rgb(55, 65, 81)'
				: theme.palette.grey[300],
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
	},
}));

export default function TopicSelect({ topics, searchParams }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event) => {
		let pathname = `/articles`;
		if (event.target.id !== 'all') {
			pathname = `/articles/${event.target.id}`;
		}
		navigate({
			pathname: pathname,
			search: `?${searchParams}`,
		});
		setAnchorEl(null);
	};

	const menuTopics = [...topics];
	menuTopics.unshift({
		slug: 'all',
		description: 'Enables viewing of all Topics',
	});

	return (
		<div>
			<Button
				id="topics-button"
				aria-controls={open ? 'topics-button' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				variant="contained"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				Topics
			</Button>
			<Menu
				id="topics-menu"
				MenuListProps={{
					'aria-labelledby': 'topics-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: '20ch',
					},
				}}
			>
				{menuTopics.map((topic, index) => {
					return (
						<MenuItem
							key={topic + index}
							id={topic.slug}
							onClick={handleClose}
							disableRipple
							sx={{ textTransform: 'capitalize' }}
						>
							{topic.slug}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
}
