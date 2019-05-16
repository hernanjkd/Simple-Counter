import React from "react";
import PropTypes from "prop-types";

const Divs = props => {
	let time_str = String(props.time);
	let id_num = Number(props.id);

	let display =
		props.id === time_str.length
			? time_str.substr(0, 1)
			: props.id < time_str.length
				? time_str.substr(-id_num, 1)
				: "0";

	return <div className="d-inline">{display}</div>;
};

Divs.propTypes = {
	time: PropTypes.string,
	id: PropTypes.string
};

export default Divs;
