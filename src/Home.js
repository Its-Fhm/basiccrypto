import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, PageHeader, Navbar, Panel, Row, Col } from 'react-bootstrap';
let axios = require('axios');



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cryptos: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=50`)
            .then(res => {
                console.log(res.data);
                const cryptos = res.data;
                this.setState({ cryptos });
            });
    }

    render() {
        return (
            <div className="App">
                <PageHeader>
                    <img src={logo} className="App-logo" alt="logo" />
                    React Cryptos <small>Intergrate CMC API</small>
                </PageHeader>
                <p className="App-intro">
                    All Cryptos
        </p>
                <Grid>
                    <Row className="show-grid">
                        {this.state.cryptos.map(crypto =>
                            <Col xs={6} md={4} key={crypto.id}>
                                <Panel className="CryptoBlocks">
                                    {crypto.name} Price: {crypto.price_usd} Change: {crypto.percent_change_1h}
                                </Panel>
                            </Col>
                        )}
                    </Row>
                </Grid>
            </div>
        );
    }
}




export default App;