import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {

  //data loading from api: 
  const loadData = fetch("bottles.json").then(res => res.json())

  // fetch from github:
  // const handleData = async () => {
  //   const res = await fetch("https://raw.githubusercontent.com/asm-saim/bottles-data/refs/heads/main/bottles.json")
  //   return res.json()
  // }

  return (
    <>
      <h1> Buy Awesome Water Bottles</h1>

      <Suspense fallback={<h3>Bottles data is loading...</h3>}>
        <Bottles loadData={loadData}></Bottles>
      </Suspense>
    </>
  )
}

export default App
