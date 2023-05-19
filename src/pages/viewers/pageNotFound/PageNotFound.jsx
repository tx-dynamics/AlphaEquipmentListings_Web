import React from "react";

import "./pageNotFound.css";
import { notFound } from "../../../assets/icons";

export default function PageNotFound() {
  return (
    <div className="alpha_page_not_found_container">
      <img src={notFound} />
      <h1>The page you are looking for doesn't exist or you are not login</h1>
    </div>
  );
}
