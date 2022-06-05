import imgPrincipalGed from '../../images/principal-ged.svg'
import './home.css';
const Home = () => {
    return (
    <main className="container-home">
        <img src={imgPrincipalGed} alt="principal ged"/>
        <div>
        <h1>A Gestão Eletrônica de Documentos Acessivel ao Seu Bolso </h1>
        <p>O Pure Ged tem como premissa simplificar a gestão eletrônica de documentos.
            com ele é possível cadastrar documentos, criar categorias, gerenciar grupos
            de usuários e permissões de acesso aos módulos do sistema, por um preço justo.
            Clique no botão abaixo e faça um teste.
            (usuario:demo@mesalvati.com.br/senha: demo@gedwe12)
        </p>
            <button onClick={(redireciona)}>Faça um teste agora</button>
        </div>
    </main>
  
    )
}


const redireciona =  () =>{
    window.open('http://www.mesalvati.com.br/demo/ged', '_blank');
    
 }



export default Home;