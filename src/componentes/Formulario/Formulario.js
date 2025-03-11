
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";
import BotaoOpcao from "../BotaoOpcao/BotaoOpcao";
const Formulario=(props)=>{
        const marcas = [
            { nome: "HP", imagem: "/imagens/hp.png" },
            { nome: "Dell", imagem: "/imagens/dell.png" },
            { nome: "Positivo", imagem: "/imagens/positivo.png" },
            { nome: "Asus", imagem: "/imagens/asus.png" },
            { nome: "Xing Ling Genérico", imagem: "/imagens/aleatoria.png" }
        ];
  
    const estados = [
        'Novo',
        'Usado'
    ]

    //Criando os estados
    const[secao,setSecao]=useState('Computadores')
    const[marca,setMarca]=useState({nome:"HP",imagem:"/imagens/hp.png"});
    const[nome,setNome]=useState('')
    const[preco,setPreco]=useState('')
    const[situacao,setSituacao]=useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoProdutoCadastrado(
            {
            "secao":secao,
            "marca":marca.imagem,
            "nome":nome,
            "preco":preco,
            "situacao":situacao
            }
        );
        
    }
  
    return(
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Dados do Produto</h2>
                <ListaSuspensa label="Seção:" itens={props.areas} aoAlterado={valor=>setSecao(valor)}/>

                <ListaSuspensa label="Marca:" itens={marcas.map(m => m.nome)} 
                    aoAlterado={(valor)=>{
                    const marcaEscolhida=marcas.find(marca=>(marca.nome===valor));
                    setMarca(marcaEscolhida)}}/>

                <CampoTexto label="Nome:" placeholder="Digite o nome do produto" aoAlterado={valor=>setNome(valor)}/>
                <CampoTexto label="Preço:" placeholder="Digite o preço do produto" aoAlterado={valor=>setPreco(valor)}/>
                <BotaoOpcao itens={estados} aoAlterado={valor=>setSituacao(valor)}/>
                <Botao>Cadastrar Produto</Botao>
            </form>
        </section>
    )
}
export default Formulario