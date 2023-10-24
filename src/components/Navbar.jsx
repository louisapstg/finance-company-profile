import Logo from "./Logo";
import { navLinks } from "./../constants/index";

const Navbar = () => {
	return (
		<nav className="w-full flex p-6 justify-between items-center bg-white fixed z-20 top-0 left-0">
			<Logo />
			<ul className="list-none hidden lg:flex justify-center items-center flex-1">
				<li>
					{navLinks.map((nav) => (
						<a key={nav.id} className="mx-5" href="#">
							{nav.title}
						</a>
					))}
				</li>
			</ul>
			<div className="hidden sm:flex">
				<button
					type="button"
					className="bg-[#F5F6FB] hover:bg-[#C4C4C4] font-normal rounded-[50px] w-full sm:w-[150px] sm:text-base sm:px-4 sm:py-3 text-center mr-3 sm:mr-0"
				>
					Sign In
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
