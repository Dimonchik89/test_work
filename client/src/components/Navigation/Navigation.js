import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import HeaderButton from '../Header/HeaderButton';

import navigation from "../../styles/navigation.module.scss"
import header from "../../styles/header.module.scss";

const pages = ['categories', 'collections', 'resources'];

const Navigation = () => {

    return (
        <AppBar 
            position="static" 
            className={navigation.container}
        >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
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
    )
}
export default Navigation;