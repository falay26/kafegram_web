import { useEffect } from "react";
//Components
import SidebarItem from "./SidebarItem";
//Hooks
import useAuth from "../../hooks/useAuth";
//Constants
import Roles from "../../constants/Roles";

const Sidebar = ({ open, setOpen }) => {
  const { auth } = useAuth();

  useEffect(() => {
    if (open) {
      document.querySelector("#sidebar").classList.add("open");
      document.querySelector("#hamburger-1").classList.add("is-active");
    } else {
      document.querySelector("#sidebar").classList.remove("open");
      document.querySelector("#hamburger-1").classList.remove("is-active");
    }
  }, [open]);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const adminLinks = [
    {
      title: "Kafe Oluştur",
      link: "new_cafe",
    },
  ];

  const kafeLinks = [
    {
      title: "Ana Sayfa",
      link: "home",
    },
  ];

  return (
    <div className="sidebar_container" id="sidebar">
      <h1 className="sidebar_title">Kafegram</h1>
      <div className="hamburger" id="hamburger-1" onClick={handleClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="sidebar_items_contaier">
        {auth.roles.includes(Roles.Admin)
          ? adminLinks.map((item) => (
              <SidebarItem item={item} key={item.title} />
            ))
          : null}
        {auth.roles.includes(Roles.Kafe)
          ? kafeLinks.map((item) => (
              <SidebarItem item={item} key={item.title} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Sidebar;
