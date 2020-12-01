import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Header from './components/header';
import Login from './components/pages/login';
import Ingreso from './components/pages/ingreso';
import Mapa from './components/pages/mapa';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>

      <BrowserRouter>
        <Switch>
          <Route component={Login} exact path={["/","/login"]}></Route>
          <Route component={Ingreso} exact path={["/ingreso","/form"]}></Route>
          <Route component={Mapa} exact path={["/mapa","/map"]}></Route>
        </Switch>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
