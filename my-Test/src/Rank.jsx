import StarRating from "./StarRating"

const Rank = ()=>{
    return(<>
    <div className="bg-zinc-900 text-center h-screen">
    <h1 className="text-style  pt-5 text-9xl ">RATE THIS GAME</h1>

    <div className="flex flex-row-reverse justify-center p-10">
    <div>
    <StarRating />
    </div>
      {/* <i className="bg-purple-100 peer peer-hover:bg-purple-500 hover:bg-purple-500 w-12 h-12 mx-2">1</i>
      <i className="bg-purple-100 peer peer-hover:bg-purple-500 hover:bg-purple-500 w-12 h-12 mx-2">2</i>
      <i className="bg-purple-100 peer peer-hover:bg-purple-500 hover:bg-purple-500 w-12 h-12 mx-2">3</i>
      <i className="bg-purple-100 peer peer-hover:bg-purple-500 hover:bg-purple-500 w-12 h-12 mx-2">4</i>
      <i className="bg-purple-100 peer peer-hover:bg-purple-500 hover:bg-purple-500 w-12 h-12 mx-2">5</i> */}
    </div>
    </div>

    

    </>)
}

export default Rank