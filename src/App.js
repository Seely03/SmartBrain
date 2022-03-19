import React, { Component } from "react";
import Navigation from "./components/navigation/navigation";
import Clarifai from "clarifai";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm";
import FaceRecognition from "./components/faceRecognition/faceRecognition";
import Rank from "./components/rank/rank";
import Particles from "./components/particles/particles";
import SignIn from "./components/signIn/signIn";
import Register from "./components/register/register";
import "./App.css";

const app = new Clarifai.App({
	apiKey: "",
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			imageUrl: "",
			boxes: [],
			route: "signin",
			isSignedIn: false,
		};
	}

	calculateFaceLocation = (data) => {
		const clarifaiFaces = data.outputs[0].data.regions.map(
			(region) => region.region_info.bounding_box
		);
		console.log(clarifaiFaces);
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		return clarifaiFaces.map((face) => {
			return {
				leftCol: face.left_col * width,
				topRow: face.top_row * height,
				rightCol: width - face.right_col * width,
				bottomRow: height - face.bottom_row * height,
			};
		});
	};

	displayFaceBox = (boxes) => {
		this.setState({ boxes: boxes });
	};

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then((response) => {
				this.displayFaceBox(this.calculateFaceLocation(response));
			})
			.catch((err) => {});
	};

	onRouteChange = (route) => {
		if (route === "signin") {
			this.setState({ isSignedIn: false });
		} else if (route === "home") {
			this.setState({ isSignedIn: true });
		}
		this.setState({ route: route });
	};

	render() {
		return (
			<div className="App">
				<Particles />
				<Navigation
					isSignedIn={this.state.isSignedIn}
					onRouteChange={this.onRouteChange}
				/>
				{this.state.route === "home" ? (
					<div>
						<Logo />
						<Rank />
						<ImageLinkForm
							onInputChange={this.onInputChange}
							onButtonSubmit={this.onButtonSubmit}
						/>

						<FaceRecognition
							boxes={this.state.boxes}
							imageUrl={this.state.imageUrl}
						/>
					</div>
				) : this.state.route === "signin" ? (
					<SignIn onRouteChange={this.onRouteChange} />
				) : (
					<Register onRouteChange={this.onRouteChange} />
				)}
			</div>
		);
	}
}

export default App;
