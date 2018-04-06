import React, { Component } from "react";
import ReactDOM from "react-dom";
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import API from "../../utils/API";
import "./map.css";
import { ScoreBtn } from "./ScoreBtn";
import { Vote } from "./Vote";



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
		containerElement: <div style={{ height: `800px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
		center: { lat: 41.505493, lng: -81.681290 },
	}),
	withStateHandlers(
		() => ({
			openLocation: null,
		}),
		{
			onLocationClick: ({ openLocation }) => (nextLocation) => ({
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
		onZoomChanged={() => props.onLocationClick(props.openLocation)}
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
				<div className="mapWindow">
					<div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
						<h5>{props.openLocation.title}</h5>
						<p>{props.openLocation.address}<br />{props.openLocation.zipcode}</p>
						<p><span className="mapBoldText">Category:</span> {props.openLocation.category}</p>
						<hr />
						<Vote location = {props.openLocation} />
					</div>
				</div>
			</InfoBox>
		}
	</GoogleMap>
);