import { useEffect } from "react";

export default function TitlePage({ title, ErrorPage }) {
  ErrorPage && console.log("ok");

  useEffect(() => {
    document.title = `${title}`;
  }, []);
}
