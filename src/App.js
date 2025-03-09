import React, { useState } from "react";
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import ListaProdutos from "./componentes/ListaProdutos/ListaProdutos";


function App() {
  const[produtos,setProdutos]=useState( [] )
  const adicionaProduto=(produto)=>{
    console.log(produto)
    const novaListaProdutos=produtos.slice();
    novaListaProdutos.push(produto)
    setProdutos(novaListaProdutos)

  }
    return (
    <div className="App">
      <Banner/>
      <Formulario aoProdutoCadastrado={produto=>adicionaProduto(produto)}/>
      <ListaProdutos objetos={produtos}/>   
       </div>
  );
}

export default App;
