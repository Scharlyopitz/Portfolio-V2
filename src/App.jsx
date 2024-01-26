import AnimatedRoutes from "./Pages/AnimatedRoutes";
import Contact from "./components/General/Contact";
import Nav from "./components/General/Nav";

import { useEffect } from "react";

import { useState } from "react";

function App() {
  const base = "/Portfolio-V2/";

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  const [errorOff, setErrorOff] = useState(true);

  return (
    <>
      {errorOff && <Nav base={base} />}
      <AnimatedRoutes base={base} setErrorOff={setErrorOff} />
      {errorOff && <Contact />}
    </>
  );
}

export default App;
