import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contacto from './components/Contacto';
import Empresa from './components/Empresa';
import Productos from './components/Productos';
import Almacenaje from './components/Almacenaje'
import Agro from './components/Agro'
import Logistica from './components/Logistica'
import Error404 from "./components/Error404"


const App = () => {
  return (
      <Router>
        <div className="container-fluid">
        <Navigation/>
        </div>
      <Switch >
        <Route exact path="/">
        <Inicio/>
        </Route>
        <Route exact path="/empresa">
        <Empresa/>
        </Route>
        <Route exact path="/contacto">
        <Contacto/>
        </Route>
        <Route exact path="/productos">
        <Productos/>
        </Route>
        <Route exact path="/servicios/almacenaje">
        <Almacenaje/>
        </Route>
        <Route exact path="/servicios/logistica">
        <Logistica/>
        </Route>
        <Route exact path="/servicios/agro">
        <Agro/>
        </Route>
        <Route exact path="*">
              <Error404/>
            </Route>
      </Switch>
      <Footer/>
      </Router>
      
   
  );
};

export default App;