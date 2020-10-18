import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemDePerfil from  './img/11.jpg';
import iconeLocalizacao from './img/iconeLocalizacao.jpg';
import iconeEmail from './img/iconeEmail.jpg';
import iconeCelular from './img/iconeCelular.png';
import iconeConhecimento from './img/iconeConhecimento.png';
import iconeExperiencia from './img/icnoneExperiencia.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {imagemDePerfil}
          nome="Priscila Lepping" 
          descricao="Oi, meu nome é Priscila, sou estudante da Labenu do curso Web Full Stack!!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {iconeExperiencia}
          nome="Experiêcias" 
          descricao="Tenho experiência com suporte técnico em videoConferência" 
        /> 
        
         <h2>Contato</h2>
          <CardPequeno
            imagem= {iconeEmail} 
            email="Email" 
            campoEmail="priscila.lepping@gmail.com"
            />
          <CardPequeno
            imagem= {iconeLocalizacao}
            endereco="Endereço" 
            campoEndereco="Rua: Um, Nº 10"
          />
          <CardPequeno
            imagem= {iconeCelular}
            celular="Celular"
            campoCelular= "(018)1111-2222"/>
        
        
        <h2>Conhecimentos Técnicos</h2>
        <CardGrande 
          imagem= {iconeConhecimento} 
          nome="Conhecimentos Técnios" 
          descricao="C#, Python e JavaScript (básico)" 
        />
      </div >

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
