import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";

export default function Layout({children}){
    return(
        <>
           <Header/>
           <main>
              { children }
           </main>
           <Footer/>
        </>
    )
}