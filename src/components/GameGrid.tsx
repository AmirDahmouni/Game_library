import { Text, SimpleGrid } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import IGame from "../entities/Game";
import {
  getGamesSelector,
  getErrorSelector,
  getPendingSelector,
  getFiltersSelector
} from "../store/games/selectors"
import { useEffect } from "react";
import { fetchGamesRequest } from "../store/games/actions";

const GameGrid = () => {

  const dispatch = useDispatch();

  const isLoading = useSelector(getPendingSelector);
  const games = useSelector(getGamesSelector);
  const error = useSelector(getErrorSelector);
  const filters = useSelector(getFiltersSelector)

  useEffect(() => {
    dispatch(fetchGamesRequest(filters))
  }, [filters])

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
        {games.map((game: IGame) =>
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid