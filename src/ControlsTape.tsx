import { FC } from 'react'
import styled from '@emotion/styled'

const ControlsTape: FC = () => {
  return <Container>I am the ControlsTape</Container>
}

export default ControlsTape

const Container = styled.aside`
background-color: ${props => props.theme.colors.surface2};
display: flex;
flex-direction: column;
`