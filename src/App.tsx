import { Link, Route, Routes } from "react-router-dom";
import AddPassword from "./pages/AddPassword";
import Passwords from "./pages/Passwords";

function App() {
  return (
    <div className="relative h-full flex flex-col items-center pt-[120px] overflow-auto">
      <header className="z-10 bg-white w-full flex justify-between items-center border-b border-slate-100 fixed left-0 top-0 p-6">
        <h1 className="text-2xl font-bold mb-4">Password Manager</h1>
        <nav>
          <ul className="flex">
            <li>
              <Link className="py-1 px-2 ml-1" to="/">
                My Passwords
              </Link>
            </li>
            <li>
              <Link className="py-1 px-2 ml-1" to="/add-password">
                Add Password
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Passwords />} />
        <Route path="/add-password" element={<AddPassword />} />
      </Routes>
    </div>
  );
}

export default App;
