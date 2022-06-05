import './contato.css'
const Contato = () => {
    return (
    <div className="container-contato">
        <form>

           <input placeholder="Nome" /> 
           <input placeholder="E-mail" /> 
           <input placeholder="Assunto" />
           <textarea placeholder="Mensagem" />
           <input className="btn-enviar" type="submit" />
        </form>
    </div>
  
    )
}

export default Contato;