import React from "react";
import HVNBANNER from "../../../../pic/HVN_banner-trs.jpg";

function Obj({top, avatar, name, type, prop}) {
	return (
		<li className="obj-rank">
			<div className={`box-top top${top}`}>
				<span>#{top}</span>
			</div>
			<div className="box-img">
				<img alt="none" src={avatar || HVNBANNER}></img>
			</div>
			<div className="box-text">
				<h5 className="objName">{name}</h5>
				<span className="objRole">{type}</span>
				<span className="objProp">{prop}</span>
			</div>
		</li>
	);
}

export default Obj;
