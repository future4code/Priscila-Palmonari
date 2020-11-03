import React from "react";
import axios from "axios";

const axiosConfig ={
    headers:{Authorization: "priscila-lepping-dumont"}
}

export default class DetalhePlaylist extends React.Component{
  state ={
      playlistDetalhe: {},
      playlistEdicao: "btnEditar",
      name: ""
  }
  
  componentDidMount(){
      this.getPlaylistDetalhe();
  }

  getPlaylistDetalhe =() =>{
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}`,axiosConfig)
      .then(resposta =>{this.setState({playlistDetalhe: resposta.data})
    })
    .catch(erro =>{console.log(erro)})
  }

  changePlaylistEdicao =() =>{
      if(this.state.playlistEdicao === "btnEditar"){
          this.setState({playlistEdicao: "playlistEditForm"})
      }else{
          this.setState({playlistEdicao: "btnEditar"})
      }
  }

  mudarNome = event =>{
      const newNameValue = event.target.newNameValue
      this.setState({name: newNameValue})
  }

     render(){
         const playlistEdicao = 
         this.state.playlistEdicao === "btnEditar"?(
             <button onClick={this.mudarNome}>Editar Playlist</button>) : (
                 <div>
                     <input placeholder="Nome" type="text" value={this.state.name} onChange={this.mudarNome}/>
                 </div>
             )
             
        return(
            <div>

            </div>
        )
    }
}