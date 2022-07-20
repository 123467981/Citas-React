const Paciente = ({ patient, setPaciente }) => {

    const { name, owner, email, date, symptoms } = patient;

    return (
        <div className="mt-5 bg-white rounded-lg shadow-md px-5 py-10">
            <p className="font-bold uppercase mb-5 text-gray-700">
                Nombre: {''}
                <span className="font-normal normal-case">{name}</span>
            </p>
            <p className="font-bold uppercase mb-5 text-gray-700">
                Propietario: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>
            <p className="font-bold uppercase mb-5 text-gray-700">
                E-mail: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold uppercase mb-5 text-gray-700">
                Fecha de alta: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>
            <p className="font-bold uppercase mb-5 text-gray-700">
                Síntomas: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>

            <div className="md:flex justify-between mt-10">
                <button
                    type="button"
                    className="bg-indigo-600 p-2 md:px-5 text-white font-bold hover:bg-indigo-700 duration-200 rounded-md uppercase block w-full md:inline md:w-auto"
                    onClick={() => setPaciente(patient)}
                >Editar</button>
                <button
                    type="button"
                    className="bg-red-700 text-white p-2 md:px-5 rounded-md hover:bg-red-800 duration-200 uppercase font-bold block mt-2 md:mt-0 w-full md:inline md:w-auto"
                >Eliminar</button>
            </div>
        </div>
    );
}

export default Paciente;