import react from 'react';

import Cell from './Cell';

const Stage = ( { stage } ) => (
    <div>
        {stage.map(row => row.map((cell, x) => <Cell KEY={x} type={cell[0]}/>))}
    </div>
)

export default Stage;
