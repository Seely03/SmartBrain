import React, { Component } from "react";
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm";
import Rank from "./components/rank/rank";
import Particles from "./components/particles/particles";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Particles />
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm />

			{/* {<faceRecognition />} */}
		</div>
	);
}

export default App;
