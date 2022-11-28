import Logo from '../logo'
import Opcoes from '../opcoesHeader'
import Icons from '../iconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-image: linear-gradient(90deg, white 35%,#002f52 165%);
    display: flex;
    justify-content: center;
`


function Header(){
    return(
        <HeaderContainer>
            <Logo></Logo>
            <Opcoes></Opcoes>
            <Icons></Icons>
        </HeaderContainer>
    )
}

export default Header