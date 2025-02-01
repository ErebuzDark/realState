import React, {useState} from 'react';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import xtateLogoBlack from '../assets/xtateLogoBlack.png';

// icons
import { IoMenu } from "react-icons/io5";
import { BsBuildings, BsBriefcase, BsPhone, BsEnvelope } from 'react-icons/bs';

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const goToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Property', 'Services', 'Agent', 'Contact Us'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton onClick={() => goToSection(`section${index}`)}>
              <ListItemIcon>
                {index === 0 && <BsBuildings className='text-[#BC8356] size-6'/>} 
                {index === 1 && <BsBriefcase className='text-[#BC8356] size-6'/>} 
                {index === 2 && <BsPhone className='text-[#BC8356] size-6'/>} 
                {index === 3 && <BsEnvelope className='text-[#BC8356] size-6'/>} 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <nav className='fixed top-0 z-50 w-full flex justify-between items-center py-3 md:px-16 lg:px-28 bg-white border-b-[0.3px] border-slate-300'>
      <div onClick={() => navigate('/')} className='cursor-pointer'>
        <img 
          className='w-24 h-12 pl-3'
          src={xtateLogoBlack} alt="real-state-logo"
        />
      </div>
      <div className='hidden md:block'>
        <ul className='flex flex-row gap-2'>
          <li className='px-5 p-2 hover:bg-slate-100 duration-300 rounded-full cursor-pointer'>Property</li>
          <li className='px-5 p-2 hover:bg-slate-100 duration-300 rounded-full cursor-pointer'>Services</li>
          <li className='px-5 p-2 hover:bg-slate-100 duration-300 rounded-full cursor-pointer'>Agent</li>
          <CustomButton btnTitle='Contact Us'/>
        </ul>
      </div>
      
      <div className='md:hidden'>
        <Button
          onClick={toggleDrawer(true)}
        >
          <IoMenu className='size-10 text-black'/>
        </Button>
      </div>
      
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div>
          <img src={xtateLogoBlack} alt="xtateLogoBlack" className='w-28 p-4'/>
          <Divider />
        </div>
        {DrawerList}
      </Drawer>
    </nav>
  );
}

export default Header;
