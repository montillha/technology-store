import "./BotaoOpcao.css"
const BotaoOpcao=(props)=>{
    const aoEscolhido=(evento)=>{
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="botao-opcao">
                {props.itens.map(item => (
                    <label key={item}>
                        <input
                            type="radio"
                            value={item}
                            name='opcao'
                            onChange={aoEscolhido}
                        />
                        {item}
                    </label>
                ))}

        </div>

    )
}
export default BotaoOpcao;