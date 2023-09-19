import './App.scss'
import Componente1 from './components/Componente1'
import Componente2 from './components/Componente2'

function App() {
  
  

  return (
    <>
      <div className='div-app'>
        <h1 className='div-h1'>Introdução ao React</h1>
      </div>
      <p className='div-p'>Primeiro teste</p>
      <Componente1/>
      <Componente2/>
      {/* Section para exemplicação para SASS */}
      <section>
        <h2>SASS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, temporibus suscipit, eos iste nam sunt esse consequatur excepturi commodi, enim ea rem corporis pariatur possimus blanditiis consectetur dolorum! Vero, distinctio!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquam porro saepe eius esse voluptate, dolores ut ullam! Culpa quis placeat commodi nulla assumenda tempore harum accusantium laudantium dolores pariatur.</p>
      </section>
    </>
    
  )
}

export default App
