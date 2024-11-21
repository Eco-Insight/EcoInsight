import BackToTop from "../../components/BackToTop/BackToTop";
import NavbarMenu from "../../components/NavBar/index";
import { features } from "./data";
import Features from "./Features";
import Features2 from "./Features2";
import Features3 from "./Features3";

const EcoInsight = () => {
  return (
    <>
      <div className="header-2 primary">
        <NavbarMenu
          navClass="navbar-light zindex-10"
          isSticky={false}
          fixedWidth
          hideSearch
          buttonClass="btn-success btn-sm"
        />
      </div>

      <Features
        features={features}
        containerClass="position-relative overflow-hidden pt-lg-6 py-4 pb-lg-7"
      />

      <Features2 />

      <Features3 />

      <BackToTop />
    </>
  );
};

export default EcoInsight;
