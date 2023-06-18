import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
    padding: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
    padding: 8px;
  }
`;
