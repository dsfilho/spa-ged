import telaPrincipalGed  from '../../images/telaPrincipalGed.png';
import telaCadastroDocumento  from '../../images/telaCadastroDocumento.png';
import telaCadastroUsuario  from '../../images/telaCadastroUsuario.png';
import telaLogOperacoes  from '../../images/telaLogOperacoes.png';
import './styles.css'
const Funcionalidade = ({name,imagem}) =>{

    return(
        
        <div className="container-funcionalidade">
           <img src={selecionaImagem(imagem)} alt="Tela Principal Ged" />
           <p>{name}</p>
           
        </div>

    )

}

const selecionaImagem =  (imagem) =>{
    
    switch(imagem){
        case 'telaPrincipalGed':
            return telaPrincipalGed
        case 'telaCadastroDocumento':
            return telaCadastroDocumento
        case 'telaCadastroUsuario':
            return telaCadastroUsuario
        case 'telaLogOperacoes':
                return telaLogOperacoes
            
        default:
            return "Imagem não encontrada"
    }
    
 }

export default Funcionalidade;
