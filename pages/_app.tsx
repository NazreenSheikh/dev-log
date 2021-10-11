import '../styles/globals.css'
import Navbar from '../components/Navbar';
import {Toaster} from 'react-hot-toast';
import {UserContext} from "../lib/context";
import { useUserData } from '../lib/useAuthState';

function MyApp({ Component, pageProps }) {
  const{user, username}=useUserData()
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
    console.log("hiiiiiiiiiiiii")
  return (<>
  <UserContext.Provider value={{user, username}}>
    <Navbar/>
      <Toaster/>
      <Component {...pageProps} />
  </UserContext.Provider>
    </>)

}

export default MyApp
