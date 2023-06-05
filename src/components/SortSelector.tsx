import React from 'react'
import { Menu,Button,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'
interface Props{
	onSelectSortSelector:(platform:Platform)=>void;
	selectedSortSelector:Platform |null;
}
const SortSelector = () => {
  return (
	<Menu>
	<MenuButton as={Button} rightIcon={<BsChevronDown />}>
		Order by: Relevance
	</MenuButton>
	<MenuList>
		<MenuItem>Relevance</MenuItem>
		<MenuItem>Date added</MenuItem>
		<MenuItem>Name</MenuItem>
		<MenuItem>Release date</MenuItem>
		<MenuItem>Popularity</MenuItem>
		<MenuItem>Average rating</MenuItem>

	</MenuList>
   </Menu>
  )
}

export default SortSelector