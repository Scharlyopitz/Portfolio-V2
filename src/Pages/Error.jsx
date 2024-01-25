import TitlePage from "../components/General/TitlePage";

export default function Error() {
  const ErrorPage = "Error 404 !";

  return (
    <>
      <TitlePage title={ErrorPage} />
      <h1 className="error">Error 404 THIS PAGE doesn't exist !</h1>
    </>
  );
}
