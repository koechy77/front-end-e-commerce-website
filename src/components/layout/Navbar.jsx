import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "../../context/CartContext";
import Input from "../ui/Input";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>

      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-gray-200">

        {/* mobile view */}
        <nav className="grid gap-4 md:hidden">

          {/* Row 1 */}
          <div className="grid grid-cols-2 items-center mx-4 my-2">
            <h2 className="text-4xl font-extrabold text-orange-600"><i>CHmart</i></h2>

            <Input />
          </div>

          {/* Row 2 */}
          <ul className="flex justify-around items-center my-2">

            <li>
              <NavLink to="/" className={({ isActive }) => `px-3 py-1 rounded transition-colors
  ${isActive ? 'text-blue-700 font-extrabold focus:bg-blue-500 focus:text-white shadow-lg'
                  : 'text-black font-semibold'}`}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({ isActive }) => `px-3 py-1 rounded transition-colors
  ${isActive ? 'text-blue-700 font-extrabold focus:bg-blue-500 focus:text-white shadow-lg'
                  : 'text-black font-semibold'}`}>
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/cart" className="text-2xl flex items-center gap-1">
                {({ isActive }) => (
                  <>
                    <GiShoppingCart className={isActive ? 'text-blue-700 font-extrabold shadow-lg'
                      : 'text-black font-extrabold'}
                    />
                    <p className="text-orange-500 text-lg ">({totalItems})</p>
                  </>

                )}
              </NavLink>
            </li>

            

          </ul>

        </nav>

        {/* Desktop */}
        <nav className=" hidden md:grid grid-cols-2 my-4 h-10">

          <ul className="flex items-center gap-7 justify-center">

            <li>
              <NavLink to="/">
                <h2 className="text-4xl font-extrabold text-orange-600"><i>CHmart</i></h2>
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className={({ isActive }) => `px-3 py-1 rounded transition-colors
  ${isActive ? 'text-blue-700 font-extrabold focus:bg-blue-500 focus:text-white shadow-lg'
                  : 'text-black hover:shadow-xl hover:text-blue-500 font-semibold'}`} >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({ isActive }) => `px-3 py-1 rounded transition-colors
             ${isActive ? 'text-blue-700 font-extrabold focus:bg-blue-500 shadow-lg focus:text-white'
                  : 'text-black  hover:shadow-xl hover:text-blue-500 font-semibold'}`}>
                Products
              </NavLink>
            </li>

          </ul>

          <ul className="flex items-center gap-7 justify-end mx-7">

            <Input />

            <li>
              <NavLink to="/cart" className="text-2xl flex items-center gap-1">
                {({ isActive }) => (
                  <>
                    <GiShoppingCart className={isActive ? 'text-blue-700 font-extrabold shadow-lg'
                      : 'text-black hover:shadow-xl hover:text-blue-500 hover:scale-200 transition-transform font-extrabold'}
                    />
                    <p className="text-orange-500 text-lg ">({totalItems})</p>
                  </>

                )}
              </NavLink>
            </li>

            

          </ul>

        </nav>

      </header>

    </>
  );
}
