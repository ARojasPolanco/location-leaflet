import { MapContainer, Marker, Popup, TileLayer, FeatureGroup, Circle } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import { useEffect, useState } from 'react'

const Map = () => {
    const [location, setLocation] = useState({
        lat: 0,
        lng: 0
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }, (error) => {
            console.log(error)
        }, {
            enableHighAccuracy: true
        })
    }, [])

    const _onEditPath = (e) => {
        console.log(e)
    }

    const _onCreate = (e) => {
        console.log(e)
    }

    const _onDeleted = (e) => {
        console.log(e)
    }

    return (
        <section className='min-h-screen flex justify-center items-center'>
            <MapContainer center={[-38.716666666667, -62.266666666667]} zoom={13} scrollWheelZoom={false} className='w-screen h-screen'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FeatureGroup>
                    <EditControl
                        position='topright'
                        onEdited={_onEditPath}
                        onCreated={_onCreate}
                        onDeleted={_onDeleted}
                        draw={{
                            rectangle: false,
                            polygon: true,
                            circle: false,
                            circlemarker: false,
                            marker: true
                        }}
                    />
                </FeatureGroup>
            </MapContainer>
        </section>
    )
}

export default Map