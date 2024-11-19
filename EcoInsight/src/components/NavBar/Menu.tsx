import classNames from "classnames";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

type MenuProps = {
  showDownload?: boolean;
  navClass?: string;
  buttonClass?: string;
  loggedInUser?: object;
};

const Menu = ({
  navClass,
  buttonClass,
  showDownload,
  loggedInUser,
}: MenuProps) => {
  return (
    <Nav as="ul" className={classNames("align-items-lg-center", navClass)}>
      <Nav.Item as="li">
        <NavLink
          to="/home"
          end
          className={classNames(
            "nav-link",
            ({ ...isActive }) => isActive && "active"
          )}
        >
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          to="/features"
          end
          className={classNames(
            "nav-link",
            ({ ...isActive }) => isActive && "active"
          )}
        >
          Recursos
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          to="/FAQs"
          end
          className={classNames(
            "nav-link",
            ({ ...isActive }) => isActive && "active"
          )}
        >
          FAQs
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          to="/Membros"
          end
          className={classNames(
            "nav-link",
            ({ ...isActive }) => isActive && "active"
          )}
        >
          Membros
        </NavLink>
      </Nav.Item>

      {showDownload && (
        <>
          {loggedInUser ? (
            <Nav.Item as="li">
              <NavLink
                to="/auth/logout"
                className="nav-link btn me-2 shadow-none"
              >
                Logout
              </NavLink>
            </Nav.Item>
          ) : (
            <Nav.Item as="li">
              <NavLink
                to="/auth/login"
                className="nav-link btn me-2 shadow-none"
              >
                Log In
              </NavLink>
            </Nav.Item>
          )}

          <Nav.Item as="li">
            <Link to="#" className={classNames("btn", buttonClass)}>
              Download
            </Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};

export default Menu;
