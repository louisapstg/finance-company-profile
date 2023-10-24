import hero2Img from "../../assets/hero2.png";

const Hero2Left = () => {
	return (
		<div className="mx-auto lg:ml-40 lg:w-1/2">
			<img src={hero2Img} className="md:w-[635px] h-[100%] rounded-[40px]" alt="Hero Image" />
		</div>
	);
};

export default Hero2Left;
