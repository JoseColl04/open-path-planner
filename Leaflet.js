// Initialize the map and set the view to a specific latitude and longitude
var map = L.map('map').setView([51.505, -0.09], 13); // Latitude, Longitude, Zoom level

// Add a tile layer (using OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Optional: Add a marker at the center of the map
var marker = L.marker([51.505, -0.09]).addTo(map);

// Optional: Add a popup to the marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();