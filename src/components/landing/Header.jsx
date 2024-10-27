import { Link } from "react-router-dom";

const Header = () => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Business Units", path: "/business-units" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Media Center", path: "/media-center" },
    { name: "Career", path: "/career" },
    { name: "Slider Page", path: "/slider-page" },
    { name: "Custom Slider", path: "/custom-slider" },
    { name: "Custom Card", path: "/custom-card" },
  ];

  return (
    <div className="z-[1000] absolute bg-transparent w-full">
      <nav className="w-full max-w-[1440px] h-[10%]">
        <ul className="flex space-x-6">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className=" text-yellow-400 hover:text-gray-300"
              >
                {" "}
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
