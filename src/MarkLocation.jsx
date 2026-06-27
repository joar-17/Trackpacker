import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MarkLocation.css"

export default function MarkLocation({lat, long}) {

const position = [lat, long];

    return (
        <MapContainer center = {position} zoom = {20} className = "map-container">
            <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"/>
            <Marker position = {position}></Marker>
        </MapContainer>
    );
}