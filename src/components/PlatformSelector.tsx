import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { Platform } from "../Hooks/useGames"


const PlatformSelector = () => {



  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "plarforms"}</MenuButton>
      <MenuList>
        {
          data.map((paltform: Platform) =>
            <MenuItem onClick={() => onSelectedPlatform(paltform)} key={paltform.id}>{paltform.name}</MenuItem>
          )}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector