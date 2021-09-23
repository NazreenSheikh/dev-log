import Link from 'next/link'
import  Image  from 'next/image';

const Navbar=()=>{
    const user={}
    const username:(string|null)=null

    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">
              <button className="btn-blue">FEED</button>
            </Link>
          </li>
          {username ? (
            <>
              <li className="push-left">
                <Link href="/signout">
                  <button className="btn-blue">Sign out</button>
                </Link>
              </li>
              <li>
                <Link href="/post">
                  <button className="btn-blue">Post blog</button>
                </Link>
              </li>
              <li>
                <Link href={`/${username}`}>
                  <Image src={'/hacker.png'} alt="user profile" />
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/enter">
                <button className="btn-blue">Sign Up</button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    )
}

export default Navbar;