import{BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Funcionalidades from './pages/Funcionalidades';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

import './style.css'
function App(){

    return (

        <BrowserRouter>
          <Header />
            <Routes>
             
                <Route path="/" exact={true} element={<Home/>} />
                <Route path="/Funcionalidades"  element={<Funcionalidades/>}/>
                <Route path="/contato"  element={<Contato/>}/>
                
            </Routes>
            <Footer />
       
        </BrowserRouter>
    )
}

export default App;