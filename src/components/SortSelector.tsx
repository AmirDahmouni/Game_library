import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { BsChevronDown } from 'react-icons/bs'
import { getFiltersSelector } from '../store/games/selectors'
import { fetchGamesRequest, updateGamesFilters } from '../store/games/actions';
import { useState } from 'react';

const SortSelector = () => {

  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState<string>()

  const filters = useSelector(getFiltersSelector)

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "popularity" },
    { value: "-rating", label: "Average rating" }
  ]

  const onSelectOrder = (filterValue: string) => {
    setSortOrder(filterValue)
    dispatch(updateGamesFilters("sortOrder", filterValue))
    dispatch(fetchGamesRequest(filters))
  }

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{currentSortOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {
          sortOrders.map((order) =>
            <MenuItem onClick={() => onSelectOrder(order.value)} key={order.label} value={order.value}>
              {order.label}
            </MenuItem>
          )}
      </MenuList>
    </Menu >
  )
}

export default SortSelector