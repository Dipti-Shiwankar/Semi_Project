"use client";
import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl';
import { useEffect,useState,useRef } from 'react'
import Map from '../app/components/Map'
import Link from 'next/link';
import Search from './Search/Search';


mapboxgl.accessToken='pk.eyJ1IjoiZGlwdGlzaGl3YW5rYXIyOTEwIiwiYSI6ImNsZ2tvNHd2MTAzNHczZ29teTQ2dGRnNzUifQ.e_mPzKv5Yv8FsHz-Rt0_Vg';




export default function Home() {

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
      zoom: 7,
    });

    
  });

  return (
    <Wrapper>
      <Map id='map'>Map</Map>
      <ActionItem>
        <Header>
          <Logo src="https://www.linkpicture.com/q/taxi-round-white-icon-logo-png-11663597162dsee73c6lp-removebg-preview.png"/>
          <Profile>
            <Name>Uber Ridder</Name>
            <UserImage src="https://p7.hiclipart.com/preview/782/114/405/5bbc3519d674c.jpg"/>
          </Profile> 
        </Header>
        <ActionButtons>
          <ActionButton> <ActionButtonImage src="https://www.linkpicture.com/q/ride.png"/>
            Ride
          </ActionButton> 
          <ActionButton> <ActionButtonImage src="https://www.linkpicture.com/q/bike_1.png"/>
            Wheel
          </ActionButton>
          <ActionButton><ActionButtonImage src="https://www.linkpicture.com/q/date_6.png"/>
            Reservation
          </ActionButton>

        </ActionButtons>
       </ActionItem>
    </Wrapper>
  )
}



const Wrapper = tw.div`
flex flex-col h-screen
`
const ActionItem = tw.div`
flex-1 p-4
`  
const Header = tw.div`
flex justify-between items-center
`
const Logo = tw.img`
h-20 w-20 p-px padding:2px
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
flex 
`
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl text-gray-900
`
const ActionButtonImage = tw.img`
h-3/5
`
