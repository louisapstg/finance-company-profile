const HeroLeft = () => {
	return (
		<section className="flex flex-col md:flex-row mx-auto py-6 sm:py-16">
			<div className="flex flex-1 flex-col text-left md:text-center lg:text-left px-6 sm:px-16 xl:px-0 justify-center items-start md:items-center lg:items-start">
				<div className="text-[38px] sm:text-[55px] text-slate-950 font-bold">
					Manage Payroll <br /> Like an Expert
				</div>
				<div className="text-neutral-600 leading-8 mt-7">
					Payna is helping you to setting up <br className="inline md:hidden" /> the
					payroll without
					<br className="hidden  md:inline" /> required any finance
					<br className="inline md:hidden" /> skills or knowledge before
				</div>
				<button
					type="button"
					className="bg-blue-500 hover:bg-blue-700 text-white text-base font-semibold rounded-[50px] w-[180px] h-12 px-4 py-3 mt-7 text-center"
				>
					Get Started
				</button>
			</div>
		</section>
	);
};

export default HeroLeft;
