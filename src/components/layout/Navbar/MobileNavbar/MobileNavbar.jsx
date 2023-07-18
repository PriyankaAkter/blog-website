'use client'
import Link from "next/link"
import { NavList } from "../../data"
import Image from "next/image"
import CustomButton from "@/components/shared/buttons/CustomButton"
import {BiMenu, BiX} from "react-icons/bi"
import clsx from "clsx"
import { useState } from "react"
const MobileNavbar = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className=" bg-primary md:hidden py-10" >
      <nav className="grid grid-cols-1 container ">
        <div className="flex justify-between"> 
        <div>
            <Image src="/assests/images/home/Logo.svg" alt="Logo" width={140} height={29} />
        </div>
        <div onClick={(()=>{setOpen(!open)})}>
           {open?<BiX className="w-8 h-8 text-white" />:<BiMenu className="w-8 h-8 text-white" />}
        </div>
    </div>
        
        <div className={clsx("py-32 h-screen",open?"block":"hidden")}>
                <ul className="flex flex-col items-center gap-10">
                    {NavList.map(
                        (item) => (
                            <li onClick={(()=>{setOpen(false)})} key={item.id} className={`text-white text-xl font-normal`}>
                                <Link href={item.href}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    )}
                    <div >
                       <CustomButton title="Subscribe"  />
                    </div>
                    
                </ul>
                
            </div>
        </nav>
    </div>
  )
}

export default MobileNavbar