import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Header from './components/header';
import Login from './components/pages/login';
import Ingreso from './components/pages/ingreso';
import Mapa from './components/pages/mapa';
import EditUser from './components/pages/editUser';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from './components/pages/registerUser';




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
          <Route component={EditUser} exact path={["/usuario","/user"]}></Route>
          <Route component={RegisterUser} exact path={["/registro","/register"]}></Route>
        </Switch>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
