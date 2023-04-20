"use client"
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from '../components/Map'
import { useRouter } from 'next/navigation'
import RideSelector from '../RideSelector/page'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()


  const getPickupCoordinates = (pickup) =>{
     
     fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json' +
       new URLSearchParams({
          access_token: "pk.eyJ1IjoiZGlwdGlzaGl3YW5rYXIyOTEwIiwiYSI6ImNsZ2tvNHd2MTAzNHczZ29teTQ2dGRnNzUifQ.e_mPzKv5Yv8FsHz-Rt0_Vg",
          limit: 1
       })
     )
     .then(response => response.json())
     .then(data => {
        setPickupCoordinates (data.features[0].center);
        
     })
    }
  
    const getDropoffCoordinates =(dropoff) =>{
      
      fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json' +
          new URLSearchParams({
             access_token: "pk.eyJ1IjoiZGlwdGlzaGl3YW5rYXIyOTEwIiwiYSI6ImNsZ2tvNHd2MTAzNHczZ29teTQ2dGRnNzUifQ.e_mPzKv5Yv8FsHz-Rt0_Vg",
             limit: 1
          })
        )
        .then(response => response.json())
        .then(data => {
           setDropoffCoordinates(data.features[0].center)
        })  
    }

  useEffect (() => {
      getPickupCoordinates(pickup);
      getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

  
  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
       <RideContainer>
         <RideSelector />
         <ConfirmButtonContainer>
            <ConfirmButton>
              Confirm UberX
            </ConfirmButton>
         </ConfirmButtonContainer>
       </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const ConfirmButton = tw.div`
bg-gray text-pink my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const Wrapper = tw.div`
flex h-screen flex-col
`

