import React from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../Data/carList'

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>
        Choose A title , or swipe up for more
      </Title>
      <CarList>
        { carList.map((car, index)=> 
                 <Car key={index}>
                 <CarImage src={car.imgUrl} />
                 <CarDetails>
                     <Service>{car.service} </Service>
                     <Time>5 min away</Time>
                 </CarDetails>
                 <Price>$24.00</Price>
              </Car>
        )}

      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-2
`

const Car = tw.div`
flex p-4 items-center
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`