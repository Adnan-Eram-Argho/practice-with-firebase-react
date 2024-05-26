import { useState } from "react";
import ProductRow from "./ProductRow"
import { useEffect } from "react";
import axios from "axios";



function AllDashboardProduct() {
  const [headphones,setHeadphones]= useState();

  useEffect(()=>{
    const load=async()=>{
      const headphonesData =await axios.get("http://localhost:3000/headphone");
      if(headphonesData.status === 200){
        
        setHeadphones(headphonesData?.data);
      }
    }
    load();
  },[])
  return (
    
      <div className="overflow-x-auto w-full">
        <h1 className="text-center my-6 text-4xl">All product</h1>
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Brand</th>
        <th>Price</th>
        
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      headphones?.map((headphone)=><ProductRow key={headphone.id} headphone={headphone}/>)
     }
     
    </tbody>
  </table>
</div>
  
  )
}

export default AllDashboardProduct
