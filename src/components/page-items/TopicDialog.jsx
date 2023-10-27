import * as React from 'react';
import {
	Dialog,
	DialogTitle,
	TextField,
	Box,
	Typography,
	Tooltip,
	IconButton,
	Stack,
	Button,
} from '@mui/material';
import { postTopic } from '../../utils';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

export default function TopicDialog({ open, handleClose }) {
	const [error, setError] = useState(false);
	const [slug, setSlug] = useState('');
	const [desc, setDesc] = useState('');

	function addTopic() {
		if (slug.length > 2 && desc.length > 2) {
			postTopic(slug, desc).then(() => {
				setSlug('');
				setDesc('');
				handleClose();
			});
		} else {
			setError(true);
		}
	}

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>
				<Typography
					fontSize={32}
					sx={{
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.1rem',
						color: 'inherit',
						textDecoration: 'none',
						textTransform: 'uppercase',
					}}
				>
					Enter Topic!
				</Typography>
			</DialogTitle>

			<Box p={2}>
				<Stack spacing={2}>
					<TextField
						error={error}
						label={
							error
								? 'Topic Name must be at least 3 characters!'
								: 'Topic Name'
						}
						onChange={(e) => {
							if (e.target.value.length === 0) {
								setError(false);
							}
							setSlug(e.target.value);
						}}
						value={slug}
						InputProps={{
							endAdornment: (
								<Tooltip title="Clear Name">
									<IconButton
										sx={{
											visibility: slug
												? 'visible'
												: 'hidden',
										}}
										onClick={() => {
											setSlug('');
											setError(false);
										}}
									>
										<ClearIcon />
									</IconButton>
								</Tooltip>
							),
						}}
					/>
					<TextField
						error={error}
						label={
							error
								? 'Topic Description must be at least 3 characters!'
								: 'Topic Description'
						}
						onChange={(e) => {
							if (e.target.value.length === 0) {
								setError(false);
							}
							setDesc(e.target.value);
						}}
						value={desc}
						InputProps={{
							endAdornment: (
								<Tooltip title="Clear Name">
									<IconButton
										sx={{
											visibility: desc
												? 'visible'
												: 'hidden',
										}}
										onClick={() => {
											setDesc('');
											setError(false);
										}}
									>
										<ClearIcon />
									</IconButton>
								</Tooltip>
							),
						}}
					/>
					<Button
						variant="contained"
						color={error ? 'error' : 'primary'}
						onClick={addTopic}
					>
						Submit
					</Button>
				</Stack>
			</Box>
		</Dialog>
	);
}
