import { MenuItems } from "../types"

type MenuItemProps = {
    item: MenuItems,
    addItem: ( item: MenuItems ) => void
}

export default function MenuItem( { item, addItem } : MenuItemProps ) {
  return (
    <button
        onClick={() => addItem( item )} 
        className="border-2 w-full p-3 flex justify-between border-violet-700 hover:shadow-cartoon hover:-translate-y-3 hover:-translate-x-1 transition-all"
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
