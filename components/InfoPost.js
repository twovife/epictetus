export default function InfoPost({ category, date, title, shortDesc, authorAva, authorName, authorJob }) {
  return (
    <>
      <div className="text-sm flex gap-4">
        <a href="#" className="hover:underline focus:underline uppercase">
          {category}
        </a>
        <a href="#" className="flex gap-2 hover:underline focus:underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          {date}
        </a>
      </div>
      <h3 className="text-2xl tracking-wider mr-2">{title}</h3>
      <p className="text-left text-white/60 lg:w-3/4">{shortDesc}</p>
      <div className="flex items-center gap-4">
        <img src={authorAva} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <h1>{authorName}</h1>
          <p className="text-white/40 text-sm">{authorJob}</p>
        </div>
      </div>
    </>
  );
}
