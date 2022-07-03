import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

export default function Map() {
    return (
        <MapContainer 
            style={{ height: "18rem", width: "100%" }}
            center={[2.807, -60.766]} 
            zoom={13} 
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[2.807, -60.766]} icon={new Icon<any>({iconUrl: markerIcon})}>
                <Popup>
                    Nós estamos aqui!
                </Popup>
            </Marker>
        </MapContainer>
    )
}