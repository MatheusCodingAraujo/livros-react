import './style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'


function icons(){
    const icones =[perfil,sacola]
    return(
        <ul className='icons'>
            {icones.map((icons)=>(<li className='icon'><img src={icons}></img></li>))}
        </ul> 
    )
}

export default icons