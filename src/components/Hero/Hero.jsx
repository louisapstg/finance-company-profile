import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row pt-16 justify-center">
			<HeroLeft />
			<HeroRight />
		</div>
	);
};

export default Hero;
