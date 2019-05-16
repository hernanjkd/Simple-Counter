import React from "react";
import Divs from "./number-div.jsx";

let timer = 0;

const TimeDisplay = () => {
	timer++;
	let timer_divs = [];
	for (let i = 6; i > 0; i--) {
		timer_divs.push(<Divs id={i} time={timer} />);
	}

	return (
		<div className="text-center pt-5">
			<i className="far fa-clock" />
			{timer_divs}
		</div>
	);
};

export default TimeDisplay;
