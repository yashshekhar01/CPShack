import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="flex-wrapper">
      <div className="about">
        <ul className="h2-about-title list-disc">
          Trusted DSA Courses
          <li className="cses no-underline">
            Coding Ninjas (By Ankush Singla){" "}
            <p className="cses-content">
              This is the course to pick if you are just getting into coding and
              want to build a strong foundation. Widely used in competitive
              programming.
              <br />
            </p>
            <div className="space-x-[15px]">
            <a
              href="https://www.codingninjas.com/courses/c-plus-plus-data-structures-and-algorithms"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Click here!
            </a>
            <a href="/contact" 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Review!
            </a>
            </div>
          </li>
          <li className="cses no-underline">
            GFG DSA Course (By Sandeep Jain){" "}
            <p className="cses-content">
              Most popular course on DSA trusted by over 1,00,000+ students!
              Built with years of experience by industry experts the course
              gives you a complete package of video lectures, practice problems,
              quizzes, discussion forums, and contests.
              <br />
            </p>
            <div className="space-x-[15px]">
            <a
              href="https://practice.geeksforgeeks.org/courses/dsa-self-paced?source=google"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Click here!
            </a>
            <a href="/contact" 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Review!
            </a>
            </div>
          </li>
          <li className="cses no-underline">
            Udemy DSA Course (By Abdul Bari){" "}
            <p className="cses-content">
              This 53 hours of course covers each topic in greater details,
              every topic is covered on Whiteboard which will improve your
              Problem Solving and Analytical Skills. Every Data Structure is
              discussed, analysed and implemented with a Practical line-by-line
              coding.
              <br />
            </p>
            <div className="space-x-[15px]">
            <a
              href="https://www.udemy.com/course/data-structures-for-beginners-c-plusplus/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_82569850245_._ad_533220805577_._kw__._de_c_._dm__._pl__._ti_aud-669140681723:dsa-406594358574_._li_1007826_._pd__._&matchtype=&gclid=Cj0KCQjwlPWgBhDHARIsAH2xdNeexmoBrdIP6Kceo6A6J3myYhaeVYSfCExPB3oka8dCWSvmwc6dmX0aAkoqEALw_wcB"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Click here!
            </a>
            <a href="/contact" 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Review!
            </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Courses;
