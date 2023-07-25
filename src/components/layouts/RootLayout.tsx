import Header from "../general/Header"
import {Outlet} from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout
