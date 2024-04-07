import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"



function App() {

  const { order, tip, setTip, addItem, removeItem } = useOrder();

  return (
    <>
      <header className="bg-violet-700 py-5">
        <h1 className="text-center text-4xl font-bold text-white">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-5 mt-10">
            {menuItems.map( item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
            order={order} 
            removeItem={removeItem}
          />

          <TipPercentageForm
            setTip={setTip}
          />

          <OrderTotal
            order={order}
            tip={tip}
           />


        </div>

      </main>
    </>
  )
}

export default App
