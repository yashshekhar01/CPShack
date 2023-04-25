import React from "react";

const Roadmaps = () => {
  return (
    <div className="flex-wrapper">
      <div className="about">
        <ul className="h2-about-title list-disc">
          Blueprints
          <li className="cses no-underline">
            Execution plan(map) - CP{" "}
            <p className="cses-content">
              You can start with any language Java, Python, C++ anything that
              suits you but also looks for the code lengths and memory usages of
              each before moving forward with a particular language as it hugely
              affects your performance time in contests.
              <br />
            </p>
            <div className="space-x-[15px]">
            <a
              href="https://whimsical.com/codeforces-candidate-master-roadmap-by-love-babbar-CiXPPD3CnwoXPr2d8Ajx1h"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Click here!
            </a>
            <a href="/contact" 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Suggestions?
            </a>
            </div>
          </li>
          <li className="cses no-underline">
            Dream Placement - (Strategy){" "}
            <p className="cses-content">
              Analysed the Company specific questions from geeks for geeks
              company prep section , to rate importance & order of topics.
              Practice Practice Practice. It was literally the only mantra. Read
              Articles from geeks for geeks and tried to solve as many questions
              I can .
              <br />
            </p>
            <div className="space-x-[15px]">
            <a
              href="https://whimsical.com/4th-year-roadmap-to-dream-placement-WB2HTZixtsohXoDcvr6Me7"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Click here!
            </a>
            <a href="/contact" 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Suggestions?
            </a>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Roadmaps;
