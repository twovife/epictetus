import React from "react";
import InfoPost from "./InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className="flex flex-col gap-4">
      <img src={thumbnail} className="w-full rounded" />
      <InfoPost {...infoPost} />
    </article>
  );
}
