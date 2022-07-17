const Paciente = ({name, owner, email, date, symptoms}) => {
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
        </div>
    );
}

export default Paciente;