import './TheHeader.scss';
function TheHeader() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h4 className="title is-4">Appius.io</h4>
        </a>

        <a role="button" className="navbar-burger" href="/" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  )
}

export default TheHeader;