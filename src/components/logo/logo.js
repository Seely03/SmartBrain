import React from "react";
import Tilt from "react-parallax-tilt";
import "./logo.css";
import brain from "./brain.png";

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt
				tiltMaxAngleX={45}
				tiltMaxAngleY={45}
				className="Tilt br2 shadow-2"
				style={{
					height: 150,
					width: 150,
				}}
			>
				<div className="pa3">
					<img style={{ paddingTop: "5px" }} alt="logo" src={brain} />
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
