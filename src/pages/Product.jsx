import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "../components/Shared/SingleProduct";


function Product() {
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
        headPhones?.map((headphone)=><SingleProduct key={headphone?.id} headphone={headphone}/>)
      }
    </div>
    </>
  )
}

export default Product
