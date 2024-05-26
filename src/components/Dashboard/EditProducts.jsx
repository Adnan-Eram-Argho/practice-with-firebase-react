/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";


function EditProducts() {
    //take values
    const [headphone,setHeadphone]=useState();
    let {id} = useParams();


    const handleEdit=async(e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.des.value;
        const image = form.image.value;
        
        const newData = {id,title,brand,price,description,image};

         //patch
         let txt;
         let del;
         if (confirm("Sure you want to edit?")) {
             txt = true;
         } else {
             txt = false;
         }
         console.log(txt)
         if (txt) {
             del = await axios.patch(`http://localhost:3000/headphone/${headphone?.id}`,newData)
         }
         if (del) {
             toast.success("Edited");
         }
    }


    useEffect(()=>{
        
        const load = async()=>{
         const headPhoneData = await axios.get(`http://localhost:3000/headphone/${id}`)
         if(headPhoneData?.status===200){
            console.log(headPhoneData?.data);
            setHeadphone(headPhoneData?.data);
         }   

        
        }
        load()
    },[])
    

    //post
   

  return (
    <div className="w-full">
      <h1 className="text-center my-3 text-4xl">Edit product</h1>
      <form className="w-10/12 m-auto" onSubmit={handleEdit}>
        <label className="text-2xl">Title:</label>
        <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="title"  defaultValue={headphone?.title}/>
        <label className="text-2xl">Brand:</label>
        <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="brand"  defaultValue={headphone?.brand}/>
        <label className="text-2xl">Price:</label>
        <input type="number" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="price"  defaultValue={headphone?.price}/>
        <label className="text-2xl">Description:</label>
        <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="des"  defaultValue={headphone?.description}/>
        <label className="text-2xl">Image:</label>
        <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="image"  defaultValue={headphone?.image}/>
        <input type="submit" value={"edit product"} className="w-full p-5 border border-base-content rounded-lg btn btn-base my-3"/>
      </form>
    </div>
  )
}

export default EditProducts
