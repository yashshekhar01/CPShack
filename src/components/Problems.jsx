import React from "react";

const Resources = () => {
  return (
    <div className="flex-wrapper">
      <div className="about">
        <ul className="h2-about-title list-disc">
          Problem Sets
          <li className="cses no-underline">
            CSES Problem Set (By Mikko Sysikaski){" "}
            <p className="cses-content">
              The CSES Problem Set is a collection of algorithmic programming
              problems used by Competitive Programmers to crack world level
              programming contests like ACM-ICPC, Google Code Jam,and many more.
              <br />
            </p>
            <a
              href="https://cses.fi/problemset/"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Click here!
            </a>
          </li>
          <li className="cses no-underline">
            Striver's SDE Sheet (By Raj Vikramaditya){" "}
            <p className="cses-content">
              SDE sheet by striver is very helpful for students who have at
              least some experience in DSA and looking for a quick list of
              important questions. Striver is himself in IT field, working as a
              software engineer and hence has immense knowledge of this field.
              <br />
            </p>
            <a
              href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Click here!
            </a>
          </li>
          <li className="cses no-underline">
            450 DSA Cracker Sheet (By Love Babbar){" "}
            <p className="cses-content">
              “450 DSA Cracker Sheet” is a curated list of 450 topic wise
              questions to build your confidence in Data Structures and
              Algorithms and prepare yourself for placements. The questions are
              from various DS Algo topics like Array, Strings, Graph, Trees,
              Linkedlist, Stack and queue, Heap, BST, DP etc.
              <br />
            </p>
            <a
              href="https://drive.google.com/file/d/16klXjFccZx3NMEh8MhdSjxLRzP6zonJZ/view?usp=sharing"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Click here!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
