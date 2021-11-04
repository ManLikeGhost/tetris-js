import React, {useState} from 'react'
import { createStage } from '../gameHelpers';

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

	const [ player ] = usePlayer();
	const [stage, setStage] = useStage(player);

	console.log( 're-render' );

	const movePlayer = direction => {

	}

	const startGame = () => {

	}

	const drop = () => {

	}

	const dropPlayer = () => {

	}

	const move = ( { keyCode } ) => {
		
	}

    return (
			<StyledTetrisWrapper>
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
						<StartButton />
					</aside>
				</StyledTetris>
			</StyledTetrisWrapper>
		);
}

export default Tetris
