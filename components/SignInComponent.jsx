import Link from "next/link"

const SignInComponent = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>Welcome to Read Connect!</h1>
                    <p>How incredible to see you again in our connection corner with reading.</p>
                </div>
                <div>
                    <div>
                        <div >
                            <button><span>Github</span></button>
                            <button><span>Google</span></button>
                        </div>
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <input type="password" placeholder="Password" />
                            <button type="submit"><span>Sign In</span></button>
                        </form>
                    </div>
                    <p>Are you not registered?<Link href='/sign-up'> Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignInComponent