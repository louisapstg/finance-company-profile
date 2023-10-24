import Hero2Left from "./Hero2Left";
import Hero2Right from "./Hero2Right";

const Hero2 = () => {
	return (
		<div className="flex flex-col lg:flex-row py-16">
			<Hero2Left />
			<Hero2Right />
		</div>
	);
};

export default Hero2;
