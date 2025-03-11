import React, { useState } from "react";
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Area from "./componentes/Area/Area";

function App() {
  const[produtos,setProdutos]=useState( [] )
  const adicionaProduto=(produto)=>{
    const novaListaProdutos=produtos.slice();
    novaListaProdutos.push(produto)
    setProdutos(novaListaProdutos)

  }
  const areas = [
    {
      secao: 'Computadores',
      corPrimaria: '#808080',  
      corSecundaria: '#ECECEC'    
    },
    {
      secao: 'Acessórios',
      corPrimaria: '#333333',  
      corSecundaria: '#D1D1D1'  
    },
    {
      secao: 'Impressoras',
      corPrimaria: '#666666',  
      corSecundaria: '#F2F2F2'  

    },
    {
      secao: 'Games',
      corPrimaria: '#4D4D4D',  
      corSecundaria: '#E0E0E0'   
    },
    {
      secao: 'Gadgets',
      corPrimaria: '#808080',  
      corSecundaria: '#ECECEC'  
    }
  ]
    
    
  const listaAreas=areas.map(area=>area.secao)
    return (
    <div className="App">
      <Banner/>
      <Formulario areas={listaAreas} aoProdutoCadastrado={produto=>adicionaProduto(produto)}/>
      {areas.map((area) => ( <Area key={area.secao} secao={area.secao} 
      corPrimaria={area.corPrimaria} 
      corSecundaria={area.corSecundaria}
      produtos={produtos.filter(produto=>produto.secao===area.secao)} /> ))}
       </div>
  );
}

export default App;
