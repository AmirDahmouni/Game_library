import { Grid, GridItem, HStack, Show, Box } from '@chakra-ui/react'
import NavBar from "../components/NavBar"
import GameGrid from "../components/GameGrid"
import GenreList from "../components/GenreList"
import PlatformSelector from '../components/PlatformSelector'
import GameHeading from '../components/GameHeading'
import SortSelector from '../components/SortSelector'

function HomePage() {

  return (
    < Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="20px" >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} paddingLeft={2} >
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid >
  )
}

export default HomePage
