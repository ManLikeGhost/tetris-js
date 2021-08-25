import React from 'react';

import { StyledCell } from './compStyles/StyledCell';

import { TETROMINOS } from '../tetrominos';

const Cell = ( { type } ) => (
    <StyledCell type={'S'} color={TETROMINOS['S'].color}>
        CELL
    </StyledCell>
)

export default Cell