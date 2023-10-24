// const ServicesContent = () => {
// 	return (
// 		<>
// 			<div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 justify-items-center mt-10 sm:mb-32">
// 				<div className="flex flex-auto w-3/4 lg:w-1/2">
// 					<svg width="120" height="120">
// 						<image href={Briefcase} />
// 					</svg>
// 					<div>
// 						<div className="text-xl font-semibold">Share Insights</div>
// 						<div className="text-[#575455] leading-8 mt-2">
// 							Working together with your team to make decisions
// 						</div>
// 					</div>
// 				</div>
// 				<div className="flex flex-auto w-3/4 lg:w-1/2">
// 					<svg width="120" height="120">
// 						<image href={Send} />
// 					</svg>
// 					<div>
// 						<div className="text-xl font-semibold">Track Leads</div>
// 						<div className="text-[#575455] leading-8 mt-2">
// 							See where your money goes and comes in business
// 						</div>
// 					</div>
// 				</div>
// 				<div className="flex flex-auto w-3/4 lg:w-1/2">
// 					<svg width="120" height="120">
// 						<image href={Wifi} />
// 					</svg>
// 					<div>
// 						<div className="text-xl font-semibold">Offline Mode</div>
// 						<div className="text-[#575455] leading-8 mt-2">
// 							Use the feature while off from internet? Sure can
// 						</div>
// 					</div>
// 				</div>
// 				<div className="flex flex-auto w-3/4 lg:w-1/2">
// 					<svg width="120" height="120">
// 						<image href={Trello} />
// 					</svg>
// 					<div>
// 						<div className="text-xl font-semibold">Kanban Mode</div>
// 						<div className="text-[#575455] leading-8 mt-2">
// 							Organize the report that easy to be understand
// 						</div>
// 					</div>
// 				</div>
// 				<div className="flex flex-auto w-3/4 lg:w-1/2">
// 					<svg width="120" height="120">
// 						<image href={Gift} />
// 					</svg>
// 					<div>
// 						<div className="text-xl font-semibold">Reward System</div>
// 						<div className="text-[#575455] leading-8 mt-2">
// 							Motivate your team working harder and reacive a gift
// 						</div>
// 					</div>
// 				</div>
// 				<div className="flex flex-auto w-3/4 lg:w-1/2">
// 					<svg width="120" height="120">
// 						<image href={Globe} />
// 					</svg>
// 					<div>
// 						<div className="text-xl font-semibold">189 Country</div>
// 						<div className="text-[#575455] leading-8 mt-2">
// 							Working together worldwide people from anywhere
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default ServicesContent;
import { serviceItems } from "../../constants";

const ServicesContent = () => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 mt-10">
			{serviceItems.map((item) => (
				<div key={item.id} className="flex flex-row justify-center">
					<svg width="60" height="60">
						<image href={item.svg} />
					</svg>
					<div className="flex flex-col pl-6 leading-normal">
						<div className="text-xl font-semibold">{item.title}</div>
						<div className="text-[#575455] leading-8 mt-2 max-w-[225px]">
							{item.content}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ServicesContent;
