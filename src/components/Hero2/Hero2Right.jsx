const Hero2Right = () => {
	return (
		<div className="flex flex-col md:flex-row lg:mr-40 p-6 sm:py-16">
			<div className="flex flex-1 flex-col text-center lg:text-left  justify-center items-center md:items-center lg:items-start">
				<div className="font-bold text-[#f75c4e] leading-normal">SAVE MORE TIME</div>
				<div className="text-[26px] md:text-[36px] text-[#070f18] font-bold">
					And Boost Productivity
				</div>
				<div className="md:mt-5 text-neutral-600 text-base text-center lg:text-left font-normal leading-loose">
					Your employees can bring any success <br className="inline md:hidden" /> into
					your <br className="hidden md:inline" /> business, so we need to{" "}
					<br className="inline md:hidden" /> take care of them
				</div>
				<div className="mt-8 relative">
					<input
						type="text"
						className="bg-[#f5f6fb] h-12 align-top w-[400px] rounded-[50px] border-none"
						placeholder="Email Address"
					/>
					<button
						type="button"
						className="inline md:absolute md:-top-8 md:-right-0 lg:-right-4 bg-blue-500 hover:bg-blue-700 text-white text-base font-semibold rounded-[50px] w-full sm:w-[180px] h-[50px] px-4 py-3 text-center mt-2 sm:mt-8 sm:ml-[-20px]"
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero2Right;
