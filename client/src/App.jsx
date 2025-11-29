import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import AppRouter from './router';
import { useAuthStore } from './stores/auth.store';


function App() {


  const init = useAuthStore(s => s.init);

  useEffect(() => {
    init();
  }, []);

  return (
    <AppRouter />
  )
}

export default App
