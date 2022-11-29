import Input from '../Input'
import styled from 'styled-components'
import {useState} from 'react'
import {Livros} from './dados'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    margin-bottom:50px;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;    
`
const Resultado = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`



function Pesquisa(){
    const [livrosPesquisados, setlivrosPesquisados]= useState([])

    return (
    <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <SubTitulo>encontre seu livro em nossa estante.</SubTitulo>
        <Input 
        placeholder="Escreva sua próxima leitura"
        onChange={evento =>{
            const textoDigitado= evento.target.value
            const resultadoPesquisa=Livros.filter(livro =>livro.nome.includes(textoDigitado))
            setlivrosPesquisados (resultadoPesquisa)
        }}
        ></Input>
        {
            livrosPesquisados.map(
                livro=>(
                <Resultado>
                    <img src={livro.src}></img>
                    <p>{livro.nome}</p>
                </Resultado>   
                )
            )
        }
    </PesquisaContainer>
    )
}

export default Pesquisa