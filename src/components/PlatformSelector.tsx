import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../Hooks/usePlatform"
import { Platform } from "../Hooks/useGames"

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
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