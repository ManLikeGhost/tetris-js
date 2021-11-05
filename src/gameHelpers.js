export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
	Array.from(Array(STAGE_HEIGHT), () =>
		new Array(STAGE_WIDTH).fill([0, 'CLEAR'])
	);

export const checkForCollision = (player, stage, { x: moveX, y: moveY }) => {
	for (let y = 0; y < player.tetromino.length; y += 1) {
		for (let x = 0; x < player.tetromino[y].length; x += 1) {
			// step 1 check you are on a mino cell!!
			if ( player.tetromino[ y ][ x ] !== 0 ) {
                if (
                    // step 2 check that movement is within the area span height(y axis)!!
                // also not go through the bottom!!
                !stage[y + player.playerPosition.y + moveY] ||
                // step 3 check that movement is within the area span width(x axis)!!
                !stage[y + player.playerPosition.y + moveY][x + player.playerPosition.x + moveX] ||
                // step 4 check if cell isn't clear!! 
                stage[y + player.playerPosition.y + moveY][x + player.playerPosition.x + moveX][1] !== 'CLEAR'
                ) {
                    return true;
                }

			}
		}
	}
};
