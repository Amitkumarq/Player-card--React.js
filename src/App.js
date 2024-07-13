import React from 'react';
import BasketballPlayerCard from './component/BasketballPlayerCard';
import players from './playerData';

function App() {
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
		</div>
	);
}

export default App;
