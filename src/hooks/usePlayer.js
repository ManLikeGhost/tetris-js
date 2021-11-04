import { useState, useCallback } from 'react';
import { STAGE_WIDTH } from '../gameHelpers';

import { randomTetromino, TETROMINOS } from '../tetrominos';

export const usePlayer = () => {
	const [player, setPlayer] = useState({
		playerPosition: { x: 0, y: 0 },
		tetromino: TETROMINOS[0].shape,
		collided: false,
	});

	const updatePlayerPositon = ({ x, y, collided }) => {
		setPlayer((prev) => ({
			...prev,
			playerPosition: {
				x: (prev.playerPosition.x += x),
				y: (prev.playerPosition.y += y),
			},
			collided,
		}));
	};

	const resetPlayer = useCallback(() => {
		setPlayer({
            playerPosition: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false,
		});
	}, []);

	return [player, updatePlayerPositon, resetPlayer];
};
