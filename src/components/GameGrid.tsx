import { Text, SimpleGrid } from "@chakra-ui/react"
import useGames, { Platform } from '../Hooks/useGames'
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Game } from "../Hooks/useGames";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} margin='10px' >
        {isLoading && skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
        {games.map((game: Game) =>
          <GameCardContainer key={game.id}>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid