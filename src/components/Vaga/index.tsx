import styles from './Vaga.module.css'

import React from 'react';
import styled from 'styled-components';

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

// Componentes estilizados utilizando styled-components
const VagaContainer = styled.li`
  list-style: none;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const VagaTitulo = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const VagaList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const VagaListItem = styled.li`
  margin: 5px 0;
`;

const VagaLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Vaga = (props: Props) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaList>
      <VagaListItem>Localização: {props.localizacao}</VagaListItem>
      <VagaListItem>Senioridade: {props.nivel}</VagaListItem>
      <VagaListItem>Tipo de contratação: {props.modalidade}</VagaListItem>
      <VagaListItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </VagaListItem>
      <VagaListItem>Requisitos: {props.requisitos.join(', ')}</VagaListItem>
    </VagaList>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
);

export default Vaga;
