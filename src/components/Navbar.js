import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaMicrophone, FaBell, FaChevronDown, FaUserCircle, FaBars } from 'react-icons/fa';
import { MdFileUpload, MdFileDownload, MdChat, MdBook, MdLibraryBooks } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(12, 12, 12, 0.507);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  z-index: 100;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
//   font-weight: bold;
  color: #fff;
`;

const HamburgerIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    left: 40px;
    top: 60px;
    left: 0;
    width: 100%;
    
    border-radius: 0 0 18px 18px;
    background-color: #1A4870;
    backdrop-filter: blur(20px);
    padding: 20px;
  }
`;

const MenuItem = styled.li`
  position: relative;
  margin-left: 20px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #f75c7e;
    }
  }

   svg {
   font-size: 1.6rem;
    margin-left: 10px;
    padding-top: 10px;
    
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #f75c7e;
    }
  }


  &:hover > ul {
    display: block;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    
  }
`;

const Dropdown = styled.ul`
  display: none;
  position: absolute;
  top: 40px;
  left: -50px;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(105px);
  padding: 10px 0;
  border-radius: 8px;
  list-style: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    padding: 0;
    left: 3px;
     background: #295F98;
  }
`;

const DropdownItem = styled.li`
  a {
    display: block;
    width: 200px;
    
    padding: 10px 20px;
    color: #fff;
    font-size: 1rem;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: rgba(247, 92, 126, 0.2);
    }
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 5px 10px;
  color: #fff;

  input {
    background: none;
    border: none;
    color: #fff;
    outline: none;
    font-size: 1rem;
    margin-right: 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  svg {
  
    margin-left: 10px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #f75c7e;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


// Highlighted changes for larger icons
const NotificationIcon = styled(FaBell)`
  font-size: 1.8rem; /* Increased size */
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f75c7e;
  }

  @media (max-width: 768px) {
    font-size: 2rem; /* Larger size on small screens */
  }
`;

const ProfileIcon = styled(FaUserCircle)`
  font-size: 1.8rem; /* Increased size */
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f75c7e;
  }

  @media (max-width: 768px) {
    font-size: 2rem; /* Larger size on small screens */
  }
`;



const ProfileDropdownContainer = styled.div`
  position: relative;
  

  &:hover > ul {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileMenu = styled.ul`
  display: none;
  position: absolute;
  right: 0;
  top: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 10px 0;
  border-radius: 8px;
  list-style: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  min-width: 200px;
`;

const ProfileItem = styled.li`
  a {
    display: block;
    padding: 10px 20px;
    color: #fff;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(247, 92, 126, 0.2);
    }
  }
`;

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <Logo className="rubik-glitch-pop-regular"><a href='/'>Collegia.</a> </Logo>

      <HamburgerIcon onClick={toggleMenu}>
        <FaBars />
      </HamburgerIcon>

      <Menu open={menuOpen}>
        <MenuItem >
          <a href="#features" >Features <FaChevronDown /></a>
          <Dropdown>
            <DropdownItem><a href="StudentSocial">Social Network</a></DropdownItem>
            <DropdownItem><a href="CampusJobBoard">Job/Internship Board</a></DropdownItem>
            <DropdownItem><a href="EventManagement">Event Management</a></DropdownItem>
            <DropdownItem><a href="StudentBudgeting">Student Budgeting</a></DropdownItem>
            <DropdownItem><a href="ResearchCollaboration">Research Collaboration</a></DropdownItem>
            <DropdownItem><a href="SafetyAwareness">Safety Awareness</a></DropdownItem>
            <DropdownItem><a href="PeerMentorship">Peer Mentorship</a></DropdownItem>
            <DropdownItem><a href="AIPage">AI-driven Insights</a></DropdownItem>
          </Dropdown>
        </MenuItem>

        <MenuItem>
          <a href="#pages">Pages <FaChevronDown /></a>
          <Dropdown>
            <DropdownItem><a href="/about">About Us</a></DropdownItem>
            <DropdownItem><a href="/ContactUs">Contact Us</a></DropdownItem>
          </Dropdown>
        </MenuItem>

        <MenuItem>
          <a href="#extras">Extras <FaChevronDown /></a>
          <Dropdown>
            <DropdownItem><a href="/StudyMaterials"><MdBook /> Study Material</a></DropdownItem>
            <DropdownItem><a href="/download"><MdFileDownload /> Download</a></DropdownItem>
            <DropdownItem><a href="/chat"><MdChat /> Chat</a></DropdownItem>
            <DropdownItem><a href="/blogs"><MdLibraryBooks />Blogs</a></DropdownItem>
          </Dropdown>
        </MenuItem>

        <MenuItem>
          <a href="#login">Login <FaChevronDown /></a>
          <Dropdown>
            <DropdownItem><a href="/login">Student</a></DropdownItem>
            <DropdownItem><a href="/login/faculty">Faculty</a></DropdownItem>
            <DropdownItem><a href="/login/admin">Admin</a></DropdownItem>
          </Dropdown>
        </MenuItem>

        {/* Search, Notification, Profile Menu inside Hamburger on small screens */}
        <SearchContainer>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />
          <FaSearch />
          <FaMicrophone />
        </SearchContainer>

        <MenuItem>
          <a href="#notifications"><FaBell />Notice</a>
        </MenuItem>

        <MenuItem>
          <a href="#profile"><FaUserCircle /> Profile</a>
          <Dropdown>
            
            <ProfileItem><a href="/UserProfilePage">User Profile</a></ProfileItem>
          <ProfileItem><a href="/Leaderboard">Leaderboard</a></ProfileItem>
          <ProfileItem><a href="/Settings">Settings</a></ProfileItem>
          <ProfileItem><a href="/Help">Help</a></ProfileItem>
          <DropdownItem><a href="/logout">Logout</a></DropdownItem>
          </Dropdown>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
