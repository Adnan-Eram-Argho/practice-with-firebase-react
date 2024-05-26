import axios from "axios";

import { toast } from "react-toastify";


function AddProducts() {
 






  const handleEdit=async(e)=>{
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
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
         del = await axios.post("http://localhost:3000/headphone",newData);
     }
     if (del) {
         toast.success("Added");
     }
}
  
  return (
    <div className="w-full">
      <h1 className="text-center my-3 text-4xl">Add product</h1>
    <form className="w-10/12 m-auto" onSubmit={handleEdit}>

    <label className="text-2xl">Id:</label>
      <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="id" placeholder="id" />


      <label className="text-2xl">Title:</label>
      <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="title" placeholder="Title" />


      <label className="text-2xl">Brand:</label>
      <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="brand" placeholder="brand" />


      <label className="text-2xl">Price:</label>
      <input type="number" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="price" placeholder="price" />


      <label className="text-2xl">Description:</label>
      <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="des" placeholder="description" />


      <label className="text-2xl">Image:</label>
      <input type="text" className="w-full p-5 border border-base-content rounded-lg mb-3"  name="image"  placeholder="image_url"/>



      <input type="submit" value={"Add Product"} className="w-full p-5 border border-base-content rounded-lg btn btn-base my-3"/>
    </form>
  </div>
  )
}

export default AddProducts
