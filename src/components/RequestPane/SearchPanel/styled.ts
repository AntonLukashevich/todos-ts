import styled from 'styled-components';

export const Panel = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
`

export const SearchBar = styled.input`
  width: 100%;
  background-color: #2F2C36;
  border: 1px solid #9CA3AF;
  color: whitesmoke;

  font-size: 16px;
  &::placeholder{
    font-style: italic;
  }
`

export const Devider = styled.hr`
  color: whitesmoke;
  margin: 5px;
  width: 100%;
`

export const SendButton = styled.button`
  width: 70px;
  background-color: #a78bfa;
  color: whitesmoke;
  border: none;
  padding: 5px;
`
