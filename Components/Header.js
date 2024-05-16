import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav
        class="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"  to="/contact">Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Faculty">Faculty</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Counter">Counter</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Form">Form</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/MockAPI">MockAPI</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;