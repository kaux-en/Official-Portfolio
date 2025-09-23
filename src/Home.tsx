import Hero from './Components/Hero'
import '../src/styles/Home.css'
import'../src/styles/pages.css'
import { Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<Hero />} />
        <Route path='/projects' element = {<Projects />} />
      </Routes>
    </>
  )
}

export default Home
