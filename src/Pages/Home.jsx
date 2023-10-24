import AboutMe from "../components/Home/AboutMe";
import FirstName from "../components/Home/FirstName";
import Name from "../components/Home/Name";

export default function Home() {
    return (
        <>
            <section id="home">
                <div className="text-container">
                    <Name />
                    <FirstName />
                </div>

                <AboutMe />
            </section>
        </>
    );
}
