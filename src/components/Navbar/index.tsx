import { PersonOutline } from "react-ionicons"

const Navbar = () => {
  return (
    <div className="md:w-[calc(100%)-230px] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#ffff]">
      <div className="flex items-center gap-3 cursor-pointer">
        <PersonOutline/>
      </div>
    </div>
  )
}

export default Navbar