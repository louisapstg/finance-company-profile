const Logo = () => {
	return (
		<a href="#" className="flex items-center">
			<div className="w-[48px] h-[34px] bg-[#F5F6FB] rounded-[10px] flex items-center justify-center gap-1 mr-3">
				<div className="w-3 h-3 bg-[#207DFF] rounded-full" />
				<div className="w-3 h-3 bg-[#F06157] rounded-full" />
			</div>
			<span className="self-center text-[28px] font-semibold text-[#070F18] whitespace-nowrap">
				Payna
			</span>
		</a>
	);
};

export default Logo;
