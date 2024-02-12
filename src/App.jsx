import { useState } from 'react';
import './App.css';
import emailjs from "@emailjs/browser"

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sedEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preenchar todos os campos");
      return;
    }

    const template = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_44uw4xi", "template_6tbbkqp", template, "TM_rioPSYhu4tr3AJ")
      .then((response) => {
        console.log('Enviado com sucesso ', response.status, response.text);
        setName('')
        setEmail('')
        setMessage('')
      },(error) =>{
        console.log("error: ", error);
      })

  }


  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sedEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
