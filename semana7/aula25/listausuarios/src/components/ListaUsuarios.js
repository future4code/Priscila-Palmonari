import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const BtnDeletar = styled.span`
    background: red;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const autorizacao = {headers:{Authorization:"priscila-lepping-dumont"}};



class ListaUsuarios extends React.Component{
    state ={
        listaUsuarios: [],
    };

    componentDidMount =() =>{
        this.pegaTodosUsuarios();
    };

    pegaTodosUsuarios = () =>{
        axios.get(url,autorizacao)
        .then((resposta) => {
            this.setState({listaUsuarios: resposta.data});
        })
        .catch((erro) => {
            console.log(erro.message);
        });
    };

    deletarUsuarios = (usuarioId) =>{
        axios.delete(`${url}/${usuarioId}`,autorizacao)
        .then((resposta) =>{alert("Usuário deletado com sucesso!");
        })
        .catch((erro) =>{
            console.log(erro.message);
        });
        
    };

    render(){
        const renderizarListaUsuario = this.state.listaUsuarios.map((usuario) =>{
            return(
                <p key={usuario.id}> 
                   {usuario.name} 
                  <BtnDeletar onclick={() => this.deletarUsuarios(usuario.id)}>
                    Deletar
                  </BtnDeletar>
                </p>
            );
        });
        return
        <div>{renderizarListaUsuario} </div>;
            
       
    }
}
export default ListaUsuarios;