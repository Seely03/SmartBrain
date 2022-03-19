import React from "react";
import "./faceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
	return (
		<div className="center ma pa2">
			<div style={{ position: "relative" }}>
				<img
					id="inputImage"
					alt=""
					src={imageUrl}
					width="500px"
					heigh="auto"
				/>
				{boxes.map((box, i) => {
					const { topRow, rightCol, bottomRow, leftCol } = box;
					return (
						<div
							key={i}
							id="face"
							className="bounding-box"
							style={{
								top: topRow,
								right: rightCol,
								bottom: bottomRow,
								left: leftCol,
							}}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default FaceRecognition;
