import React from 'react';
import CadastroUsuarios from './components/CadastroUsuarios';
import ListaUsuarios from './components/ListaUsuarios';



class App extends React.Component {
 state ={
   cadastroUsuarios: true
 };

 mudarPagina = () =>{
   this.setState({cadastroUsuarios: !this.state.cadastroUsuarios});
 }

  render(){
    const paginaAtual = this.state.cadastroUsuarios ? <CadastroUsuarios/> : <ListaUsuarios/>;
    

  return (
    <div className="App">
    {paginaAtual}
    <button onClick={this.mudarPagina}>Ir para a lista de Usuários</button>
    </div>
  );
  }
}

export default App;
