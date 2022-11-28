import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoCompleta = styled.div `
  display: flex;
  align-items: center;
  font-size: 30px;
`

const LogoImage = styled.img`
  margin-right: 10px;
  height: 60px;
`

function Logo(){
    return (
    <LogoCompleta>
        <LogoImage src={logo} alt='logo'/>
        <p><strong>ALURA</strong>Books</p>
    </LogoCompleta>
  )
}

export default Logo