import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ["Home", "Features", "Pricing", "Support"],
  },
];

const socialLinks: Social[] = [
  {
    imgsrc: "/images/footer/insta.svg",
    href: "https://instagram.com/chainguardng",
  },
  {
    imgsrc: "/images/footer/twitter.svg",
    href: "https://twitter.com/chainguardng",
  },
  {
    imgsrc: "/images/footer/youtube.svg",
    href: "https://youtube.com/@chainguardng",
  },
];

const Footer = () => {
  return (
    <footer className="bg-bodyBg relative py-10">
      <div className="bg-gradient-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/2 blur-390"></div>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10 pb-16">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className="col-span-6">
            <h1 className="text-2xl font-bold text-white">ChainGuard AI</h1>

            <h3 className="text-white/60 text-sm font-normal leading-9 mb-4 lg:mb-16">
              ChainGuard AI is pioneering digital protection for Africa. From
              fraud detection to transaction risk scoring, we ensure your crypto
              and digital assets are safe — powered by AI, tailored for Nigeria.
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <img
                    src={items.imgsrc}
                    alt={`icon-${i}`}
                    className="footer-icons"
                  />
                </Link>
              ))}
            </div>
          </div>

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white/60 text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            <h4 className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/footer/number.svg"}
                alt="number-icon"
                width={20}
                height={20}
              />
              +234 901 234 5678
            </h4>
            <h4 className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/footer/email.svg"}
                alt="email-icon"
                width={20}
                height={20}
              />
              support@chainguard.ai
            </h4>
            <h4 className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/footer/address.svg"}
                alt="address-icon"
                width={20}
                height={20}
              />
              5B Ademola Street, Victoria Island, Lagos, Nigeria
            </h4>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 border-t border-t-lightblue">
        <h3 className="text-center text-white">
          @2025 - All Rights Reserved by{" "}
          <Link
            href="https://chainguard.ai"
            target="_blank"
            className="hover:text-primary"
          >
            ChainGuard AI
          </Link>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
