import { MenuItems } from "../types"

type MenuItemProps = {
    item: MenuItems
}

export default function MenuItem( { item } : MenuItemProps ) {
  return (
    <button 
        className="border-2 w-full p-3 flex justify-between border-violet-700 hover:shadow-cartoon hover:-translate-y-3 hover:-translate-x-1 transition-all"
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
