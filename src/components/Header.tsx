import logo from "../assets/brand-logo.png";

import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <nav className="flex items-center justify-between">
        <img
            src={logo}
            alt="the logo image"
            className="w-[70px] dark:filter dark:invert"
        />
        <ThemeSwitcher />

    </nav>
  );
}

export default Header;
