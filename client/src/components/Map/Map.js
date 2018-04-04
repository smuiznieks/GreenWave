import React, { Component } from "react";
import ReactDOM from "react-dom";
import { compose, withProps, withStateHandlers } from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import API from "../../utils/API";


export class Map extends Component {
	state = { locations: [] }
	componentDidMount() {
		API.getAllLocations()
			.then(res => this.setState({ locations: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<StyledMapWithAnInfoBox locations={this.state.locations} />
		)
	}
}


export const StyledMapWithAnInfoBox = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBIXD9h0CZgmj4fHAOY87gHHV-xW4ygyYM&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
		center: { lat: 41.505493, lng: -81.681290 },
	}),
	withStateHandlers(
		() => ({
			openLocation: null,
		}),
		{
			onLocationClick: ({openLocation}) => (nextLocation) => ({
				openLocation: ((openLocation && openLocation._id) === (nextLocation && nextLocation._id))
					? null
					: nextLocation,
			})
		}
	),
	withScriptjs,
	withGoogleMap
)(props =>
	<GoogleMap
		defaultZoom={12}
		defaultCenter={props.center}
	>
		{props.locations
			.filter(loc => loc.latlng)
			.map(loc => ({
				...loc,
				//eslint-disable-next-line
				latlng: new google.maps.LatLng(loc.latlng.lat, loc.latlng.lng)
			}))
			.map(location =>
				<Marker
					key={location._id}
					position={location.latlng}
					onClick={() => props.onLocationClick(location)}
				/>
			)
		}
		{props.openLocation &&
			<InfoBox
				onCloseClick={() => props.onLocationClick(props.openLocation)}
				options={{ closeBoxURL: ``, enableEventPropagation: true }}
				position={props.openLocation && props.openLocation.latlng}
			>
				<div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
					<div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
						{props.openLocation.title}
						{props.openLocation.address}
						{props.openLocation.zipcode}
						{props.openLocation.category}
						{props.openLocation.score}
					</div>
				</div>
			</InfoBox>
		}
	</GoogleMap>
);



// export const StyledMapWithAnInfoBox = compose(
// 	withProps({
// 		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBIXD9h0CZgmj4fHAOY87gHHV-xW4ygyYM&v=3.exp&libraries=geometry,drawing,places",
// 		loadingElement: <div style={{ height: `100%` }} />,
// 		containerElement: <div style={{ height: `400px` }} />,
// 		mapElement: <div style={{ height: `100%` }} />,
// 		center: { lat: 41.505493, lng: -81.681290 },
// 	}),
// 	withStateHandlers(() => ({
// 		isOpen: false,
// 	}), {
// 			onToggleOpen: ({ isOpen }) => () => ({
// 				isOpen: !isOpen,
// 			})
// 		}),
// 	withScriptjs,
// 	withGoogleMap
// )(props =>
// 	<GoogleMap
// 		defaultZoom={12}
// 		defaultCenter={props.center}
// 	>

// 		<Marker
// 			position={{ lat: 41.505493, lng: -81.681290 }}
// 			onClick={props.onToggleOpen}
// 		>
// 			{props.isOpen &&
// 				<InfoBox
// 					onCloseClick={props.onToggleOpen}
// 					options={{ closeBoxURL: ``, enableEventPropagation: true }}
// 				>
// 					<div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
// 						<div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
// 							Place Name
//           </div>
// 					</div>
// 				</InfoBox>}
// 		</Marker>
// 	</GoogleMap>
// );

// Add This where I want the markers & info windows to appear
// Create a functio ntaht pull from the DB, loops through everything and renders to the page using:
	/* { variable }*/
		/* GoogleMap, Marker & InfoBox are React Google Maps Components */


