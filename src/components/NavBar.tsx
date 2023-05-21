import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { fetchGamesRequest, updateGamesFilters } from "../store/games/actions";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersSelector } from "../store/games/selectors";


const NavBar = () => {

  const dispatch = useDispatch()
  const filters = useSelector(getFiltersSelector);

  const search = (text: string) => {
    dispatch(updateGamesFilters("searchText", text))
    dispatch(fetchGamesRequest(filters))
  }

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} />
      <SearchInput onSearch={(filter) => search(filter)} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar