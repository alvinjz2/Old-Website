import React from "react";
const linkedin_link = "https://www.linkedin.com/in/alvinjz2/";
const image_path = require("./media/GitHubIcon.png");

export default function LinkedInIcon() {
  return (
    <div class="pb-10 pt-8 place-items-center">
      <a href={linkedin_link}>
        <button class="text-xl w-14 h-[52px] bg-zinc-200 py-3 px-6 drop-shadow-lg rounded-full hover:bg-indigo-100 ease-in-out transition duration-500">
          {/* <img class="" src={image_path} alt="GitHub Profile"></img> */}
          LinkedIn
        </button>
      </a>
    </div>
  );
}
