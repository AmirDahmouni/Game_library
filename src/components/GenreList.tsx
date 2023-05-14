import useGenres from '../Hooks/useGenres'
import { Genre } from '../Hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import { ListItem, Image, HStack, List, Text } from "@chakra-ui/react"

const GenreList = () => {
  const { data } = useGenres()
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList