"use client";
import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'
import tw from 'tailwind-styled-components'
import Car from 'D:/Project/my-app/Images/Car.png'
import mapboxgl from 'mapbox-gl';
import { useEffect,useState,useRef } from 'react'

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
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [72.8691, 19.0684],
      zoom: 5,
    });

    
  });

  return (
    <Wrapper>
      <Map id='map'>Map</Map>
      <ActionItem>
        <Header>
          <Logo src="https://o.remove.bg/downloads/ca6c6a4c-a6ff-48e7-b7ff-9ef7fb9183dd/images-removebg-preview.png"/>
          <Profile>
            <Name>Uber Ridder</Name>
            <UserImage src="https://o.remove.bg/downloads/9e0f5823-9aa0-4bbf-bb94-69e1b804669b/images-removebg-preview.png"/>
           </Profile> 
        </Header>
        <ActionButtons>
          <ActionButton> <ActionButtonImage src="Car.png"/>
            Ride
          </ActionButton> 
          <ActionButton> <ActionButtonImage src="https://o.remove.bg/downloads/89c2fa1f-f3d2-4ca1-9f01-d81dce4b9d57/images-removebg-preview.png"/>
            Wheel
          </ActionButton>
          <ActionButton><ActionButtonImage src="https://o.remove.bg/downloads/cc5435b1-ded1-4133-991e-1a37bcb8a32e/images-removebg-preview.png"/>
            Reservation
          </ActionButton>

        </ActionButtons>
       </ActionItem>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-gray-300 h-screen
`
const Map = tw.div`
bg-gray-500 flex-1
`
const ActionItem = tw.div`
flex-1 p-4
`  
const Header = tw.div`
flex justify-between items-center
`
const Logo = tw.img`
h-28
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm text-gray-900
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
flex 
`
const ActionButton = tw.div`
flex bg-gray-500 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl text-gray-900
`
const ActionButtonImage = tw.img`
h-3/5
`
