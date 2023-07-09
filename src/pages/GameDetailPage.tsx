import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner
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


const GameDetailPage = ({ game }: any) => {
  const { slug } = useParams();


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGameRequest(slug))
  }, [])


  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
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
    game: gamesState.selectedGame
  };
};

export default connect(mapStateToProps)(GameDetailPage);


