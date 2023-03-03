import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../containers/Features";
import Footer from "../components/Footer";

const HomePage = () => {
    
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;