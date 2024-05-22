import { Link, useNavigate } from "react-router-dom"
import GoogleLogin from "../auth/GoogleLogin"
import auth from "../firebase/firebase.config";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import GithubLogin from "../auth/GithubLogin";

function Register() {
    const Navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [user] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        // eslint-disable-next-line no-unused-vars
        user1,
        // eslint-disable-next-line no-unused-vars
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp=(e)=>{
        e.preventDefault();
       const form=e.target;
       const email=form.email.value;
       const pass = form.pass.value;
       createUserWithEmailAndPassword(email,pass)
    }

    useEffect(() => {
        if (user) {
            Navigate('/')
        }
        if (error) {
            console.log(error.message)
        }
    }, [Navigate,user, error])
  return (
    <div >
            <div className="hero min-h-screen bg-base-200 w-10/12 m-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                error&&<p>{error.message}</p>
                            }
                            <p>Already have an account? <Link to={'/login'} className="text-orange-500">Login</Link></p>
                        </form>
                        <GoogleLogin/>
                        <GithubLogin/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register
