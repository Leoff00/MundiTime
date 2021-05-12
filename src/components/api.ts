import axios from "axios";

export async function api() {
    const { data } = await axios.get('http://worldtimeapi.org/api/timezone')
    console.log(data);
}

//