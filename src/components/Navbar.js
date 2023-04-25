import { HStack, Flex, Text } from "@chakra-ui/react";
import logo from "../images/logo.jpg";
import github from "../images/githubpng.png";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const [nav, setNav] = useState(false)
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleNav = () => {
        setNav(!nav)
    };

    const handleSignOut = async () => {
        try {
          await logout();
          navigate('/');
        } catch (e) {
          console.log(e.message);
        }
      };
  return (
    <Flex
      className="nav-flex"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Flex gap={"0.5em"} alignItems="center">
        <img src={logo} alt="Logo" className="logo-img" />
        <Text color={"blue"} fontSize={"1.25rem"} fontWeight="bold">
          CPshack
        </Text>
      </Flex>
      <HStack className="nav-list" gap="2em">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contests">Contests</Link>
        </li>
        <li>
          <Link to="/problems">Problems</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/roadmap">Roadmaps</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div>
        </div>
      </HStack>
      <Flex gap={"1em"}>
        <a href="https://github.com/yashshekhar01" target="blank">
          <img src={github} alt="Github" className="github-logo" />
        </a>
        {/* <a href="" target="blank">
          <img src={} alt="" className="github-logo" />
        </a> */}
      </Flex>

      {user?.email ? (
          <div>
          <Link to='/account' className='p-5'>
            Account
          </Link>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
       ) : (
        <div class='hidden md:block'>
        <Link to='/signin' class='p-3 hover:text-accent'>Log In</Link>
        <Link to='/signup' class='bg-button text-btnText px-7 py-3 ml-2 rounded-3xl shadow-lg hover:shadow-2xl'>Sign Up</Link>
    </div>
       )}

        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className={nav ? 'md:hidden fixed left-2 top-24 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' 
        : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }>
            <ul className='w-full p-5'>
                <li onClick={handleNav} className='border-b py-7'>
                    <Link to='/'>Home</Link>
                </li>
                <li onClick={handleNav} className='border-b py-7'>
                    <Link to='/account'>Account</Link>
                </li>
            </ul>
            <div className='flex flex-col w-full p-5'>
                <Link to='/signin'>
                  <button onClick={handleNav} className='w-full my-3 p-4 bg-primary text-primary border border-secondary rounded-3xl shadow-xl'>Sign In</button>
                </Link>
                <Link onClick={handleNav} to='/signup'>
                  <button className='w-full my-3 p-4 bg-button text-btmText rounded-3xl shadow-xl'>Sign Up</button>
                </Link>
            </div>
        </div>
    </Flex>
  );
};

export default Navbar;
