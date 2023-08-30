import React, {useEffect, useState} from "react"
import { Audio, Circles  } from "react-loader-spinner";
import ReactStars from "react-stars"
import {getDocs} from 'firebase/firestore'
import {moviesRef} from '../firebase/firebase'
import { Link } from "react-router-dom";

const Cards = () => {
    const[data , setData] = useState([]);
    // jab tak data get ho raha show spinner 
    const [loading , setLoading]= useState(true);

    useEffect(() => {
     async function getData(){
       setLoading(true);
       const _data = await getDocs(moviesRef);
       _data.forEach((doc) => {
        setData((prv) => [...prv , {...Audio(doc.data()) , id: doc.id }])
       })
    //    console.log(_data); 

       setLoading(false);
     }
     getData();
    },[])

  return (
    <div className="flex flex-wrap justify-between px-3 mt-2">
    {loading ?<div className="w-full flex justify-center items-center h-96"><Circles height={80} color="white" /></div>:
    data.map((e,i) => {
     return (
  
    <Link to={`/detail/${e.id}`}><div key={i} className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer  mt-6 transition-all duration-5">
     <img className="h-55 md:h-60" src={e.image}/>
     <h1>
     {e.title}
     </h1>
     <h1 className="flex items-center"><span className="text-orange-500 mr-1">Rating:</span>
     <ReactStars
     size={20}
     half={true}
     value={e.rating /e.rated }
     edit={false}
     />
     </h1>

     <h1><span className="text-orange-500">Year:</span> {e.year} </h1>
    </div></Link>
    )})
    }
    </div>
  )
}

export default Cards