import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { Grid, Navbar, Nav, NavItem, Panel, Row, Col } from 'react-bootstrap';
import Fav from './Crypto';
import App from './Home';


const BasicExample = () => (
  <Router>
    <div>
      <Navbar fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Basic Playground</a>
            </Navbar.Brand>
            <Nav>
              <NavItem><Link to="/fav">Favorites</Link></NavItem>
              <NavItem><Link to="/">Cryptos</Link></NavItem>
            </Nav>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
      <hr />
      <Switch>
        <div className="container">
      <Route exact path="/" component={App} />
      <Route path="/fav" component={Fav} />
      </div>
      </Switch>
    </div>
  </Router>
)
export default BasicExample

