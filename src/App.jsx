import AnimatedRoutes from "./Pages/AnimatedRoutes";
import Contact from "./components/General/Contact";
import Nav from "./components/General/Nav";

import { useEffect } from "react";

function App() {
  const base = "/Portfolio-V2/";

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <>
      <Nav base={base} />
      <AnimatedRoutes base={base} />
      <Contact />
    </>
  );
}

export default App;
