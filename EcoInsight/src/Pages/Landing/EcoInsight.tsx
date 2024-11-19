import NavbarMenu from "../../components/NavBar/index";

const EcoInsight = () => {
  return (
    <>
      <div className="header-2 primary">
        <NavbarMenu
          navClass="navbar-light zindex-10"
          isSticky={false}
          fixedWidth
          hideSearch
          buttonClass="btn-primary btn-sm"
        />
      </div>
    </>
  );
};

export default EcoInsight;
