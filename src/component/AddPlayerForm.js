import React, { useState } from 'react';

const AddPlayerForm = ({ onAddPlayer }) => {
	const [newPlayer, setNewPlayer] = useState({
		name: '',
		image: '',
		position: '',
		stats: {
			pointsPerGame: '',
			assistsPerGame: '',
			reboundsPerGame: '',
		},
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewPlayer((prevPlayer) => ({
			...prevPlayer,
			[name]: value,
		}));
	};

	const handleStatsChange = (e) => {
		const { name, value } = e.target;
		setNewPlayer((prevPlayer) => ({
			...prevPlayer,
			stats: {
				...prevPlayer.stats,
				[name]: parseFloat(value),
			},
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddPlayer(newPlayer);
		setNewPlayer({
			name: '',
			image: '',
			position: '',
			stats: {
				pointsPerGame: '',
				assistsPerGame: '',
				reboundsPerGame: '',
			},
		});
	};

	return (
		<form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
			<input
				type="text"
				name="name"
				value={newPlayer.name}
				onChange={handleChange}
				placeholder="Name"
				required
			/>
			<input
				type="text"
				name="image"
				value={newPlayer.image}
				onChange={handleChange}
				placeholder="Image URL"
				required
			/>
			<input
				type="text"
				name="position"
				value={newPlayer.position}
				onChange={handleChange}
				placeholder="Position"
				required
			/>
			<input
				type="number"
				name="pointsPerGame"
				value={newPlayer.stats.pointsPerGame}
				onChange={handleStatsChange}
				placeholder="Points per Game"
				required
			/>
			<input
				type="number"
				name="assistsPerGame"
				value={newPlayer.stats.assistsPerGame}
				onChange={handleStatsChange}
				placeholder="Assists per Game"
				required
			/>
			<input
				type="number"
				name="reboundsPerGame"
				value={newPlayer.stats.reboundsPerGame}
				onChange={handleStatsChange}
				placeholder="Rebounds per Game"
				required
			/>
			<button type="submit">Add Player</button>
		</form>
	);
};

export default AddPlayerForm;
