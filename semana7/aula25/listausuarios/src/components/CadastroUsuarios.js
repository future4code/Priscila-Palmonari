import React from 'react'
import axios from 'axios';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const autorizacao = {headers:{Authorization:"priscila-lepping-dumont"}};

class CadastroUsuarios extends React.Component {
 state = {
   nameValue: "",
   emailValue: ""
 };

 criarUsuario = () =>{
   const body ={
     name: this.state.nameValue,
     email: this.state.emailValue
   };

axios.post(url,autorizacao,body)
 .then(() =>{
   alert("Usuário criado com sucesso!");
   this.setState({nameValue:"", emailValue:""});
  })
 .catch((erro) =>{
   console.log(erro.message);
 });

};

onChangeNameValue = (event) =>{
  this.setState({nameValue: event.target.value});
};

onChangeEmailValue = (event) =>{
  this.setState({emailValue: event.target.value});
};

 render(){
    return (
      <div>
        <input placeholder="Nome do Usuário"
            value={this.state.nameValue} onChange={this.onChangeNameValue}/>

            <input placeholder="Email"
            value={this.state.emailValue} onChange={this.onChangeEmailValueValue}/>

            <button onClick={this.criarUsuario}> Criar Usuários </button>   
      </div>
               
    );
  }
}
    
    export default CadastroUsuarios;