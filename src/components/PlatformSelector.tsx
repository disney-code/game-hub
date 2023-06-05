import React from 'react'
import { Menu,Button,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
const PlatformSelector = () => {
	const {data,error}=usePlatforms()
	console.log(data)
	if (error) return null;
  return (
   <Menu>
	<MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
	<MenuList>
		{data.map((d)=><MenuItem key={d.id}>{d.name}</MenuItem>)}

	</MenuList>
   </Menu>
  )
}

export default PlatformSelector