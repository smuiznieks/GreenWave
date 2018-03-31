import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps, withStateHandlers } from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";


// export const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyBIXD9h0CZgmj4fHAOY87gHHV-xW4ygyYM&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `600px` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props => (
//   <GoogleMap defaultZoom={12} defaultCenter={{ lat: 41.505493, lng: -81.681290 }}>
//     {/* {props.isMarkerShown && (
//       <Marker position={{ lat: 41.505493, lng: -81.681290 }} />
// 	)} */}

//   </GoogleMap>
// ));




export const StyledMapWithAnInfoBox = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBIXD9h0CZgmj4fHAOY87gHHV-xW4ygyYM&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
		center: { lat: 41.505493, lng: -81.681290 },
	}),
	withStateHandlers(() => ({
		isOpen: false,
	}), {
			onToggleOpen: ({ isOpen }) => () => ({
				isOpen: !isOpen,
			})
		}),
	withScriptjs,
	withGoogleMap
)(props =>
	<GoogleMap
		defaultZoom={12}
		defaultCenter={props.center}
	> 
       
		<Marker
			position={{ lat: 41.505493, lng: -81.681290 }}
			onClick={props.onToggleOpen}
		>
			{props.isOpen && 
			<InfoBox
				onCloseClick={props.onToggleOpen}
				options={{ closeBoxURL: ``, enableEventPropagation: true }}
			>
				<div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
					<div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
						Place Name
          </div>
				</div>
			</InfoBox>}
		</Marker>
	</GoogleMap>
);

// Add This where I want the markers & info windows to appear
// Create a functio ntaht pull from the DB, loops through everything and renders to the page using:
	/* { variable }*/
		/* GoogleMap, Marker & InfoBox are React Google Maps Components */


