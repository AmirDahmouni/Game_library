import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../pages/HomePage"

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {

  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} games`
  return (
    <Heading as='h1' marginY={5} >
      {heading}
    </Heading>
  )
}

export default GameHeading