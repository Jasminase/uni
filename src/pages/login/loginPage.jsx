import Card from '../../components/homeCard/card';
export default function HomePage() {
  return (
    <div className='login'>
      <Card header="Welcome Back"
        postheader="Sign in to your University Companion account"
        button="Login"
        Q="Don't have an account? "
        sign="Sign Up"
        to="/signup"/>  
    </div>
  );
}