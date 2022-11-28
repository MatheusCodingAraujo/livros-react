import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

//aqui fica a estilização, no lugar do css, esta sendo feita com styled components
const Icone = styled.li `
    margin-right: 40px;
    width: 25px;
    align-items: center;
`

const IconeLista = styled.ul`
    display: flex;
    align-items: center;
`


function icons(){
    const icones =[perfil,sacola]
    return(
        <IconeLista>
            {icones.map((icons)=>(<Icone><img src={icons}></img></Icone>))}
        </IconeLista> 
    )
}

export default icons