import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.config';

function GoogleLogin() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleGoogleLogin=()=>{
        signInWithGoogle()
    }
  return (
    <div>
       <button onClick={handleGoogleLogin} className="bg-orange-400 px-5 py-3 w-full rounded-lg text-black">login with google</button>
    </div>
  )
}

export default GoogleLogin
