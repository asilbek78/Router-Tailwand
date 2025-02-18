import { Link, Outlet } from "react-router-dom";
// import img from "../public/vite.svg";

function Layout() {
  return (
    <>
      <nav className=" justify-center flex items-center gap-70 bg-cyan-300 ">
        <Link to={"/"}>
          <h1 className="text-slate-950, cursor-pointer hover:text-red-700 text-[50px] font-bold">
            Logo
          </h1>
        </Link>
        <ul className="flex gap-20">
          <li>
            <a
              href="/"
              className="text-slate-950, cursor-pointer hover:text-orange-700 text-[20px] font-mono"
            >
              Home
            </a>
          </li>
          <li className="text-slate-950, cursor-pointer hover:text-orange-700 text-[20px] font-mono">
            <Link to={"/navbar"}>Navbar</Link>
          </li>
          <li className="text-slate-950, cursor-pointer hover:text-orange-700 text-[20px] font-mono">
            Price
          </li>
          <li className="text-slate-950, cursor-pointer hover:text-orange-700 text-[20px] font-mono">
            About
          </li>
        </ul>
        <img src={"../../public/vite.svg"} alt="jlk" />
      </nav>
      <main>
        <Outlet />
        <footer>
          <br />
          <h1 className="text-4xl cursor-pointer font-bold flex justify-center">
            Footer Page
          </h1>
          <br />
          <p className="text-emerald-500 bg-fuchsia-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            eveniet deserunt, inventore, ipsum optio fugiat tempore ad, at nisi
            asperiores odit amet cupiditate magnam expedita adipisci officia
            delectus molestias iure quas hic quia enim labore commodi facilis!
            Excepturi non nemo cum atque impedit eos deserunt ipsam cupiditate
            et dolores perspiciatis quod, itaque at mollitia, temporibus ullam
            rem sit quasi numquam praesentium dolor quos corrupti iure. Cumque,
            libero accusamus. Temporibus obcaecati reiciendis numquam, ullam
            corrupti ipsum molestias. Laboriosam, iusto? Tenetur quibusdam
            aliquam iste quaerat? Pariatur nihil aliquid itaque, tenetur
            blanditiis beatae voluptatem suscipit placeat voluptate quasi, sunt
            quod, eos aliquam nemo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque, est. Et, velit rerum numquam sit molestiae
            perspiciatis qui minus eaque laboriosam ducimus quas in vitae.
            Praesentium, quis atque optio, possimus doloribus eius porro
            repellendus quae asperiores nesciunt ratione magni similique ullam
            distinctio, sequi hic. Dolores maiores ipsum obcaecati expedita
            veritatis.
          </p>
        </footer>
      </main>
    </>
  );
}

export default Layout;