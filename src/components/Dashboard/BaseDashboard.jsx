import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";


function BaseDashboard() {
  const [user] = useAuthState(auth);
  console.log(user);
  const email = user?.email;
  let name = "No name was found";
  let photo ="https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg";
  if(user.photoURL){
    photo = user.photoURL
  }
  if(user?.displayName){
    name = user?.displayName;
  }
  console.log(name)
  return (
    
    <div className="hero min-h-screen bg-base-200 w-10/12 my-5 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{email}</p>
      <Link to='/dashboard/all-products' className="btn bg-base-300 mr-5">Products </Link>
    </div>
  </div>
</div>

  )
}

export default BaseDashboard
