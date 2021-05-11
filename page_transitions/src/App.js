import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/services' component={Services}></Route>
          </Switch>

      </Router>

    </>
  )
}

export default App;
