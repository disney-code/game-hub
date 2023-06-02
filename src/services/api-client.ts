import axios from "axios"

export default axios.create({
	baseURL:'https://api.rawg.io/api/',
	params:{
		key:'51b1c9026b594f3280378962f4e58bad'
	}
})