import { Link } from "react-router-dom";
import { logoImg } from "../utils";

const NavBar = () => {
  return (
		<header>
			<nav className="flex gap-8 justify-center items-center h-16 w-5xl mx-auto mt-8 mb-4 bg-gray-100 shadow-sm rounded-4xl">
				<Link
					to="/"
					className="flex items-center h-full"
				>
					<img
						src={logoImg}
						alt="Logo"
						className="max-h-[80%] w-auto"
					/>
				</Link>
				<ul className="flex items-center text-black pt-2">
					<li className="inline-block relative group">
						<Link
							to="/mobile"
							className="block px-12 py-2 group-hover:text-pink-600 group-hover:bg-black rounded-3xl mb-2"
						>
							Mobile
						</Link>
						<ul className="w-full absolute z-10 hidden group-hover:block group-hover:bg-black/50 group-hover:backdrop-blur-2xl group-hover:text-white py-2 shadow-2xl rounded-md">
							<li className="hover:bg-gray-600 hover:text-white px-4 py-2">
								<Link to="/mobile/idd-vas">IDD & VAS</Link>
							</li>
							<li className="hover:bg-gray-600 hover:text-white px-4 py-2">
								<Link to="/mobile/faq">Mobile FAQ</Link>
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
		</header>
	);
}

export default NavBar