function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-home" href="/">Home</a>
        <a className="navbar-profile" href="/profile">My Profile</a>
        <a className="navbar-messages" href="/messages">Social</a>
        <a className="navbar-friends" href="/users">Peeps</a>
        <a className="navbar-discover" href="/music">Discover</a>
      </nav>
    </div>
  )
}

export default NavBar;