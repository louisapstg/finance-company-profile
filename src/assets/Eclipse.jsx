/* eslint-disable react/prop-types */
const Eclipse = ({ color, width, height, styling }) => {
	return (
		<div>
			<svg
				fill={color}
				width={width}
				height={height}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				className={styling}
				x="0"
				y="0"
			>
				<path d="m24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z" />
			</svg>
		</div>
	);
};

export default Eclipse;
