export default function Text({type, id, placeholder,isRequired,labelText,labelFor,handleChange}){
    return(
        <input
        type={type}
        id={id}
        placeholder={placeholder}
        isRequired={isRequired}
        labelText={labelText}
        labelFor={labelFor}
        className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white text-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={handleChange}
        ></input>
    )
}