import React from 'react';
import styled from 'styled-components';

// Componente estilizado para o cabeçalho
const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Cabecalho = () => (
  <HeaderContainer>
    <h1>EBAC Jobs</h1>
  </HeaderContainer>
);

export default Cabecalho;
