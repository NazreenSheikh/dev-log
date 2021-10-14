import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from "../lib/context";
import { useUserData } from '../lib/useAuthState';

function MyApp({ Component, pageProps }) {
  const { user, username } = useUserData()

  return (<>
    <UserContext.Provider value={{ user, username }}>
      <Navbar />
      <Toaster />
      <Component {...pageProps} />
    </UserContext.Provider>
  </>)

}

export default MyApp
