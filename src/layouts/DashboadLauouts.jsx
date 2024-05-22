import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

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
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </div>
              <div>
                <button className="btn" onClick={handleSignOut}>
                  
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
