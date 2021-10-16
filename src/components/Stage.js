import react from 'react';
import { StyledStage } from './compStyles/StyledStage'
import Cell from './Cell';

const Stage = ( { stage } ) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell KEY={x} type={cell[0]}/>))}
    </StyledStage>
)

export default Stage;
