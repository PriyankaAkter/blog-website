import { contactDetailsData } from "./contactData"

const ContactDetails = () => {
  return (
    <div className="container flex justify-center items-center">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-[764px] bg-theme-purple py-8 px-10 lg:py-12 lg:px-16 text-white">
        {
            contactDetailsData.map((item,index)=>(
              <div className="w-full lg:w-72">
                <p className="mb-4 opacity-60">{item.title}</p>
                <hr className="mb-4 opacity-60" />
                <span className="font-sens text-5 font-bold inline-block">{item.subTitle}</span>
                <p className="opacity-60">{item.description}</p>
              </div>
            ))
        }
        </div>
      </div>
  )
}

export default ContactDetails