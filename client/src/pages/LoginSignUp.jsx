import LoginForm from "../components/Login";
import SignupForm from "../components/Signup";

const Login = () => {
    return (
    <main>
      <div>
        <h1>Login or Sign Up</h1>
        < LoginForm />
        < SignupForm/>
      </div>
    </main>
    )
}

export default Login;