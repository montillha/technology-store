
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";
import BotaoOpcao from "../BotaoOpcao/BotaoOpcao";
const Formulario=(props)=>{
    const secoes=[
        'Computadores',
        'Acessórios',
        'Impressoras',
        'Games',
        'Gadgets'
    ]
    const marcas = [
        'HP',
        'Dell',
        'Positivo',
        'Asus',
        'Xing Ling Genérico'
    ]
    const estados = [
        'Novo',
        'Usado'
    ]

    //Criando os estados
    const[secao,setSecao]=useState('')
    const[marca,setMarca]=useState('')
    const[nome,setNome]=useState('')
    const[preco,setPreco]=useState('')
    const[situacao,setSituacao]=useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoProdutoCadastrado(
            {
            "secao":secao,
            "marca":marca,
            "nome":nome,
            "preco":preco,
            "situacao":situacao
            }
        );
        console.log('Form foi submetido=>',secao,marca,nome,preco,situacao);
    }
    //FAlta fazer o outro componente 
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do Produto</h2>
                <ListaSuspensa label="Seção:" itens={secoes} aoAlterado={valor=>setSecao(valor)}/>
                <ListaSuspensa label="Marca:" itens={marcas} aoAlterado={valor=>setMarca(valor)}/>
                <CampoTexto label="Nome:" placeholder="Digite o nome do produto" aoAlterado={valor=>setNome(valor)}/>
                <CampoTexto label="Preço:" placeholder="Digite o preço do produto" aoAlterado={valor=>setPreco(valor)}/>
                <BotaoOpcao itens={estados} aoAlterado={valor=>setSituacao(valor)}/>
                <Botao>Cadastrar Produto</Botao>
            </form>
        </section>
    )
}
export default Formulario