import AppLogo from "./AppLogo";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="flex justify-between p-6 rounded-4xl mb-14 items-center bg-neutral-50 dark:bg-neutral-800">
      <AppLogo />
      <ThemeToggle />
    </div>
  );
}

export default Header;
