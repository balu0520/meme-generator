// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-image: url(${props => props.bgImg});
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  min-width: 300px;
  min-height: 200px;
`
export const Heading = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: ${props => props.textSize};
`
