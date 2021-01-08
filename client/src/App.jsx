import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from "./pages/Home.jsx"
import { ToyApp } from "./pages/ToyApp.jsx"
import { Chart } from "./pages/Chart.jsx"
import { ToyEdit } from "./cmps/ToyEdit.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/toy/edit/:toyId?" component={ToyEdit} />
          <Route path="/toy" component={ToyApp} />
          <Route path="/chart" component={Chart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
