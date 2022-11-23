import { Logo } from "./Icons";

export function Header() {
  return (
    <header className="py-4 max-w-[1500px] mx-auto px-6 lg:px-20">
      <div className="sm:w-[120px] sm:h-[54px] w-[72px] h-[32px] flex items-center">
        <Logo />
      </div>
    </header>
  );
}
