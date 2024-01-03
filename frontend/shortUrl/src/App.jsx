import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [longURL, setLongURL] = useState("") 
  const [shortURL, setShortURL] = useState("")

  async function Generate() {
    const {data} = await axios.post("http://localhost:3000/api/urls",{
      longURL
    })

    setShortURL(data.response[0].shortURL)
  }



  return (
    <>
      <h1>ShortURL</h1>
      <div id='boxInputUrl'>
        <textarea onChange={(e) => setLongURL(e.target.value)} type="text" name="url" id="inputUrl"/>
        <button id='gerarUrl' onClick={Generate}>Gerar URL</button>
      </div>
      <div id='boxOutputUrl'>
        <a name="url" id="url" href={shortURL}>{shortURL}</a>
      </div>

      <p id='madeBy'>
        by Marcelo Benfica
      </p>
    </>
  )
}

export default App
