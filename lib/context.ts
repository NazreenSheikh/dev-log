import { createContext } from 'react'
import firebase from "firebase/app"

export const UserContext = createContext<{ user: firebase.User | null, username: string }>({
  user: {} as firebase.User,
  username: '',
})
