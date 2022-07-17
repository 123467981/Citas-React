import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import { useState } from 'react'

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className='container mx-auto mt-14 mb-14'>
      <Header></Header>
      <div className='mt-12 md:flex gap-5'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        ></Formulario>
        <ListadoPacientes pacientes={pacientes}></ListadoPacientes>
      </div>
    </div>
  );
}

export default App;
