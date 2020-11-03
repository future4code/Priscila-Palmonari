import React from "react";
import axios from "axios";
import DetalhePlaylist from "./DetalhePlaylist";
import styled from "styled-components";

const BtnDeletar =  styled.span`
color: red;
`
const axiosConfig ={headers:{Autorization: "priscila-lepping-dumont"}}


export default class Playlist extends React.Component{
  state ={
      listaPlaylist:[],
      paginaAtual:"playlist",
      id:"",
      name:""
  }

  componentDidMount(){
      this.pegarPlaylist()  
  }

  pegarPlaylist =() =>{
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",axiosConfig)
      .then(resposta =>{this.setState({listaPlaylist: resposta.data})
    })
  }

  deletarPlaylist = id =>{
      if(("Tem certeza que deseja deletar a playlist??")){
          axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,axiosConfig)
          .then(() =>{alert("Playlist deletada com SUCESSO!!")
          this.pegarPlaylist();
        })
        .catch(erro =>{alert("Erro ao deletar a playlist!")
        console.log(erro)
        })
      }
  }

  mudarPagina = id =>{
      if(this.state.mudarPagina === "listaPlaylist"){
          this.setState({paginaAtual: "detalhePlaylist", id: id})
      }else{
          this.setState({paginaAtual: "listaPlaylist", id: ""})
      }
  }

  nameChange = event =>{
      const newNamevalue = event.target.value
      this.setState({name: newNamevalue})
  }

  //buscarPlaylist = () =>{
      //axios.get
  //}
    render(){
        return(
            <div>

            </div>
        )
    }
}