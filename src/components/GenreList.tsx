import { Platform } from '../Hooks/useGames';
import useGenres from '../Hooks/useGenres'
import { Genre } from '../Hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import { ListItem, Image, HStack, List, Text, Spinner, Button } from "@chakra-ui/react"

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null
  if (isLoading) return <Spinner />
  return (
    <List>
      {data.map((genre: Genre) =>
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize="lg">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      )
      }
    </List >
  )
}

export default GenreList