import React, { Component } from "react";

interface AppProps {
  email: string
  senha: string
}

interface AppState extends AppProps {
  email: string
  senha: string
}

class App extends Component<AppState, AppProps>
{

  constructor(props: AppProps){
    super(props)
    this.state = {
      email: 'teste@teste.com',
      senha: '',
    }
    this.TrocaEmail = this.TrocaEmail.bind(this)
   }
   TrocaEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({email: event.target.value});
  }

  render(): React.ReactNode {
    return (
      <main>
        <h1>Login</h1>
        Email:
        <input
        type="email"
         name="email" 
         id="" 
         value={this.state.email}
        onChange={this.TrocaEmail}/> <br />
        Senha:
        <input 
        type="password"
         name="password" 
         id="" 
         value={this.state.senha}/>
      </main>
    )
  }
}

export default App