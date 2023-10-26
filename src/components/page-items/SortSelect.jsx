import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button, Menu, MenuItem, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

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

export default function SortSelect({ setSearchParams, searchParams }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event) => {
		let id = event.target.id;
		id = id.split(' ');
		if (id[0] === 'sort' && id[1] !== undefined) {
			setSearchParams({
				order: searchParams.get('order'),
				sort_by: id[1],
			});
		} else if (id[0] === 'order' && id[1] !== undefined) {
			setSearchParams({
				order: id[1],
				sort_by: searchParams.get('sort_by'),
			});
		}
		setAnchorEl(null);
	};

	//Refactor this, works but bad logic
	function buttonContent(type, buttonId) {
		const selectedSort = searchParams.get('sort_by');
		const selectedOrder = searchParams.get('order');
		if (type === 'sort') {
			if (selectedSort === buttonId) {
				return <DoneTwoToneIcon />;
			} else return <></>;
		} else {
			if (selectedOrder === buttonId) {
				return <DoneTwoToneIcon />;
			} else return <></>;
		}
	}

	return (
		<>
			<Button
				id="sort-select-button"
				aria-controls={open ? 'sort-select-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				variant="contained"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				Sort articles
			</Button>
			<StyledMenu
				id="sort-select-menu"
				MenuListProps={{
					'aria-labelledby': 'sort-select-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem disableRipple>Sort By</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem id="sort created_at" onClick={handleClose}>
					{buttonContent('sort', 'created_at')} Date
				</MenuItem>
				<MenuItem id="sort votes" onClick={handleClose} disableRipple>
					{buttonContent('sort', 'votes')} Votes
				</MenuItem>
				<MenuItem
					id="sort comment_count"
					onClick={handleClose}
					disableRipple
				>
					{buttonContent('sort', 'comment_count')} Comment Count
				</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem disableRipple>Order By</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem id="order asc" onClick={handleClose} disableRipple>
					{buttonContent('order', 'asc')} Ascending
				</MenuItem>
				<MenuItem id="order desc" onClick={handleClose} disableRipple>
					{buttonContent('order', 'desc')} Descending
				</MenuItem>
			</StyledMenu>
		</>
	);
}
