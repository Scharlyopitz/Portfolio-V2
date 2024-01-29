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
      <div className="error-container">
        <h1 className="error">
          <p className="big">404</p> <br /> THIS PAGE doesn't exist !
        </h1>
        <NavLink to={base} onClick={() => setErrorOff(true)}>
          Home Page
        </NavLink>
      </div>
    </>
  );
}
