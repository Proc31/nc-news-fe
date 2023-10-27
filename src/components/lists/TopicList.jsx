import { useState, useEffect } from 'react';
import { getTopics } from '../../utils';
import { Stack, Fab, Tooltip } from '@mui/material';
import Loading from '../page-items/Loading';
import Topic from './list-items/Topic';
import TopicDialog from '../page-items/TopicDialog';
import AddIcon from '@mui/icons-material/Add';

export default function TopicList() {
	const [topicList, setTopicList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getTopics().then((response) => {
			setTopicList(response);
			setLoading(false);
		});
	}, [open]);

	function handleClickOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	const topics = topicList.map((topic, index) => {
		return (
			<div key={topic.slug + index}>
				<Topic topic={topic} />
			</div>
		);
	});

	if (loading) {
		return <Loading />;
	} else {
		return (
			<>
				<Tooltip title="Add New Topic">
					<Fab
						color="primary"
						aria-label="add new topic"
						onClick={handleClickOpen}
						sx={{
							position: 'fixed',
							bottom: '40px',
							right: '40px',
						}}
					>
						<AddIcon />
					</Fab>
				</Tooltip>
				<TopicDialog handleClose={handleClose} open={open} />
				<Stack
					spacing={1}
					direction="row"
					mx={4}
					my={1}
					useFlexGap
					flexWrap="wrap"
				>
					{topics}
				</Stack>
			</>
		);
	}
}
