import styled from 'styled-components'

const Opcoes = styled.ul`
  display: flex;
  align-items: center;
`

const Opcao = styled.li`    
  font-size: 16px;
  display: flex;
  min-width: 120px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

function opcoes(){
    const textopcoes = ['CATEGORIAS','FAVORITOS',' MINHA ESTANTE']
    return(
        <Opcoes>
          {textopcoes.map((text)=>(<Opcao><p>{text}</p></Opcao>))}
        </Opcoes>
    )
}

export default opcoes