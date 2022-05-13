import React from 'react'
import { useSelector } from 'react-redux'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 8.99595298238361,
  lng: -79.52112692660712
}

const MarkComponent = ({ position, text }) => (
  // <InfoWindow position={position}>
  //   <div>
  //     <h1>{text}</h1>
  //   </div>
  // </InfoWindow>

  <Marker position={position} label={text} />
)

const MyMapComponent = () => {
  const { stores } = useSelector(state => state.storeReducer)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB7xSJMVb_IAoQ0GPNYWw7xkLxjWFK-Rj4'
  })

  const positions = {
    'Pizzeria Capitan America': {
      lat: 8.979668595621545,
      lng: -79.5246392449141
    },
    'Pizzeria Iron Man': {
      lat: 8.980761578971848,
      lng: -79.52174965509161
    },
    'Pizzeria Thor': {
      lat: 9.025031832471582,
      lng: -79.47786587230175
    },
    'Pizzeria Black Widow': {
      lat: 9.02198016816327,
      lng: -79.53451412580179
    },
    'Pizzeria Spider Man': {
      lat: 8.99595298238361,
      lng: -79.52112692660712
    }
  }

  return isLoaded ? (
    <GoogleMap id='InfoWindow-example' mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
      {stores.map(item => (
        <MarkComponent key={item.id} position={positions[item.name]} text={item.name} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  )
}

export { MyMapComponent }
