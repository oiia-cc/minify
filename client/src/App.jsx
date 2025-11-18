import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    const ev = new EventSource("http://localhost:3333/api/events");

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
      await axios.post('http://localhost:3333/api/v1/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    } catch (e) {
      console.log(e);

    }
    return false;
  }

  return (
    <form onSubmit={handleSubmit}>

      upload file
      <input type='file' onChange={e => changeFile(e)} />
      <button type='submit'>submit</button>

    </form>
  )
}

export default App
