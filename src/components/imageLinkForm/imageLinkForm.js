import React from "react";
import "./imageLinkForm.css";

const imageLinkForm = () => {
	return (
		<div>
			<p className="f3">
				{"This Magic Brain will detect faces in your photos, try it now!"}
			</p>
			<div class="center">
				<div class="form center pa4 br3 shadow-5">
					<input class="f4 pas2 w-70 center db" type="text" />
					<button class="w-30 grow f4 link ph3 pv2 dib white bg-light-purple db">
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default imageLinkForm;
