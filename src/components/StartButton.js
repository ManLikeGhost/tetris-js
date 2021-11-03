

import { StyledButton } from './compStyles/StyledButton';

const StartButton = ({ callback }) => (
	<StyledButton onClick={callback}>Start Game</StyledButton>
);

export default StartButton;
