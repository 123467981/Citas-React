import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes}) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    // GenerateId function

    const generateId = () => {
        let dateRandom = Date.now().toString(36);
        let numberRandom = Math.random().toString(36).substring(2);

        return dateRandom + numberRandom;
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Form validation
        if([name, owner, email, date, symptoms].includes('')){
            setError(true);
        } else {
            setError(false);

            // Patient object
            const patientObject = {
                name, 
                owner, 
                email, 
                date, 
                symptoms,
                id: generateId()
            }
            setPacientes([...pacientes, patientObject]);
        }

        // Empty form
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            {/* Form Header */}
            <h1 className="text-center font-black text-3xl">Seguimiento Pacientes</h1>
            <p className="text-center mt-5 text-lg">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold text-xl">Administralos</span>
            </p>

            {/* Form */}
            <form action="" className="bg-white shadow-md mt-5 md:mt-5 rounded-lg py-10 px-5 mx-3 md:m-0" onSubmit={handleSubmit}>

                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                {/* Pet's name */}
                <label htmlFor="petname" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input
                    id="petname"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="bg-gray-100 p-2 w-full rounded-md border-2 placeholder-gray-400 mb-3.5"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                {/* Owner's name */}
                <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input
                    id="owner"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="bg-gray-100 p-2 w-full rounded-md border-2 placeholder-gray-400 mb-3.5"
                    onChange={e => setOwner(e.target.value)}
                    value={owner}
                />

                {/* Email */}
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Nombre del Propietario"
                    className="bg-gray-100 p-2 w-full rounded-md border-2 placeholder-gray-400 mb-3.5"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                {/* Date */}
                <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Fecha Alta</label>
                <input
                    id="date"
                    type="date"
                    className="bg-gray-100 p-2 w-full rounded-md border-2 placeholder-gray-400 mb-3.5"
                    onChange={e => setDate(e.target.value)}
                    value={date}
                />

                {/* Symptoms */}
                <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                <textarea
                    id="symptoms"
                    className="bg-gray-100 p-2 w-full rounded-md border-2 placeholder-gray-400 mb-3.5"
                    placeholder="Describe los síntomas"
                    onChange={e => setSymptoms(e.target.value)}
                    value={symptoms}
                ></textarea>

                {/* Submit Button */}
                <input
                    type="submit"
                    value={"Agregar Paciente"}
                    className="bg-indigo-600 text-white p-2 w-full rounded-md mt-3 text-base font-bold hover:bg-indigo-700 cursor-pointer duration-200 uppercase"
                />
            </form>
        </div>
    );
}

export default Formulario;