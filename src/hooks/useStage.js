import { useState, useEffect } from 'react';
// import { prev } from 'react-bootstrap/esm/PageItem';

import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
	const [stage, setStage] = useState(createStage());

	useEffect(() => {
		const updateStage = (prevStage) => {
			// First clean up stage
			const newStage = prevStage.map( ( row ) =>
				row.map( ( cell ) => ( cell[ 1 ] === 'CLEAR' ? [ 0, 'CLEAR' ] : cell ) ),
			);
			// draw tetromino
			player.tetromino.forEach((row, y) => {
				row.forEach((value, x) => {
					if (value !== 0) {
						newStage[y + player.playerPosition.y][
							x + player.playerPosition.x
						] = [value, `${player.collided ? 'merged' : 'CLEAR'}`];
					}
				});
			});
			// Then check if we collided
			if ( player.collided ) {
				resetPlayer();
			}


			return newStage;
		};
		setStage((prev) => updateStage(prev));
	}, [player, resetPlayer]);

	return [stage, setStage];
};
