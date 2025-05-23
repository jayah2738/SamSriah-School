import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo2.png"
        alt="logo"
        width={200}
        height={50}
        // style={{ width: "auto", height: "auto" }}
        quality={100}
        className="xl:w-auto xl:h-auto w-60"
      />
    </Link>
  );
};

export default Logo;
