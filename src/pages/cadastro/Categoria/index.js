import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
    <PageDefault>
        <h1>Cadastro de Categoria</h1>
        
        <form>
          <label>Nome da Categoria</label>
          <inpu></inpu>
        </form>
        <Link to="/">
          Ir para Home
        </Link>
    </PageDefault>
    )
  }

  export default CadastroCategoria;