import React, {useState, useEffect} from 'react'
import axios from 'axios';

export const StoreView = () => {
const [serverData, setServerData]  = useState([]);
    const fetchData = async () => {
      const response = await axios.get("https://www.scorebat.com/video-api/v3/");
   setServerData(response.data.response);

    }

    useEffect(() => {
        fetchData();
       
    }, [])

    const displayData = () => {
        return serverData?.map((match,i)=> (<div key={i}>{match.title} 
       <div
      dangerouslySetInnerHTML={{__html: match.videos[0].embed}}>
       </div>
        </div>));
    } 
    // const [items, setItems] = useState(0);
    return (
        <div>

            


            <button onClick={() => console.log(serverData)} >apiCall</button>
            {displayData()}

            {/* <h1>Our Products</h1>
            <buttom onClick={() => setItems(items + 1)}>+</buttom>
            <span>{items}</span>
            <buttom onClick={() => {
                if(items >= 1) setItems(items - 1)}}>-</buttom> */}
        </div>
    );
};
