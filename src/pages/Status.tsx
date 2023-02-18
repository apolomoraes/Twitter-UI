import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

const answers = [
  'Concordo...',
  'olha, faz sentido!',
  'Ótima descoberta'
]

export function Status() {
  return (
    <main className='status' >
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem corporis nisi ut? Laboriosam tenetur corporis dolor soluta impedit totam veniam dolorem, sed obcaecati, architecto sapiente facilis voluptates corrupti rem?" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/apolomoraes.png" alt="Foto de usuário" />
          <textarea id='tweet' placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>


      {
        answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })
      }
    </main>
  )
}