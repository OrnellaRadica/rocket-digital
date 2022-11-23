import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, PaymentIcon, YoutubeIcon } from "./Icons";

export function Footer() {
  return (
    <section id="footer" className="w-full py-16 bg-[#111111] text-white">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-20">
        <Image
          src="/images/logo-footer.png"
          alt="logo footer"
          width={44}
          height={38}
        />
        <div className="sm:flex sm:flex-wrap sm:justify-between sm:gap-8">
          <div className="max-w-[380px] mb-12 lg:mb-0">
            <h4 className="text-[22px] leading-[28px] font-bold mb-[6px]">
              Sobre KIBUS
            </h4>
            <span className="text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </span>
          </div>

          <div className="text-base leading-6 mb-12 lg:mb-0">
            <h4 className="text-[22px] leading-[28px] font-bold mb-[6px]">
              Políticas
            </h4>
            <div className="flex flex-col gap-4 min-w-[164px]">
              <Link href="/" className="">
                Políticas de Privacidad
              </Link>
              <Link href="/" className="">
                Condiciones de uso
              </Link>
              <Link href="/" className="">
                Cookies
              </Link>
              <Link href="/" className="">
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex gap-10 mb-12 lg:mb-0">
            <Link href="/">
              <FacebookIcon />
            </Link>
            <Link href="/">
              <InstagramIcon />
            </Link>
            <Link href="/">
              <YoutubeIcon />
            </Link>
          </div>
          <div>
            <h4 className="text-[22px] leading-[28px] font-bold mb-[6px]">
              Métodos de Pago
            </h4>
            <PaymentIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
