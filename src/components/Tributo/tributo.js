import React ,{Component} from "react";
import {Sobre} from '../Sobre/sobre';
import {Social} from '../Social/social';

export class Tributo extends Component {
    render(){  
    return(
        <div>
          <Sobre nome={this.props.nome} arma={this.props.arma} 
                 distrito={this.props.distrito} idade={this.props.idade} bio={this.props.bio}/>
          <Social capitoltv={this.props.CapitolTv}/>
            <hr/>
        </div>
  )};
}
