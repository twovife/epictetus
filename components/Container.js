import React, { Children } from "react";

export default function Container({ children }) {
  return <div className="max-w-[1080px] px-6 lg:px-0 mx-auto relative">{children}</div>;
}
