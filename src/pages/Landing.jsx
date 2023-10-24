import Hero from "../components/Hero/Hero";
import Navbar from "./../components/Navbar";
import Companies from "./../components/Companies";
import Services from "../components/Services/Services";
import Hero2 from "../components/Hero2/Hero2";
const Landing = () => {
	return (
		<div className="w-full overflow-hidden">
			<div className="px-6 sm:px-16 flex justify-center items-center">
				<div className="w-full xl:max-w-[1280px]">
					<Navbar />
				</div>
			</div>
			<div className="px-6 sm:px-16">
				<Hero />
				<Companies />
				<Services />
				<Hero2 />
			</div>
		</div>
	);
};

export default Landing;
