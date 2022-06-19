import React from "react";
import {Tributo} from './components/Tributo/tributo';

function App(){
    return (
      <div>
        <h1>Olá, cidadãos da Capital!</h1> 
        <h2>Conheçam nossos corajosos tributos:</h2>
            <hr/>
        <Tributo nome="Katniss Everdeen" arma="Arco" 
                  distrito= "12" idade="16" CapitolTv= "https://jogosvorazes.fandom.com/wiki/Katniss_Everdeen" bio="Voluntariou-se como tributo no lugar da irmã, Primrose Everdeen."/>
        <Tributo nome="Peeta Malark" arma="Disfarce/Espada" 
                  distrito= "12" idade="17" CapitolTv= "https://jogosvorazes.fandom.com/wiki/Peeta_Mellark" bio="Padeiro, um verdadeiro artista. Tem muita força e pode ser muito manipulador."/>
      </div>
  );
}

export default App;