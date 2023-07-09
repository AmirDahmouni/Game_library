import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  //const { data, isLoading, error } = useScreenshots(gameId);


  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file: any) =>
        <Image key={file.id} src={file.image} />)}
    </SimpleGrid>
  )
}

export default GameScreenshots