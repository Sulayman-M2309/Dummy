import { useState } from "react";
import Link from "../Link/Link";
import { RiCloseFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
    const[open,setOpen]=useState(true)
    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/services", name: "Services" },
        { id: 5, path: "/blog", name: "Blog" },
      ];
    return (
        // <div className="bg-black text-cyan-100 font-bold">
        //     <div className="md:hidden" onClick={()=> setOpen(!open)}>
        //         {
        //             open ? <RiCloseFill></RiCloseFill>:<IoMdMenu></IoMdMenu>
        //         }

        //     </div>
        //   <ul className={`md:flex gap-10 px-5 absolute bg-black shadow-lg ${
        //     open ?'top-16' :'-top-60'
        //   }`}>
        //   {
        //         routes.map(route=> <Link key={route.id} route={route}></Link>)
        //     }
        //   </ul>
        // </div>
        <nav className=" p-6 bg-black">
        <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {
                open === true ? 
                <RiCloseFill className="text-white"></RiCloseFill> 
                : <IoMdMenu className="text-white"></IoMdMenu>
            }
            
        </div>
        <ul className={`md:flex justify-between duration-1000 absolute md:static
        ${open ? 'top-16': '-top-60'}
        bg-black px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
    </nav>
    );
};

export default Navbar;