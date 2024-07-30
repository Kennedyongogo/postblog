
import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);

            window.initMap = () => {
                const shopLocation = { lat: 37.7749, lng: -122.4194 }; // Replace with your shop's coordinates
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    center: shopLocation,
                });
                new google.maps.Marker({
                    position: shopLocation,
                    map: map,
                });
            };
        };

        loadMapScript();
    }, []);

    return (
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
    );
};

export default About;