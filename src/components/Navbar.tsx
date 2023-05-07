import { NavLink } from "react-router-dom";
import { FaServer } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import {MdOutlineNotificationsActive} from "react-icons/md"
import logo from "../assets/logo.png"

function Navbar() {
  const activeClass = "flex border-b-2 border-button pb-2 text-button font-semibold ";
  const inActiveClass = "flex hover:text-button text-lg font-normal";

  return (
    <section className="fixed w-full">
      <div className="lg:flex lg:flex-row py-4 lg:px-5 px-3 bg-black text-white hidden shadow-xl ">
        <div className="flex flex-row">
          <NavLink className="flex flex-row pb-2" to="/">
            <img src={logo} alt="V logo" className="w-10 h-10 p-1 " />
            <div className="font-semibold text-lg lg:text-xl my-auto pl-2">
              SafeGaurd
            </div>
          </NavLink>

        </div>
          <div className="gap-x-5 gap-y-2 flex flex-col lg:flex-row pb-2 w-full justify-end">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
              to="/group"
            >
              <div className="flex flex-row items-center  m-auto justify-center">
                {/* <BsCurrencyBitcoin className="text-xl mr-2" /> */}
                <div className="">Groups</div>
              </div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
              to="/transaction"
            >
              <div className="flex flex-row items-center  m-auto justify-center">
                {/* <GrTransaction className="text-xl mr-2 bg-white" /> */}
                <div className="">Transactions</div>
              </div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
              to="/profile"
            >
              <div className="flex flex-row items-center  m-auto justify-center">
                {/* <FaServer className="text-xl mr-2" /> */}
                <div className="">Profile</div>
              </div>
            </NavLink>
            </div>
      </div>
        <div className="flex flex-row fixed bottom-0 bg-white w-full justify-around text-2xl p-4 shadow-md lg:hidden">
          <NavLink to="/" className="">
            <AiFillHome />
          </NavLink>
          <NavLink to="/group" className="">
            <GrTransaction />
          </NavLink>
          <NavLink to="/transaction" className="">
            <FaServer />
          </NavLink>
          <NavLink to="/profile" className="">
            <MdOutlineNotificationsActive />
          </NavLink>
        </div>
    </section>
  );
}

export default Navbar;