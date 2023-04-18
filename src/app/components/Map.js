import mapboxgl from 'mapbox-gl';
import { useEffect,useState,useRef } from 'react'
import tw from 'tailwind-styled-components'

mapboxgl.accessToken='pk.eyJ1IjoiZGlwdGlzaGl3YW5rYXIyOTEwIiwiYSI6ImNsZ2tvNHd2MTAzNHczZ29teTQ2dGRnNzUifQ.e_mPzKv5Yv8FsHz-Rt0_Vg';


const Map=() =>{

    const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  

useEffect(() => {
    
    const map = new mapboxgl.Map({
      container:"map",
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [72.8691, 19.0684],
      zoom: 5,
    });

    
  });
return <Wrapper id='map'></Wrapper>
}
export default Map
const Wrapper=tw.div`
flex-1
`