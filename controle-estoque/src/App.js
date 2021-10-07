import React, {useState, useEffect} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import logo from './assets/comunikime.png';

function App() {
  
  const baseUrl="https://localhost:44377/api/TodoItems";
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
    <div className="App"> 
    <br/>
    <h3>Cadastro de Produtos</h3>
    <header>
      <img src={logo} alt="logo"/> 
      <button className="btn btn-success">Adicionar Produto</button> 
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
            <td>
              <button className="btn btn-primary">Editar</button> {" "}
              <button className="btn btn-danger">Excluir</button> 
            </td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
