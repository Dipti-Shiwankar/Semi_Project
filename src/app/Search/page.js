"use client";

import { useRouter } from 'next/navigation'
import {  useState } from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  
  console.log(pickup)
  console.log(dropoff)
    
  return (
    <>
    <Wrapper>
        <ButtonContainer>
            <Link href="/">
            <BackButton src='https://img.icons8.com/windows/256/long-arrow-left.png' />
             </Link>
        </ButtonContainer>
        <InputContainer>
        <FromToIcons>
           <Circle src=" "/>
           <Line src= " "/>
           <Square src =" "/>
        </FromToIcons>
        <InputBoxes>
           <Input  
           placeholder ="Enter pickup Location"
           value ={pickup}
           onChange={(e)=> setPickup(r.target.value)}
           />
           <Input  placeholder= "Where to?"
           value ={dropoff}
           onChange={(e)=> setDropoff(r.target.value)}
           />
        </InputBoxes>
        <PlusIcon src=" "/> 
        </InputContainer>
        <SavedPlaces>
            <StarIcon src=" "/>
             SavedPlaces
        </SavedPlaces>
        <Link href={{
          pathname: "/confirm",
          query:{
            pickup: pickup,
            dropoff: dropoff
          }
        }}>
          <ConfirmButtonContainer>
            Confirm Locations
          </ConfirmButtonContainer>
        </Link>
       

        {/**Button Container */}
        {/**Input Container */}
        {/**Saved Places */}
        {/**Confirm Location  */}
    </Wrapper>
  
    </>
  )
    
}


export default Search

const ConfirmButtonContainer = tw.div`
bg-gray text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-gray px-4
`

const BackButton = tw.div`
h-12
`

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`

const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
flex items-center bg-red-500 px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2  
`