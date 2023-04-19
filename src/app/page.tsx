"use client";
import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'
import tw from 'tailwind-styled-components'
import Car from 'C:/Users/Dipti/Downloads/Car2.png';
import mapboxgl from 'mapbox-gl';
import { useEffect,useState,useRef } from 'react'
import Map from './components/Map'
import Link from 'next/link';
import Search from './Search/Search';

mapboxgl.accessToken='pk.eyJ1IjoiZGlwdGlzaGl3YW5rYXIyOTEwIiwiYSI6ImNsZ2tvNHd2MTAzNHczZ29teTQ2dGRnNzUifQ.e_mPzKv5Yv8FsHz-Rt0_Vg';




export default function Home() {

 

  return (
    <Wrapper>
      <Map />
      <ActionItem>
        <Header>
          <Logo src="https://img.freepik.com/premium-vector/letter-c-car-modern-logo-symbol-icon-vector-graphic-design_15473-496.jpg?w=360"/>
          <Profile>
            <Name>Uber Ridder</Name>
            <UserImage src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"/>
           </Profile> 
        </Header>
        
        <ActionButtons>
        <Link href="/Search">
          
            <ActionButton> <ActionButtonImage src='{Car}'/>
              Ride
            </ActionButton> 
        </Link>
            <ActionButton> <ActionButtonImage src="https://static.vecteezy.com/system/resources/previews/006/059/929/original/symbol-of-a-bike-isolated-on-white-background-bike-outline-icon-free-vector.jpg"/>
              Wheel
            </ActionButton>
            <ActionButton><ActionButtonImage src="https://img.freepik.com/free-icon/calendar-icon-black_318-9776.jpg"/>
              Reservation
            </ActionButton>

        </ActionButtons>
        
        <InputButton>Where to ?
        </InputButton>
        <Link href='/Search'>search</Link>
       </ActionItem>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col  h-screen
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
flex  bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl text-gray-900
`
const ActionButtonImage = tw.img`
h-3/5 
`

const InputButton= tw.div`
h-20 bg-gray-200 text-2xl text-gray-900 p-4 flex items-center mt-8
`
