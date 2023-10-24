import heroImg from "../../assets/heroImg.png";
import Bulk from "../../assets/Bulk.png";
import Analytics from "../../assets/Analytics.png";

const HeroRight = () => {
	return (
		<div className="hidden sm:hidden md:hidden lg:inline lg:relative pt-14 mx-auto">
			<img className="w-[100%] h-[100%] rounded-[60px]" src={heroImg} alt="People image" />
			<img className="absolute -left-32 top-44" src={Analytics} alt="" />
			<img className="absolute -right-16 top-24" src={Bulk} alt="" />
		</div>
	);
};

export default HeroRight;
