import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

const answers = [
  'Concordo...',
  'olha, faz sentido!',
  'Ótima descoberta'
]

export function Status() {
  return (
    <main className='status' >
      <Header title="Tweet" />


      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/apolomoraes.png" alt="Foto de usuário" />
          <textarea id='tweet' placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>

      <Separator />

      {
        answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })
      }
    </main>
  )
}