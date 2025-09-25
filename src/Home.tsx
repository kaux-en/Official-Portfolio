import Hero from './Components/Hero'
import '../src/styles/Home.css'
import '../src/styles/aboutme.css'
import '../src/styles/projects.css'
import '../src/styles/contact.css'
import { Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './Pages/Contact'
import About_Me from './Pages/aboutMe'

function Home() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<Hero />} />
        <Route path='/projects' element = {<Projects />} />
        <Route path='/contact' element = {<Contact />} /> 
        <Route path='/aboutme' element = {<About_Me />} />
      </Routes>
    </>
  )
}

export default Home
