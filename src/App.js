import React, { useState } from 'react';
import BasketballPlayerCard from './component/BasketballPlayerCard';
import AddPlayerForm from './component/AddPlayerForm';
import initialPlayers from './playerData';
import './App.css';

function App() {
	const [players, setPlayers] = useState(initialPlayers);

	const addPlayer = (player) => {
		setPlayers((prevPlayers) => [...prevPlayers, player]);
	};

	return (
		<div className="App">
			{players.map((player, index) => (
				<BasketballPlayerCard
					key={index}
					name={player.name}
					image={player.image}
					position={player.position}
					stats={player.stats}
				/>
			))}
			<AddPlayerForm onAddPlayer={addPlayer} />
		</div>
	);
}

export default App;
