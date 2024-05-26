import axios from "axios";
import { useEffect, useState } from "react"
import SingleProduct from "../Shared/SingleProduct";
import { Link } from "react-router-dom";


function HomeProducs() {
    const [headPhones,setHeadphones]=useState();
    useEffect(()=>{
    async function load(){
        const data =await axios.get("http://localhost:3000/headphone");
        if(data?.status ===200){
            setHeadphones(data?.data);
            
        }

    }
    load()
    },[])

  return (
    <>
    <h1 className="text-center mt-5 text-4xl"> Products</h1>
    <div className="w-10/12 m-auto flex flex-row flex-wrap gap-8 items-center justify-center mt-5">
      {
        headPhones?.reverse()?.slice(0,6)?.map((headphone)=><SingleProduct key={headphone?.id} headphone={headphone}/>)
      }
    </div>
    <div className="my-5 flex">
        <Link to={"product"} className="btn m-auto btn-wide text-2xl"> All products</Link>
    </div>
    </>
  )
}

export default HomeProducs
