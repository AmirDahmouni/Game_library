import { Grid, GridItem, HStack, Show, Box, IconButton, Button } from '@chakra-ui/react'
import GameGrid from "../components/GameGrid"
import GenreList from "../components/GenreList"
import PlatformSelector from '../components/PlatformSelector'
import GameHeading from '../components/GameHeading'
import SortSelector from '../components/SortSelector'
import { useCallback, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { updateGamesFilters, fetchGamesRequest } from '../store/games/actions';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"

function HomePage({ filters, nbPages }: any) {

  const [pages, setPages] = useState<number[]>([1, 2, 3])
  const [currentPage, setCurrentPage] = useState<number>(1)


  const dispatch = useDispatch()

  const handlePageChange = useCallback((page: number) => {
    dispatch(updateGamesFilters("pageParam", page))
    dispatch(fetchGamesRequest(filters))
    setCurrentPage(page)
    let pages = [1, 2, 3]
    if (page == nbPages)
      pages = [nbPages - 2, nbPages - 1, nbPages]
    else if (page !== 1)
      pages = [page - 1, page, page + 1]
    setPages(pages)
  }, [])

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '2fr',
        lg: '250px 2fr'
      }}
    >

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
        <Box marginLeft={500}>
          <IconButton aria-label='Search database' icon={<ArrowLeftIcon />} onClick={() => handlePageChange(1)} />
          {
            pages.map((index) =>
              <Button
                bg={currentPage == index ? 'blue.700' : 'whiteAlpha.100'}
                marginLeft={2}
                key={index}
                onClick={() => handlePageChange(index)}
              >
                {index}
              </Button>
            )
          }
          <IconButton marginLeft={2} aria-label='Search database' icon={<ArrowRightIcon />} onClick={() => handlePageChange(nbPages)} />
        </Box>
      </GridItem>

    </Grid >
  )
}

const mapStateToProps = ({ gamesState }: any) => {
  return {
    filters: gamesState.filters,
    nbPages: 500
  };
};

export default connect(mapStateToProps)(HomePage);

