import { Link, useNavigate } from "react-router-dom"
import GoogleLogin from "../auth/GoogleLogin"
import auth from "../firebase/firebase.config";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import GithubLogin from "../auth/GithubLogin";



function Login() {
    const [user] = useAuthState(auth);   
    const Navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    
    const [
        signInWithEmailAndPassword,
        // eslint-disable-next-line no-unused-vars
        user1,
        // eslint-disable-next-line no-unused-vars
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleSignIn= (e)=>{
        e.preventDefault();
        const form = e.target;
        console.log(form)
        const email = form.email.value;
        const pass = form.pass.value;
        signInWithEmailAndPassword(email,pass)
       
    }



 

    useEffect(() => {
        if (user) {
            Navigate('/')
        }
      if(error){
        console.log(error)
      }
    },[Navigate,user,error])

    return (
        <div >
            <div className="hero min-h-screen bg-base-200 w-10/12 m-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" >Login</button>
                            </div>
                            <p>Don,t have an account? <Link to={'/register'} className="text-orange-500">Register</Link></p>
                            {
                                error&&<p>{error?.message}</p>
                            }
                        </form>
                        <GoogleLogin />
                        <GithubLogin/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
