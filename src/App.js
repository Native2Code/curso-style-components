import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background: palevioletred;
	border-radius: 3px;
	border: none;
	color: white;
	margin: 0 1em;
	padding: 1em 3em;
`;

const StyledContainer = styled.div`
	padding: 4em;
	min-height: 100vh;
	min-width: 100vw;
	background: papayawhip;
`;

function App() {
	return (
		<StyledContainer>
			<StyledButton>Button</StyledButton>
		</StyledContainer>
	);
}

export default App;
