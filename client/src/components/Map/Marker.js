import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';



class MapMarker extends Component {

    InitMap() {
        var mapCenter = { lat: 41.505493, lng: -81.681290 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: mapCenter
        });

        var contentString = 'Google Maps InfoWindow';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            title: 'Cleveland!!!'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    };

};

export default MapMarker;