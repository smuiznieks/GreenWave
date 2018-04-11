import React, { Component } from 'react';
import { withUser } from '../../services/withUser';
import './HomePage.css';

class HomePage extends Component {

	render() {

		const divStyle = {
			backgroundImage: "url('./assets/images/Trees.jpg')",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			zIndex: -1,
			color: "white",
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		};
		const divStyle1 = {
			backgroundImage: "url('./assets/images/lightGreen.jpg')",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			zIndex: -1,
			color: "white",
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			opacity: 0.50
		};
		return (
			<div className="Container">
				<div className="Heading">
					<div style={divStyle1} />



					<h1>Welcome to GreenWave</h1></div>




				<div className="main-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
					<div style={divStyle} />


					<h2><strong>GreenWave</strong> is a community of environmentally<br />
						conscious individuals looking to promote<br />
						more sustainable living locally.</h2>

					<h1 style={{color: "white"}}>Join us!</h1>

				</div>


			</div>
		);
	};
}

export default withUser(HomePage);
