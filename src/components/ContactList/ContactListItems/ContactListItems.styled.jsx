import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 8px;
  }
`;

export const ContactName = styled.span`
  font-weight: bold;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ContactNumber = styled.span`
  color: #555;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #ccc;
  color: #fff;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #888;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;
