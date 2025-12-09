import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="h-15 flex justify-start items-center bg-black px-6 fixed top-0 left-0 w-full z-100 "> 
        <div className="flex gap-6 items items-center">
          <Image
          src="/logo.png"
          alt="logo"
          width={500}
          height={500}
          className="w-9 h-9"
          />
          <Link href="/" className="bg-background w-11 h-11 grid place-items-center text-white text-3xl rounded-full">
            <MdHomeFilled  />
          </Link>
          <div className="bg-background flex items-center h-11 w-90 px-3 gap-3 text-primary-text rounded-full">
            <GoSearch/>
            <input type="search" placeholder="what do you want to play ?"/>
          </div>
        </div>
      </nav>
    </div>
  );
}
