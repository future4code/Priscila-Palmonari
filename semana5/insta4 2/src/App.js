import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Neil'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Priscila'}
          fotoUsuario={'https://picsum.photos/50/60'}
          fotoPost={'https://picsum.photos/200/160'}
        />

        <Post
          nomeUsuario={'Lilian'}
          fotoUsuario={'https://picsum.photos/50/70'}
          fotoPost={'https://picsum.photos/200/170'}
        />
      </div>
    );
  }
}

export default App;
