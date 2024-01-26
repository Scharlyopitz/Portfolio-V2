import TitlePage from "../components/General/TitlePage";

import { NavLink } from "react-router-dom";

export default function Error({ base }) {
  const ErrorPage = "Error 404 !";

  return (
    <>
      <TitlePage title={ErrorPage} />
      <h1 className="error">Error 404 THIS PAGE doesn't exist !</h1>
      <NavLink to={base}>Come back home</NavLink>
    </>
  );
}
