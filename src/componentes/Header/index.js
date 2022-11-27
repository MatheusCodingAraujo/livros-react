import Logo from '../logo'
import Opcoes from '../opcoesHeader'
import Icons from '../iconesHeader'

function Header(){
    return(
        <header className='header'>
            <Logo></Logo>
            <Opcoes></Opcoes>
            <Icons></Icons>
        </header>
    )
}

export default Header