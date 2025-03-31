import { logoImg } from "../utils";

const NavBar = () => {
  return (
    <nav className="flex gap-8 justify-center items-center h-16 w-5xl mx-auto mt-8 mb-4 bg-gray-100 shadow-sm rounded-4xl">
      <img
        src={logoImg}
        alt=""
        className="h-full w-auto py-4"
      />
      <ul className="flex items-center text-black pt-2">
        <li className="inline-block relative group">
          <a
            href="#"
            className="block px-12 py-2 group-hover:text-pink-600 group-hover:bg-black rounded-3xl mb-2"
          >
            Mobile
          </a>
          <ul className="w-full absolute z-10 hidden group-hover:block group-hover:bg-black/50 group-hover:backdrop-blur-2xl group-hover:text-white py-2 shadow-2xl rounded-md">
            <li className="hover:bg-gray-600 hover:text-white px-4 py-2">
              <a href="#">IDD & VAS</a>
            </li>
            <li className="hover:bg-gray-600 hover:text-white px-4 py-2">
              <a href="#">Mobile FAQ</a>
            </li>
          </ul>
        </li>
        <li className="inline-block relative group">
          <a
            href="#"
            className="block px-12 py-2 group-hover:text-pink-600 group-hover:bg-black rounded-3xl mb-2"
          >
            Roaming
          </a>
          <ul className="w-full absolute z-10 hidden group-hover:block group-hover:bg-black/50 group-hover:backdrop-blur-2xl group-hover:text-white py-2 shadow-2xl rounded-md">
            <li className="hover:bg-gray-600 hover:text-white px-4 py-2">
              <a href="#">Roaming FAQ</a>
            </li>
          </ul>
        </li>
        <li className="inline-block relative group">
          <a
            href="#"
            className="block px-12 py-2 group-hover:text-pink-600 group-hover:bg-black rounded-3xl mb-2"
          >
            WiFi
          </a>
          <ul className="w-full absolute z-10 hidden group-hover:block group-hover:bg-black/50 group-hover:backdrop-blur-2xl group-hover:text-white py-2 shadow-2xl rounded-md">
            <li className="hover:bg-gray-600 hover:text-white px-4 py-2">
              <a href="#">WiFi FAQ</a>
            </li>
          </ul>
        </li>
        <li className="inline-block relative group">
          <a
            href="#"
            className="block px-12 py-2 group-hover:text-pink-600 group-hover:bg-black rounded-3xl mb-2"
          >
            Contact
          </a>
        </li>
        <li className="inline-block relative group">
          <a
            href="#"
            className="block px-12 py-2 group-hover:text-pink-600 group-hover:bg-black rounded-3xl mb-2"
          >
            Store
          </a>
        </li>
      </ul>
    </nav>
	);
}

export default NavBar