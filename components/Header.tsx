import { Logo } from "./Icons";

export function Header() {
  return (
    <header className="py-4">
      <div className="sm:w-[120px] sm:h-[54px] w-[72px] h-[32px] flex items-center">
        <Logo />
      </div>
    </header>
  );
}
