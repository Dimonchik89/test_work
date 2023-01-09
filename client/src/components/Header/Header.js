import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image'

import HeaderButton from './HeaderButton';

import header from "../../styles/header.module.scss";

const pages = ['shop', 'recipes', 'learn', 'about'];

const myLoader = ({ src, width, quality }) => {
  return `https://seeklogo.com/images/B/${src}?w=${width}&q=${quality || 75}`
  
}

const Header = () => {

  return (
    <AppBar 
        position="static" 
        className={header.container}
    >
      <Container maxWidth="xl">
        <Toolbar 
          className={header.toolbar}
          disableGutters
        >
          <Image
            className={header.logo}
            loader={myLoader}
            src="business-monkey-logo-217230DBE6-seeklogo.com.png"
            alt="logo"
            width={50}
            height={50}
          />
          <Box 
            sx={{display: { xs: 'none', md: 'flex' }}}
            className={header.navigation}  
          >
            {pages.map((page) => (
                <HeaderButton key={page} page={page}/>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;