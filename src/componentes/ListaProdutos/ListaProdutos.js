import "./ListaProdutos.css"
const ListaProdutos=(props)=>{
    return(
        <div className="lista-produtos">
            <h2>Produtos Cadastrados:</h2>

            {props.objetos.map((objeto,index)=>(
                <div key={index}>
                    Seção:{objeto.secao} - {objeto.marca} -{objeto.nome} -Preço:{objeto.preco} - {objeto.situacao} <hr/>

                </div>

            ))}

        </div>

    )
}
export default ListaProdutos