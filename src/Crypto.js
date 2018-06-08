import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, PageHeader, Navbar, Panel, Row, Col } from 'react-bootstrap';
let axios = require('axios');


class Fav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myCryptos: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=50`)
            .then(res => {
                console.log(res.data);
                const cryptos = res.data;
                let myCryptos = cryptos.filter((crypto) => {
                    if (crypto.name === 'Bitcoin') return true
                    if (crypto.name === 'NEO') return true
                    if (crypto.name === 'TenX') return true
                })
                this.setState({ myCryptos });
                console.log(myCryptos);
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
                    Favourite Cryptos
                </p>
                <Grid>
                    <Row className="show-grid">
                        {this.state.myCryptos.map(crypto =>
                            <Col xs={6} md={4} key={crypto.id}>
                                <Panel className="CryptoBlocks">
                                    {crypto.name} USD: {crypto.price_usd} Change: {crypto.percent_change_1h}
                                     BTC: {crypto.price_btc}
                                </Panel>
                            </Col>
                        )}
                    </Row>
                </Grid>

            </div>
        );
    }
}




export default Fav;