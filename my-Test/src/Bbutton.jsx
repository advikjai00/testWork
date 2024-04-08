const Bbutton =() =>{
    return(<>
    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-animation" type="button" value="Click Me"></input>
    <br></br>
    <br></br>
    <input className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
         type="submit" value="Submit" />
    <br></br>
    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-animation">Click Me</button>
    </>)
}

export default Bbutton;