const Navbar = () => {
	return (
		<nav className="bg-white fixed w-full z-20 top-0 left-0">
			<div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="#" className="flex items-center">
					<div className="w-[48px] h-[34px] bg-[#F5F6FB] rounded-[10px] flex items-center justify-center gap-1 mr-3">
						<div className="w-[12px] h-[12px] bg-[#207DFF] rounded-[9999px]" />
						<div className="w-[12px] h-[12px] bg-[#F06157] rounded-[9999px]" />
					</div>
					<span className="self-center text-[28px] font-semibold text-[#070F18] whitespace-nowrap">
						Payna
					</span>
				</a>
				<div className="flex sm:order-2">
					<button
						type="button"
						className="hidden sm:inline bg-[#F5F6FB] hover:bg-[#C4C4C4] font-normal rounded-[50px] w-full sm:w-[150px] sm:text-base sm:px-4 sm:py-3 text-center mr-3 sm:mr-0"
					>
						Sign In
					</button>
				</div>
				<div
					className="items-center justify-between hidden sm:hidden w-full md:hidden lg:flex sm:w-auto sm:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 sm:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0 sm:bg-white">
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-[#070F18] sm:p-0 font-medium"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4 text-[#070F18] sm:p-0">
								Features
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4 text-[#070F18] sm:p-0">
								Showcase
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4 text-[#070F18] sm:p-0">
								Pricing
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
