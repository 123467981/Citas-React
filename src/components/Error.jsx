const Error = ({children}) => {
    return(
        <div className="bg-red-700 text-white text-center p-2 mb-3 rounded-md font-bold uppercase">
            {children}
        </div>
    );
}

export default Error;