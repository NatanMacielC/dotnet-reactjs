import React, {useState, useEffect} from 'react';

import logo from '../assets/comunikime.png';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function VendaProduto() {

    const baseUrl=" https://localhost:44377/api/TodoItems";
    const [data, setData]=useState([]);

    const pedidoGet = async()=>{
        await axios.get(baseUrl).then(response => {
          setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }

      useEffect(()=>{
        pedidoGet();
      })
    return (
        <div className="VendaProduto"> 
    <br/>
    <h3>Venda de Produtos</h3>
    <header>
      <img src={logo} alt="logo"/> 
    </header>
    <table className="table table-bordered" >
      <thead>
        <tr>
          <th>Nome</th>
          <th>Marca</th>
          <th>Preço</th>
          <th>Fornecedor</th>
        </tr>
      </thead>
      <tbody>
        {data.map(todoitem=>(
          <tr key={todoitem.id}>
            <td>{todoitem.name}</td>
            <td>{todoitem.marca}</td>
            <td>{todoitem.preco}</td>
            <td>{todoitem.fornecedor}</td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
    );
}

export default VendaProduto;