import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { fetchGamesRequest, updateGamesFilters } from "../store/games/actions";
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';

const NavBar = ({ filters }: any) => {

  const dispatch = useDispatch()

  const search = (text: string) => {
    dispatch(updateGamesFilters("searchText", text))
    dispatch(fetchGamesRequest(filters))
  }

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} width={50} height={50} />
      <SearchInput onSearch={(filter) => search(filter)} />
      <ColorModeSwitch />
    </HStack>
  )
}

const mapStateToProps = (state: any) => {
  return {
    filters: state.gamesState.filters
  };
};

export default connect(mapStateToProps)(NavBar);