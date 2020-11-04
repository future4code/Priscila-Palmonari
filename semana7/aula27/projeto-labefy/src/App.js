import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import Playlist from "./components/Playlist";


export default class App extends React.Component {
  state = {
    paginaAtual: "criarPlaylist"
  };

  mudarPagina = () => {
    if (this.state.paginaAtual === "criarPlalist") {
      this.setState({ paginaAtual: "playlist" });
    } else {
      this.setState({ paginaAtual: "criarPlalist" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.mudarPagina}>Página de Playlist</button>
        {this.state.paginaAtual === "criarPlalist" ? <CriarPlaylist/> : <Playlist/>}
      </div>
    );
  }
}