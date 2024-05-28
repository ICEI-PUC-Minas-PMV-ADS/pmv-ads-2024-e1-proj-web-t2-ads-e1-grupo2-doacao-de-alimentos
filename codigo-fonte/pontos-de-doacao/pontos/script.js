// Create the Leaflet map
var mapa = L.map('mapa').setView([-23.55, -46.63], 5); // Initial zoom set to show most of Brazil

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(mapa);

// Define some example data for donation points (replace with actual data)
var regioes = [
  { nome: "Sudeste", latitude: -23.55, longitude: -46.63 }, // Rio de Janeiro (example)
  { nome: "Sul", latitude: -30.03, longitude: -51.23 }, // Porto Alegre (example)
  { nome: "Nordeste", latitude: -5.79, longitude: -35.21 }, // Natal (example)
  { nome: "Norte", latitude: -1.45, longitude: -56.02 }, // Belém (example)
  { nome: "Centro-Oeste", latitude: -15.78, longitude: -47.93 }, // Brasília (example)
  
  