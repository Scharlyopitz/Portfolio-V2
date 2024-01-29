import TitlePage from "../components/General/TitlePage";

import { NavLink } from "react-router-dom";

import { useEffect } from "react";

export default function Error({ base, setErrorOff }) {
  const ErrorPage = "Error 404 !";

  const numbers404 = "404".split("");

  useEffect(() => {
    setErrorOff(false);
  }, []);

  return (
    <>
      <TitlePage title={ErrorPage} />
      <div className="error-container">
        <h1 className="error">
          <div className="big404">
            {numbers404.map((number404, idx) => {
              return <p key={idx}>{number404}</p>;
            })}
          </div>
          <br /> Oops, This Page Not Found!
        </h1>
        <NavLink to={base} onClick={() => setErrorOff(true)}>
          Home Page
        </NavLink>
      </div>
    </>
  );
}
