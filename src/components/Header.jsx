import { LuMoon } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <div className="relative z-50 bg-background">
      {/* Left group: notifications, Dark mode toggle, location */}
      <div className="flex relative top-0 left-5 w-fit">
        <button className="z-100 relative w-[3rem] h-[3rem] bg-button_dark m-3 rounded-full items-center justify-center flex transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
          <IoMdNotificationsOutline className="text-2xl text-white" />
        </button>
        <button className="z-100 relative w-[3rem] h-[3rem] bg-button_dark m-3 rounded-full items-center justify-center flex transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
          <LuMoon className="text-2xl text-white" />
        </button>
        <button className="z-100 relative min-w-3 h-[3rem] bg-button_dark m-3 mx-5 rounded-full items-center p-3 place-content-evenly gap-2 justify-center flex transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
          <FiMapPin className="text-1xl text-white" />
          <span className="text-lg text-white">Cairo, Egypt</span>
        </button>
      </div>

      {/* Center: Search bar */}
      <div className="flex absolute top-3 left-1/2 -translate-x-1/2">
        <button
          className={`
                w-[28rem] h-[3rem]
                bg-button_dark rounded-full flex items-center p-3 gap-3

                transition duration-300 ease-in-out transform
                hover:shadow-lg hover:brightness-110

                focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white
              `}
        >
          <IoSearch className="text-2xl text-white" />
          <input
            type="text"
            placeholder="Search City"
            className="flex-1 bg-transparent outline-none text-base placeholder-secondary_text text-secondary_text "
          />
        </button>
      </div>

      {/* Right group: user avatar */}
      <div className="flex absolute top-0 right-12">
        <button className="relative w-[3rem] h-[3rem] bg-button_dark m-3 rounded-full items-center justify-center flex transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
          <FaUser className="text-2xl text-white " />
        </button>
      </div>
    </div>
  );
}

export default Header;
