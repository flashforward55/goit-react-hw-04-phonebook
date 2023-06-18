import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
    padding: 8px;
  }
`;
