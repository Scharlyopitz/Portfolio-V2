import TitlePage from "../components/General/TitlePage";

import { NavLink } from "react-router-dom";

import { useEffect } from "react";

export default function Error({ base, setErrorOff }) {
  const ErrorPage = "Error 404 !";

  useEffect(() => {
    setErrorOff(false);
  }, []);

  return (
    <>
      <TitlePage title={ErrorPage} />
      <h1 className="error">Error 404 THIS PAGE doesn't exist !</h1>
      <NavLink to={base} onClick={() => setErrorOff(true)}>
        Come back home
      </NavLink>
    </>
  );
}
