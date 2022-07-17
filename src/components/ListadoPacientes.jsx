import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 mt-10 md:m-0">
            <h1 className="text-center text-3xl font-black">Listado Pacientes</h1>
            <p className="text-center text-lg mt-5">
                Administra tus {''}
                <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
            </p>

            {/* Patients */}
            <div className="md:h-screen md:overflow-y-scroll md:mt-5 mx-3 md:mx-0">
                {pacientes.map(paciente => {
                    return(
                        <Paciente 
                            key={paciente.id}
                            patient={paciente}
                        >
                        </Paciente>
                    );
                })}
            </div>
        </div>
    )
}

export default ListadoPacientes;