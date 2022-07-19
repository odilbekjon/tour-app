import Header from "../containers/Header";
import Footer from "../containers/Footer";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}