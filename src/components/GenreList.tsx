import {List,ListItem,HStack,Image,Text,Spinner,Button} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url';

interface Props{
	onSelectGenre:(genre:Genre)=>void;
}
const GenreList = ({onSelectGenre}:Props) => {
	const {data,isLoading,error}=useGenres();
	if(error) return null
if(isLoading) return <Spinner />
  return (
   <List>
	{data.map(d=><ListItem key={d.id} paddingY='5px' >
		<HStack>
		<Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(d.image_background)}/>
		<Button onClick={()=>onSelectGenre(d)} fontSize='lg' variant='link'>{d.name}</Button>
		
		</HStack></ListItem>)}
   </List>
  )
}

export default GenreList