import React, {useState, useEffect} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import logo from './assets/comunikime.png';

function App() {
  
  const baseUrl="https://localhost:44377/api/TodoItems";
  const [data, setData]=useState([]);
  const [modalCadastrar, setModalCadastrar]=useState(false);

  const [produtoSelecionado, setProdutoSelecionado]=useState({
    id: '',
    name:'',
    marca:'',
    preco:'',
    fornecedor:'',
  })

    const abrirFecharModalCadastrar=()=>{
      setModalCadastrar(!modalCadastrar);
    }

  const handleChange = e=>{
    const {name,value} = e.target;
    setProdutoSelecionado({
      ...produtoSelecionado,[name]:value
    });
    console.log(produtoSelecionado);
  }

  const pedidoGet = async()=>{
    await axios.get(baseUrl).then(response => {
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const pedidoPost = async()=>{
    delete produtoSelecionado.id;
    await axios.post(baseUrl, produtoSelecionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirFecharModalCadastrar();
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
      <button className="btn btn-success" onClick={()=>abrirFecharModalCadastrar()}>Adicionar Produto</button> 
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
    <Modal isOpen={modalCadastrar}>
      <ModalHeader>Cadastrar Produtos</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nome: </label>
          <br />
          <input type="text" className="form-control" name="name" onChange={handleChange}/>
          <label>Marca: </label>
          <br />
          <input type="text" className="form-control" name="marca" onChange={handleChange}/>
          <label>Preço: </label>
          <br />
          <input type="text" className="form-control" name="preco" onChange={handleChange}/>
          <label>Fornecedor: </label>
          <br />
          <input type="text" className="form-control" name="fornecedor" onChange={handleChange}/>
        </div>
      </ModalBody>
    <ModalFooter>
      <button className="btn btn-primary" onClick={()=>pedidoPost()}>Cadastrar</button>{" "}
      <button className="btn btn-danger" onClick={()=>abrirFecharModalCadastrar()}>Cancelar</button>
    </ModalFooter>
    </Modal>
    </div>
  );
}

export default App;
