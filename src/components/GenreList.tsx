import {List,ListItem,HStack,Image,Text} from '@chakra-ui/react'
import useGenres from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url';


const GenreList = () => {
	const {data}=useGenres();
  return (
   <List>
	{data.map(d=><ListItem key={d.id} paddingY='5px' >
		<HStack>
		<Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(d.image_background)}/>
		<Text fontSize='lg'>{d.name}</Text>
		
		</HStack></ListItem>)}
   </List>
  )
}

export default GenreList