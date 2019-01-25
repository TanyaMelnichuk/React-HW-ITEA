import React, { Component } from 'react';

import Products from "./products.json";

import Image from './Image';
import Row from './Row';
import Cell from './Cell';
import './App.css';

console.log(Products);
class App extends Component {

  render() {
    return (
      <div>
          <div>
              <Image imageUrl='https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png'/>
          </div>
        <hr/>
        <table>
          <thead>
            <Row head="true">
                <Cell>Id</Cell>
                <Cell>Date</Cell>
                <Cell>Quantity</Cell>
                <Cell>Price</Cell>
            </Row>
          </thead>
          <tbody>
          {
              Products.map(product =>
                  <Row key={product.id}>
                      <Cell type="" background={product.color}>{product.id}</Cell>
                      <Cell type="date" color="blue">{product.date}</Cell>
                      <Cell type="number">{product.quantity}</Cell>
                      <Cell type="money" currency={product.currency}>{product.price}</Cell>
                  </Row>
              )

          }

          </tbody>
        </table>
      </div>

    );
  }
}

export default App;
