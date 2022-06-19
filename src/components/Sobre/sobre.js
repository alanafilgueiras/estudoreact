import React, {Component} from "react";
import './sobre.css';

export class Sobre extends Component {
    render(){
        
    return(
        <div className="mystyle">
            
            <h2>Nome:{this.props.nome}<br/>
             Idade: {this.props.idade}<br/>
             Arma: {this.props.arma}<br/>
             Distrito: {this.props.distrito} <br/><br/>
             Bio: {this.props.bio}</h2> 
        </div>
    );
    }
}