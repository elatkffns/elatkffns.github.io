import { useRouteError } from "react-router-dom";
import React from "react";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
