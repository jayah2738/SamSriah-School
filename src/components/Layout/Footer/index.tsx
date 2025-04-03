import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const footer = () => {
  return (
    <footer className="bg-gray-500 py-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-4 md:col-span-12 lg:col-span-4'>
            <Logo />
            <div className='flex items-center gap-4'>
              <Link href="https://facebook.com" className='hover:text-amber-500 text-black text-3xl'>
                <Icon
                  icon="tabler:brand-facebook"
                />
              </Link>
              <Link href="https://twitter.com" className='hover:text-amber-500 text-black text-3xl'>
                <Icon
                  icon="tabler:brand-twitter"
                />
              </Link>
              <Link href="https://instagram.com" className='hover:text-amber-500 text-black text-3xl'>
                <Icon
                  icon="tabler:brand-instagram"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Links</h3>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="mb-2 text-black/50 hover:text-amber-500 w-fit">
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Other</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-amber-500 w-fit">
                <Link href="#">
                  About Us
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-amber-500 w-fit">
                <Link href="#">
                  Register
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-amber-500 w-fit">
                <Link href="#">
                  Extracuricular
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-amber-500 w-fit">
                <Link href="#">
                  Services
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-amber-500 w-fit">
                <Link href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:brand-google-maps"
                className="text-amber-500 text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">Talatamaty, ivato Street Hotel Paond'or</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:phone"
                className="text-amber-500 text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">+261 38 855 28</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:folder"
                className="text-amber-500 text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">samsriahschool01@gmail.com</h5>
            </div>
          </div>
        </div>

        <div className='mt-10 lg:flex items-center justify-between'>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>This website is made by <Link href="https://HolyDev.com" target="_blank" className="hover:text-green-500 text-amber-500"> wwww.HolyDev.com</Link></h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <Link href="/privacy" target="_blank" className='text-black/50 text-sm font-normal hover:text-amber-500'>Privacy policy</Link>
            <Link href="/termConditions" target="_blank" className='text-black/50 text-sm font-normal hover:text-amber-500'>Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;
