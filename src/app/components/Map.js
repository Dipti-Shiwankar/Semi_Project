import mapboxgl from 'mapbox-gl';
import { useEffect,useState,useRef } from 'react'
import tw from 'tailwind-styled-components'

mapboxgl.accessToken='pk.eyJ1IjoiZGlwdGlzaGl3YW5rYXIyOTEwIiwiYSI6ImNsZ2tvNHd2MTAzNHczZ29teTQ2dGRnNzUifQ.e_mPzKv5Yv8FsHz-Rt0_Vg';


const Map=(props) =>{
  

    const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  

useEffect(() => {
    
    const map = new mapboxgl.Map({
      container:"map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [72.8691, 19.0684],
      zoom: 5,
    })
      if(props.pickupCoordinates){
    addToMap(map, props.pickupCoordinates)
      }

      if(props.dropoffCoordinates){
        addToMap(map, props.dropoffCoordinates)
      }

      if(props.pickupCoordinates && props.dropoffCoordinates){
        map.fitBounds([
          props.dropoffCoordinates,
          props.pickupCoordinates
        ],{
          padding: 60
        }
        )
      }
  }, [props.pickupCoordinates, props.dropoffCoordinates])


  const addToMap  = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    }
    


   
    return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper=tw.div`
flex-1 h-1/2
`
