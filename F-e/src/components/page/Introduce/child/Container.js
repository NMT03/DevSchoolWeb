import React from "react";
import HVNBANNER from "../../../../pic/HVN_banner-icon.jpg";
import HVNICON from "../../../../pic/HVN_icon.jpg";
import Context from "./Context";

function Container() {
	return (
		<div className="Introduce-container">
			<div className="container-header">
				<img alt="lefticon" src={HVNBANNER}></img>
				<h2>CONTAINER TITLE</h2>
				<img alt="righticon" src={HVNICON}></img>
			</div>
			<div className="container-body">
				<Context type="para"></Context>
				<Context type="para"></Context>
				<Context type="para"></Context>
				<Context type="para"></Context>
			</div>
		</div>
	);
}

export default Container;
