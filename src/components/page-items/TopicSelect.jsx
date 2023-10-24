import { useState } from 'react';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;

export default function TopicSelect({ topics }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event) => {
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
					let pathname = `/articles`;
					if (topic.slug !== 'all') {
						pathname = `/articles/${topic.slug}`;
					}
					return (
						<Link
							key={topic + index}
							to={{
								pathname: pathname,
							}}
						>
							<MenuItem onClick={handleClose}>
								{topic.slug}
							</MenuItem>
						</Link>
					);
				})}
			</Menu>
		</div>
	);
}
