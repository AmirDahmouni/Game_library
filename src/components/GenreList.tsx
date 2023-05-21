import IGenre from '../entities/Genre';
import getCroppedImageUrl from '../services/image-url'
import { ListItem, Image, HStack, List, Heading, Spinner, Button } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";

const GenreList = () => {


  if (error) return null
  if (isLoading) return <Spinner />
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data.map((genre: IGenre) =>
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize="lg">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        )
        }
      </List >
    </>
  )
}

export default GenreList