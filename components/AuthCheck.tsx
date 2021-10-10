import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '@lib/context'

interface AuthCheckProps {
  children
  fallback?: JSX.Element
}

// Component's children only shown to logged-in users
export default function AuthCheck({
  children,
  fallback,
}: AuthCheckProps): JSX.Element {
  const { username } = useContext(UserContext)

  if (username) {
    return children
  }

  return fallback || <Link href="/login">You must be signed in</Link>
}
