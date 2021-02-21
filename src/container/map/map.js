import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import './map.css';

const MyPopupMarker = ({ children, position }) => (
    <Marker position={position}>
        <Popup>{children}</Popup>
    </Marker>
)

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ))
    return <div style={{ display: 'none' }}>{items}</div>
}

class MyMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 2,
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        const markers = [
            { key: 'marker1', position: [11.5, 10.1], children: 'My first popup' },
            { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
            { key: 'marker3', position: [2.49, 20.05], children: 'My third popup' },
            { key: 'marker4', position: [52.49, 20.05], children: 'My fourth popup' },
            { key: 'marker5', position: [29.49, 20.05], children: 'My fifth popup' },
            { key: 'marker6', position: [2.49, 9.05], children: 'My sixth popup' },
        ]

        return (
            <div>
                <Map center={position} zoom={this.state.zoom} viewport={this.state.viewport} className="leaflet-container">
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MyMarkersList markers={markers} />
                </Map>
            </div>
        )
    }
}

export default MyMap;