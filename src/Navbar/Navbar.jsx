import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
    <br />
    <div className="flex justify-center">
    <div className="bg-gray-300  w-110 border-[8px]">
        <br />
        <h1 className="flex justify-center text-cyan-900 text-2xl">O`zingizga kerakli bo`limni tanlang!</h1>
        <br />
        <br />
      <ul className="bg-gray-300 w-100 h-20 flex text-[decoration] justify-around ">
          <li>
            <Link className="text-[25px] hover:text-amber-700" to={"/firstpage"}>Firstpage</Link>
          </li>
          <li>
            <Link className="text-[25px] hover:text-amber-700" to={"/secondpage"}>Secondpage</Link>
          </li>
      </ul>
    </div>
    </div>
    <h1>
      <Link to={'/'} className="text-2xl text-blue-700">Ortga qaytish</Link>
    </h1>
    </>
  )
}

export default Navbar
