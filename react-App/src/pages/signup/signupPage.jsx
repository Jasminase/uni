import Card from '../../components/homeCard/card';
import "./signup.css"
export default function signupPage() {
  return (
    <div className='signup'>
      <Card header="Welcome "
        button="Sign Up"
        Q="Already have an account? "
        sign="Login"
        to="/"
        isSignup={true}/> 
    </div>
  );
}