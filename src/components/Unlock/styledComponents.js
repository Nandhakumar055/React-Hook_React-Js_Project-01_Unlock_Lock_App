import styled from 'styled-components'

export const LockContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 10px;
`

export const LockImage = styled.img`
  width: 100px;
`

export const LockText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
  color: white;
  margin-bottom: 60px;
  text-align: center;
`

export const LockButton = styled.button`
  color: white;
  background-color: blue;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`
