import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId, game }: any) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch()
  }, [])

  const first = game?.results[0];
  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
