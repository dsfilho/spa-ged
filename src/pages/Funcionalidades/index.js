import Funcionalidade from '../../componentes/funcionalidade';
import './funcionalidade.css'

const Funcionalidades = () => {
    return (
    <div className="container-funcionalidades">
        <Funcionalidade name="Com o Pure Ged é possível
                        gerenciar seus arquivos de forma simplificada."
                        imagem="telaPrincipalGed" 
         />
        <Funcionalidade name="Cadastar seus documentos para poder 
                        gerencia-los é muito fácil."
                        imagem="telaCadastroDocumento" 
          />
        <Funcionalidade name="Cadastre seu usuários 
                        com poucos cliques e atribua o cargo." 
                        imagem="telaCadastroUsuario"
        />

    <Funcionalidade name="Controle os acessos ao sistema, acesso aos documentos, módulos do sistema e 
    muito mais através do módulo de log" 
                        imagem="telaLogOperacoes"
        />
       
       
    </div>
  
    )
}

export default Funcionalidades;