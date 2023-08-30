import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { doc,getDoc } from 'firebase/firestore'
import { ThreeCircles } from 'react-loader-spinner'
import Reviews from './Reviews'


const Detail = () => {
     const {id} = useParams();
     const [data , setData ] = useState({
        title: "",
        year: "",
        image: "",
        description: "",
        rating : 0,
        rated:0
     });

     const [loading , setLoading ] = useState(false);
    //  window.alert(id)
    useEffect(() => {
         async function getData(){
         setLoading(true);
         const _doc = doc(db,"movies",id )
         const _data = await getDoc(_doc);
         setData(_data.data());
         setLoading(false);
        }
        getData();
    },[])

  return (
    <div className='p-4 mt-2 flex flex-col md:flex-row items-center md:items-start w-full  justify-center'>
    { loading ? <div className='h-96  flex w-full justify-center items-center'><ThreeCircles height={50} color= "white" /> </div> : 
    <>
    <img className='h-96 block md:sticky top-24'src={data.image} />
    <div className='ml-2 mt-5 w-full md:w-1/2' >
    {/* heading  */}
        <h1 className='text-2xl font-bold text-gray-400'>{data.title}<span className='text-xl'>({data.year})</span></h1>
        <ReactStars
     size={20}
     half={true}
     value={data.rating /data.rated}
     edit={false}
     />


        <p className='mt-2'>{data.description}</p>
        <Reviews id ={id} prevRating={data.rating} userRated={data.rated} />
        {/* <p className='mt-2'>Lucasfilm and director J.J. Abrams join forces once  more to take viewers on an epic journey to a galaxy far, far away with Star Wars: The Rise of Skywalker, the riveting conclusion of the  landmark Skywalker saga, in which new legends will be born and the final battle for freedom is yet to come.Lucasfilm and director J.J. Abrams join forces once  more to take viewers on an epic journey to a galaxy far, far away with Star Wars: The Rise of Skywalker, the riveting conclusion of the  landmark Skywalker saga, in which new legends will be born and the final battle for freedom is yet to come.Lucasfilm and director J.J. Abrams join forces once  more to take viewers on an epic journey to a galaxy far, far away with Star Wars: The Rise of Skywalker, the riveting conclusion of the  landmark Skywalker saga, in which new legends will be born and the final battle for freedom is yet to come.</p> */}
        {/* <p className='mt-2'>Lucasfilm and director J.J. Abrams join forces once  more to take viewers on an epic journey to a galaxy far, far away with Star Wars: The Rise of Skywalker, the riveting conclusion of the  landmark Skywalker saga, in which new legends will be born and the final battle for freedom is yet to come.Lucasfilm and director J.J. Abrams join forces once  more to take viewers on an epic journey to a galaxy far, far away with Star Wars: The Rise of Skywalker, the riveting conclusion of the  landmark Skywalker saga, in which new legends will be born and the final battle for freedom is yet to come.Lucasfilm and director J.J. Abrams join forces once  more to take viewers on an epic journey to a galaxy far, far away with Star Wars: The Rise of Skywalker, the riveting conclusion of the  landmark Skywalker saga, in which new legends will be born and the final battle for freedom is yet to come.</p> */}
    </div>
    </>
    }
    </div>
  )
}

export default Detail