import TitlePage from "../components/General/TitlePage";
import AboutMe from "../components/Home/AboutMe";
import FirstName from "../components/Home/FirstName";
import Name from "../components/Home/Name";

export default function Home({ BasicTitle }) {
    return (
        <>
            <TitlePage title={BasicTitle} />
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
