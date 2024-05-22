
import auth from '../firebase/firebase.config';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';

function GithubLogin() {
    const [signInWithGithub] = useSignInWithGithub(auth);

    const handleGithublogin=()=>{
        signInWithGithub
    }


  return (
    <div>
      <div className='mt-2'>
       <button onClick={handleGithublogin} className="bg-gray-400 px-5 py-3 w-full rounded-lg text-black">login with github</button>
    </div>
    </div>
  )
}

export default GithubLogin
