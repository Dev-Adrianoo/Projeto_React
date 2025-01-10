import React, { Component } from "react";

interface socialProps {
  instagram?: string
  Tiktok?: string
}
interface EquipeProps extends socialProps{
  nome: string
  cargo: string
  idade: string
}



class Equipe extends Component <EquipeProps> {
  render(): React.ReactNode {
    return (
      <div>
      <Sobre 
      nome={this.props.nome}
      cargo={this.props.cargo}
      idade={this.props.idade}
      />
      <Social 
      instagram={this.props.instagram}
      Tiktok={this.props.Tiktok}
      />
      </div>
    )
  }
}

class Sobre extends Component <EquipeProps>{
  render(): React.ReactNode {
    return (
      <div>
      <h2>Olá sou o(a): {this.props.nome}</h2>
      <h3>Profissão: {this.props.cargo} </h3>
      <h3>idade: {this.props.idade} anos </h3>
      </div>
    )
  }
}

const Social = (props: socialProps): JSX.Element => {
  return(
    <div>
      <h3><a href="https://instagram.com.br">Instagram {props.instagram}</a></h3>
      <h3><a href="https://www.tiktok.com/pt-BR/">Tik Tok {props.Tiktok}</a></h3>
      <hr />
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Adriano" cargo="Desenvolvedor" idade="24" />
      <Equipe nome="Hilary" cargo="Psicologa" idade="17" />
    </div>
  )
};

export default App;