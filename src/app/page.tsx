import { Login } from './Login';


export default function LoginPage({ searchParams }) {
  console.log(JSON.stringify(searchParams));
  const wantsMagicLink = searchParams.magicLink == "yes";  
  return <Login isPasswordLogin={!wantsMagicLink} />;
}



