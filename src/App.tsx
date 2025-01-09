
// interface equipeProps {
//   name: string,
//   cargo: string,
//   age: string
// }


interface SocialMediaProps {
  Youtube?: string
  TikTok?: string
  Instagram?: string
  Linkedin?: string
}
interface AboutProps extends SocialMediaProps {
  name: string
  cargo: string
  age: string
}

const SocialMedia = (props: SocialMediaProps) => {
  return (
    <div>
      <a href={props.Youtube}>Youtube</a>
      <hr />
      <a>Tiktok {props.TikTok}</a>
      <hr />
      <a>Instagram {props.Instagram}</a>
      <hr />
      <a>Linkedin {props.Linkedin}</a>
    </div>
  )
}

const About = (props: AboutProps) => {
  return (
    <div>
      <h2>Meu nome é: {props.name}</h2>
      <h2>Tenho: {props.age} Anos</h2>
      <h2>Cargo: {props.cargo}</h2>
      <SocialMedia 
      Youtube={props.Youtube}
      Instagram={props.Instagram}
      Linkedin={props.Linkedin}
      TikTok={props.TikTok}
      />
      <hr></hr>
    </div>
  )
}

const Equipe = () => {
  return (
    <div>
    <About name="Adriano" age="19" cargo="desenvolvedor" Youtube="https://google.com" />
    <SocialMedia />
    <About name="Hilary" age="17" cargo="Psicologa"  Instagram="https://Hilary" />
    <About name="Erick" age="20" cargo="Empreendedor" Instagram="https://Erick" />
    </div>
  )
}

export default function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe />
    </div>
  )
};