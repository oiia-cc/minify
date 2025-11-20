import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const Loginform = () => {
  return (
    <div>

    </div>
  )
}


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    const ev = new EventSource(`/api/events`);

    ev.addEventListener("fileUpdate", e => {
      console.log("RECEIVED:", e.data);

    })

    // updateUI(data);

  }, []);

  const [file, setFile] = useState(null);

  const changeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  const handleSubmit = async (e) => {
    console.log(file);
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', file);
      await axios.post('/api/v1/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    } catch (e) {
      console.log(e);
    }
  }

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const result = await axios.post(`/api/login`, {
        email,
        password
      });
      console.log(result.data);

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        login:
        <label>
          email
          <input type='text' onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          password
          <input type='text' onChange={e => setPassword(e.target.value)} />
        </label>

        <button type='submit'>Login</button>
      </form>
      <form onSubmit={handleSubmit}>
        upload file
        <input type='file' onChange={e => changeFile(e)} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
