import { useRouter } from 'next/router'
import React from 'react'

const Search = () => {
    
  return (
    <>
    <Wrapper>
        <ButtonContainer>
            <BackButton src='https://img.icons8.com/windows/256/long-arrow-left.png' />
        </ButtonContainer>
        <InputContainer>
        <FromToIcons>
           <Circle src=" "/>
           <Line src= " "/>
           <Square src =" "/>
        </FromToIcons>
        <InputBoxes>
           <Input  placeholder ="Enter pickup Location"/>
           <Input  placeholder= "Where to?"/>
        </InputBoxes>
        <PlusIcon src=" "/> 
        </InputContainer>
        <SavedPlaces>
            <StarIcon src=" "/>
             SavedPlaces
        </SavedPlaces>

        {/**Button Container */}
        {/**Input Container */}
        {/**Saved Places */}
        {/**Confirm Location  */}
    </Wrapper>
  
    </>
  )
    
}


export default Search

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

`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full
`