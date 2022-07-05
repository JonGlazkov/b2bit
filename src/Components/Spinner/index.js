import styled from 'styled-components'
import { CircleNotch } from 'phosphor-react'

export default styled(CircleNotch)`
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  animation: spin 3s linear infinite;

  width: 20px;
  height: 20px;
`
