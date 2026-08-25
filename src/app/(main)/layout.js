import Banner from "@/Components/shared/Banner";
import Footer from "@/Components/shared/Footer";
import Navber from "@/Components/shared/Navber";
import React from "react";


const mainSectionLayoutPage = ({children}) => {
    return(
        <div className="min-h-screen flex flex-col">
 <Navber></Navber>
          <main className="flex-1">
          {children}
          </main>

          <Footer></Footer>
        </div>
    )
}
export default mainSectionLayoutPage;