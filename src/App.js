import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
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


const App = () => {
  return (
      <Router>
        <div className="container-fluid">
        <Navigation></Navigation>
        </div>
      <Switch >
        <Route exact path="/">
        <Inicio></Inicio>
        </Route>
        <Route exact path="/empresa">
        <Empresa></Empresa>
        </Route>
        <Route exact path="/contacto">
        <Contacto></Contacto>
        </Route>
        <Route exact path="/productos">
        <Productos></Productos>
        </Route>
        <Route exact path="/servicios/almacenaje">
        <Almacenaje></Almacenaje>
        </Route>
        <Route exact path="/servicios/logistica">
        <Logistica></Logistica>
        </Route>
        <Route exact path="/servicios/agro">
        <Agro></Agro>
        </Route>
        <Route exact path="*">
              <Error404></Error404>
            </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
   
  );
};

export default App;