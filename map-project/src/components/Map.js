import React, { Component } from 'react';

class Map extends Component {

    state = {
        map: "",
        lat: this.props.lat,
        lng: this.props.lng,
        zoom: this.props.zoom
    }

    componentDidMount() {
        let script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAzSuH6ARrI3kZbmdHPwb8KwUASBrUNhvk&callback=initMap";
        script.async = true;
        script.defer = true;
        window.console["error"] = e=>{
            if (e.indexOf("request quota") === -1) {
                let errorMsg = `
                    <div class="error-msg">
                        <h1>Error!</h1>
                        <p>Unfortunately the map failed to load. Please check your connection and reload this page.</p>
                    </div>
                `;
                document.getElementById("map").innerHTML = errorMsg;
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
        window.initMap = this.initMap;
    }
    
    initMap = ((app)=>()=>{
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: app.state.lat, lng: app.state.lng},
            zoom: app.state.zoom
        });
        app.setState({ map });
        app.props.setMapState(map);
    })(this);

    render() {
        return (
            <div id="map"></div>
        );
    }
}
export default Map;