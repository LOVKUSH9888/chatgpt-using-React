import React from 'react'
import send from './assets/send.svg'
import user from './assets/user.png'

const App = () => {
  return (
    <div>
      <main className='chatGPT-app'>
      <section className="chat-container">
      <div className="layout">
        <div className="chat-bubble">
          <div className="avatar">
            <img src={user}/>
          </div>
          <div className="post">Lorem, ipsum dolor.</div>
        </div>
      </div>
      </section>
      <footer>
        <input className='composebar'
        autoFocus
        type='text'
        placeholder='Ask Anything'
        onChange={()=> {}} />
        <div className="send-button">
          <img src= {send} />
        </div>
      </footer>

      </main>
    </div>
  )
}

export default App;

