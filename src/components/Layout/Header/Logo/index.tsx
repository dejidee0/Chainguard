import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold text-white">ChainGuard AI</h1>
    </Link>
  );
};

export default Logo;
