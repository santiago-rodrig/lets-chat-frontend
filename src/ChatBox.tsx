import styled from '@emotion/styled'
import { FC } from 'react'

const ChatBox: FC = () => {
  return <Container>I am the ChatBox</Container>
}

export default ChatBox

const Container = styled.main`
background-color: ${props => props.theme.colors.surface1};
color: ${props => props.theme.colors.text1};
flex-grow: 1;
`