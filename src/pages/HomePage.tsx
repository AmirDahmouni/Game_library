import { Grid, GridItem, HStack, Show, Box, Flex, Spacer } from '@chakra-ui/react'
import {
  Previous,
  Paginator,
  PageGroup,
  Page,
  Next
} from 'chakra-paginator';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'
import GameGrid from "../components/GameGrid"
import GenreList from "../components/GenreList"
import PlatformSelector from '../components/PlatformSelector'
import GameHeading from '../components/GameHeading'
import SortSelector from '../components/SortSelector'
import { useCallback, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { updateGamesFilters, fetchGamesRequest } from '../store/games/actions';

function HomePage({ filters }: any) {

  const [pages, setPages] = useState([1, 2, 3])

  const normalStyles = {
    bg: 'white.100'
  };

  const activeStyles = {
    bg: 'blue.300'
  };

  const pagesQuantity = 50

  const dispatch = useDispatch()

  const handlePageChange = useCallback((page: number) => {
    dispatch(updateGamesFilters("pageParam", page))
    dispatch(fetchGamesRequest(filters))
    setPages([page - 1, page, page + 1])
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
        <Paginator
          onPageChange={handlePageChange}
          pagesQuantity={pagesQuantity - 1}>
          <Previous bg="white">
            <CgChevronLeft />
          </Previous>
          <PageGroup>
            {[1, 2, 3].map((page) =>
              <Page
                key={`paginator_page_${page}`}
                page={page}
                normalStyles={normalStyles}
                activeStyles={activeStyles}
              />
            )}
          </PageGroup>
          <Next bg="white">
            <CgChevronRight />
          </Next>
        </Paginator>
      </GridItem>

    </Grid >
  )
}

const mapStateToProps = ({ gamesState }: any) => {
  return {
    filters: gamesState.filters
  };
};

export default connect(mapStateToProps)(HomePage);

