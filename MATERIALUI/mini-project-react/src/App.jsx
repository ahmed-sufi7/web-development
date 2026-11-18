import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to the App</h1>
      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Text</Button>
    </>
  )
}

export default App
