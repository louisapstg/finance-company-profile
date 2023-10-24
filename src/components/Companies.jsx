import appleLogo from "../assets/apple-11 1.png";
import adobeLogo from "../assets/adobe.png";
import slackLogo from "../assets/slack-2 1.png";
import spotifyLogo from "../assets/spotify-1 1.png";
import googleLogo from "../assets/google-2015 1.png";
// const Companies = () => {
// 	return (
// 		<div className="w-full flex flex-col sm:flex-col lg:flex-row mx-auto md:mt-5 lg:mt-20">
// 			<div className="font-semibold text-left md:text-center lg:text-left flex-auto lg:w-1/4 pl-10 md:pl-0 lg:pl-40">
// 				Trusted By <br className="hidden lmd:inline" /> Global Companies
// 			</div>
// 			<div className="grid grid-cols-3 md:grid-cols-5 md:gap-10 md:mt-6 lg:flex lg:flex-auto w-3/4 lg:w-3/4 flex-wrap lg:flex-nowrap mt-4 sm:mt-0 sm:h-1/2 gap-8 mx-auto md:justify-center">
// 				<img src={appleLogo} alt="Apple" className="" />
// 				<img src={adobeLogo} alt="Adobe" className="" />
// 				<img src={slackLogo} alt="Slack" className="" />
// 				<img src={spotifyLogo} alt="Spotify" className="" />
// 				<img src={googleLogo} alt="Google" className="" />
// 			</div>
// 		</div>
// 	);
// };

// export default Companies;

const Companies = () => {
	return (
		<div className="flex flex-col lg:flex-row pt-10 justify-center">
			<div className="font-semibold md:mx-auto">
				Trusted by <br className="hidden lg:inline" /> Global Companies
			</div>
			<div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:gap-8 pt-6 mx-auto">
				<img src={appleLogo} alt="Apple" className="grow-0" />
				<img src={adobeLogo} alt="Adobe" className="grow-0" />
				<img src={slackLogo} alt="Slack" className="grow-0" />
				<img src={spotifyLogo} alt="Spotify" className="grow-0" />
				<img src={googleLogo} alt="Google" className="grow-0" />
			</div>
		</div>
	);
};

export default Companies;
