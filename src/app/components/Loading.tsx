import React from "react";

const Loading = () => {
	return (
		<div className="absolute left-[50%] top-[50%] -translate-x-1/2 -transform-y-1/2 bg-primary w-[100%] h-[100%] grid place-items-center">
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
