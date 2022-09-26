import React from "react";
import InfoPost from "./InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="relative lg:w-2/3">
          <img src="/featured.png" className="rounded-lg" />
          <div className="bg-gradient-to-t from-black to-transparent opacity-60 w-full h-full absolute top-0 rounded-lg"></div>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/3">
          <InfoPost
            category="Ui Design"
            date="July 2022"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDesc="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAva="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  );
}
