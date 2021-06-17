import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import ComponenteClase from './components/componenteClase';
import ComponenteFuncional from './components/componenteFuncional';

function App() {
return (
    <div>
        <Route path="/">
            <NavBar />
        </Route>

        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/componenteClase">
            <ComponenteClase />
        </Route>

        <Route path="/componenteFuncional">
            <ComponenteFuncional />
        </Route>
    </div>
);
}

export default App;
