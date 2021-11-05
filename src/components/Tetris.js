import React, {useState} from 'react'
import { createStage, checkForCollision } from '../gameHelpers';

//styled components
import { StyledTetrisWrapper, StyledTetris } from './compStyles/StyledTetris';

//custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';


import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

	const [ dropTime, setDropTime ] = useState( null );
	const [ gameOver, setGameOver ] = useState(false);

	const [ player, updatePlayerPositon, resetPlayer ] = usePlayer();
	const [stage, setStage] = useStage(player);

	console.log( 're-render' );

	const movePlayer = direction => {
		// updatePlayerPositon( { x: direction, y: 0 } );
		if (!checkForCollision(player, stage, {x: direction, y: 0})) {
			updatePlayerPositon( { x: direction, y: 0 } );
		}
	}

	const startGame = () => {
		//Reset Game
		setStage( createStage() );
		resetPlayer();
		setGameOver( false );
	}

	const drop = () => {
		if ( !checkForCollision( player, stage, { x: 0, y: 1 } ) ) {
			updatePlayerPositon({ x: 0, y: 1, collided: false });
		} else {
			// condition for gameover
			if (player.playerPosition.y < 1) {
				alert( "GAME OVER" );
				setGameOver( true );
				setDropTime( null );
			}
			updatePlayerPositon({ x:0, y:0, collided: true })
		}
		
	}

	const dropPlayer = () => {
		drop();
	}

	const move = ( { keyCode } ) => {
		if ( !gameOver ) {
			if (keyCode === 37) {
				movePlayer(-1);
			} else if (keyCode === 39) {
				movePlayer(1);
			} else if (keyCode === 40) {
				dropPlayer();
			}
		}
	}

    return (
			<StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
				<StyledTetris>
					<Stage stage={stage} />
					<aside>
						{gameOver ? (
							<Display gameOver={gameOver} text='Game Over' />
						) : (
							<div>
								<Display text='Score' />
								<Display text='Rows' />
								<Display text='Level' />
							</div>
						)}
						<StartButton callback={startGame} />
					</aside>
				</StyledTetris>
			</StyledTetrisWrapper>
		);
}

export default Tetris
