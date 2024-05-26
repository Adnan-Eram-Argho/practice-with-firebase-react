/* eslint-disable react/prop-types */


function SingleProduct({headphone}) {
    console.log(headphone)
  return (
    <div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://dvf83rt16ac4w.cloudfront.net/upload/product/20231026_1698299879_827607.jpeg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {headphone?.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
   
    <p>{headphone.description}</p>
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
