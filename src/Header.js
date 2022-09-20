import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderDiv>
      <h1 onClick={() => navigate('/')}>Bibo Art Studio</h1>
    </HeaderDiv>
  );
}
export default Header;

const HeaderDiv = styled.header`
  height: var(--spacing-600);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    cursor: pointer;
  }

  background: radial-gradient(
    circle,
    var(--bibo-orange) 0%,
    var(--bibo-orange) 60%,
    var(--bibo-green) 100%
  );
`;
