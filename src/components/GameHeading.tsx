import { Heading } from "@chakra-ui/react";


const GameHeading = () => {

  const heading = `${platform?.name || ''} ${genre?.name || ''} games`
  return (
    <Heading as='h1' marginY={5} >
      {heading}
    </Heading>
  )
}

export default GameHeading