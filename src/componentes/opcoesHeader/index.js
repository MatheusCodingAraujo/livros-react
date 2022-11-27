import './style.css'

function opcoes(){
    const textopcoes = ['CATEGORIAS','FAVORITOS',' MINHA ESTANTE']
    return(
        <ul className='opcoes'>
          {textopcoes.map((text)=>(<li className='opcao'><p>{text}</p></li>))}
        </ul>
    )
}

export default opcoes