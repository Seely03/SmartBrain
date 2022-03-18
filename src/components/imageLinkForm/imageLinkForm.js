import React from "react";
import "./imageLinkForm.css";

const imageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className="f3">
				{"This Magic Brain will detect faces in your photos, try it now!"}
			</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					<input
						className="f4 pas2 w-70 center db"
						type="text"
						onChange={onInputChange}
					/>
					<button
						className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple db"
						onClick={onButtonSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default imageLinkForm;
