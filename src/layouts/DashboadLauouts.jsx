import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Link, Outlet } from "react-router-dom";

function DashboadLauouts() {
  const [signOut] = useSignOut(auth);

    const handleSignOut =async () => {
        const success = await signOut();
        if (success) {
          alert('You are sign out');
        }
      }
  return (
    
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet/>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
            {/* Sidebar content here */}
           
              <div>
                <li>
                <Link to={'/dashboard'}>
                 Dashboard
                </Link>
                </li>
                <li>
                <Link to={'/dashboard/all-products'}>
                 All product
                </Link>
                </li>
                <li>
                <Link to={'/dashboard/add-products'}>
                 Add product
                </Link>
                </li>
                
                
              </div>
              <div>
                <Link to={'/'} className="btn bg-base-300 mr-5" >
                  
                  Home
                </Link>
                <button className="btn btn-error" onClick={handleSignOut}>
                  
                  sign out
                </button>
              </div>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboadLauouts;
