import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledButton } from './styles/Button';
import { StyledContainer } from './styles/Container';

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<StyledContainer>
				<StyledButton>Button</StyledButton>
			</StyledContainer>
		</React.Fragment>
	);
}

export default App;
