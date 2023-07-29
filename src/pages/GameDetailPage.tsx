import {
  GridItem,
  Heading,
  SimpleGrid,
  Box
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import { connect } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGameRequest } from '../store/games/actions';



const GameDetailPage = ({ game, error }: any) => {
  const { slug } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    if (slug)
      dispatch(fetchGameRequest({ slug: slug }))
  }, [])

  if (error)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="8"
          maxWidth="500px"
          width="100%"
          boxShadow="lg"
        >
          <Heading textAlign="center" mb="6" color={"red.600"}>
            Oops !
          </Heading>

          <Heading textAlign={"center"} >
            This game does not exist.
          </Heading>

        </Box>
      </Box>)


  return (
    game &&
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={50}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

const mapStateToProps = ({ gamesState }: any) => {
  return {
    game: gamesState.selectedGame,
    error: gamesState.error
  };
};

export default connect(mapStateToProps)(GameDetailPage);


