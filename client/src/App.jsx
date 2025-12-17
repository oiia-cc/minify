import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import AppRouter from './router';
import { useAuthStore } from './stores/auth.store';
import './App.css';
import { useSSE } from './hooks/useSSE';
import { useFileStore } from './stores/file.store';

function App() {
  const addOrUpdateFile = useFileStore(s => s.addOrUpdateFile)

  const init = useAuthStore(s => s.init);

  useEffect(() => {
    init();
  }, []);

  useSSE("fileUpdate", e => {
    const data = JSON.parse(e.data);
    console.log('>>>REALTIME MSG:', data);

    addOrUpdateFile(data);
  })



  return (
    <AppRouter />
  )
}

export default App
