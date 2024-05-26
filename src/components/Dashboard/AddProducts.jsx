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
    <form className="w-10/12 m-auto" onSubmit={handleEdit}>
      <input type="text" className="w-full p-5 border border-base-content rounded-lg my-5"  name="id" placeholder="id" />
      <input type="text" className="w-full p-5 border border-base-content rounded-lg my-5"  name="title" placeholder="Title" />
      <input type="text" className="w-full p-5 border border-base-content rounded-lg my-5"  name="brand" placeholder="brand" />
      <input type="number" className="w-full p-5 border border-base-content rounded-lg my-5"  name="price" placeholder="price" />
      <input type="text" className="w-full p-5 border border-base-content rounded-lg my-5"  name="des" placeholder="description" />
      <input type="text" className="w-full p-5 border border-base-content rounded-lg my-5"  name="image"  placeholder="image_url"/>
      <input type="submit" value={"Add Product"} className="w-full p-5 border border-base-content rounded-lg btn bg-neutral-content my-5"/>
    </form>
  </div>
  )
}

export default AddProducts
