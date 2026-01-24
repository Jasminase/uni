import Card from '../../components/homeCard/card';

export default function signupPage() {
  return (
      <Card header="Welcome "
        postheader="Sign up to your University Companion account"
        button="Sign Up"
        Q="Already have an account? "
        sign="Login"
        to="/"
        isSignup={true}/> 
  );
}