import Link from "next/link"
import { NavList } from "../../data"
import Image from "next/image"
import CustomButton from "@/components/shared/buttons/CustomButton"

const DesktopNavbar = () => {
  return (
    <div className="bg-primary hidden md:block ">
        <nav className="container flex1 py-3">
            <Link href="/">
                {/* <span className="">Finweet</span> */}
                <Image src="/assests/images/home/Logo.svg" alt="Logo" width={140} height={29} />
            </Link>
            <div className="gap-8">
                <ul className="flex1 gap-6">
                    {NavList.map(
                        (item) => (
                            <li key={item.id} className={`text-white text-base font-normal`}>
                                <Link href={item.href}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    )}
                    <div>
                       <CustomButton title="Subscribe" />
                    </div>
                    
                </ul>
                
            </div>
        </nav>
    </div>
  )
}

export default DesktopNavbar