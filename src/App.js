import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Counter from "./component/Counter";
import Form from "./component/Form";
import Home from "./component/Home";
import "./styles.css";
const App = () => {
  return (
    <Router>
      <div id="container">
        <div id="header">
          <h1>
            <Link to="/">Home</Link>
          </h1>
        </div>
        <div id="wrapper">
          <div id="content">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        <div id="navigation">
          <p>
            <strong>Navigation Here</strong>
          </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div id="extra">
          <p>
            <strong>More stuff here.</strong>
          </p>
          <p>
            sit malesuada lacus pellus parturpiscing. Pellenterdumat
            maecenatoque cras a magna nibh et quis diam ames et. Laoremvolutpat
            ac dolor eget eget temper lacus vestibus velit lacus venean.
            Magnaipsum tellus morbi leo aliquat nulla convallis pellentesque.
          </p>
        </div>
        <div id="footer">
          <p>Footer</p>
        </div>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
