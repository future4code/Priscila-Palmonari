import React from "react";
import axios from "axios";

export default class CriarPlaylist extends React.Component{
    state = {
        name: ""
    }
     nameChange = event =>{
         const newNameValue = event.target.newNameValue
         this.setState({name: newNameValue})
     }

     CriarPlaylist = () =>{
         const axiosConfig = { headers: {Autorization: "priscila-lepping-dumont"}}
         const body ={name: this.state.name}

         axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,axiosConfig)
         .then(() =>{alert(`Playlist ${this.state.name} criada com SUCESSO!!`)
          this.setState({name: ""})
        })
         .catch(erro =>{alert("Erro ao criar a Playlist")
          console.log(erro)
        })
     }

    render(){
        return(
            <div>
              <input placeholder="Nome da Playlist" type="text" value={this.state.name} onChange={this.nameChange}/>
              <button onClick={this.CriarPlaylist}> Criar Playlist </button>
            </div>
        )
    }
}