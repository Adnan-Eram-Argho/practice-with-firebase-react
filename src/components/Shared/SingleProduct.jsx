/* eslint-disable react/prop-types */


function SingleProduct({headphone}) {
    console.log(headphone)
    const des=headphone.description.slice(0,30);
  return (
    <div className="h-[600px]">
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={headphone?.image} alt="Shoes" /></figure>
  <div className="card-body">
    {
      headphone.title>30 ? 
      
      <h2 className="card-title">
      {headphone?.title}
      </h2>
      :<h2 className="card-title">
      {headphone?.title.slice(0,30)}
      </h2>
       
    }
    
   
    
    {
      
      headphone.description<40 ?  <p>{des}</p> :<p>{headphone.description}</p> 
    }
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{headphone.brand}</div> 
      <div className="badge badge-outline">+{headphone.price}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SingleProduct
