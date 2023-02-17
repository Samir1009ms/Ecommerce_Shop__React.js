import axios from "axios";


export class itemsApi {

    static async FetchApi(){
    
        const item= await axios ("http://localhost:3300/items")
        // console.log(item.data);
        return item.data
    }
}