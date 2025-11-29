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
  const [isLoggined, setIsLoggined] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));

      const ev = new EventSource(`/api/events`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      ev.addEventListener("fileUpdate", e => {
        console.log("RECEIVED:", e.data);
      })
    }
    // updateUI(data);
  }, [isLoggined]);


  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLoggined(true);
    }
  }, [isLoggined]);

  const [file, setFile] = useState(null);

  const changeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  const handleSubmit = async (e) => {
    console.log(file);
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("token"));

    try {
      const formData = new FormData();
      formData.append('file', file);
      await axios.post('/api/v1/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${token}`
        }
      });

    } catch (e) {
      console.log(e);
    }
  }

  const handleLogout = () => {
    localStorage.clear();
    if (!localStorage.getItem("user")) {
      setIsLoggined(false)
    }
  }

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const result = await axios.post(`/api/login`, {
        email,
        password
      });

      localStorage.setItem("token", JSON.stringify(result.data.access_token));
      localStorage.setItem("user", JSON.stringify(result.data.user));
      if (localStorage.getItem("user")) {
        setIsLoggined(true)

      };
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {
        isLoggined ?
          <div>
            <h1>
              loggined as {JSON.parse(localStorage.getItem("user")).handle}
            </h1>
            <button onClick={handleLogout}> Logout</button>
            <form onSubmit={handleSubmit}>
              upload file
              <input type='file' onChange={e => changeFile(e)} />
              <button type='submit'>submit</button>
            </form>
          </div>
          : <form onSubmit={handleLogin}>
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
      }

    </div>
  )
}

export default App
