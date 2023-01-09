import { Box, Container, Typography } from "@mui/material"
import { useRouter } from "next/router"

import home from "../styles/home.module.scss"

const Shop = () => {

    return (
        <Box className={home.wrapper}>
            <Container>
                <Box>
                    <Typography
                        variant="h2"
                        component="h2"
                        align="center"
                        color="white"
                    >
                        Welcome to our recipe site
                    </Typography>
                    <Box className={home.description__wrapepr}>
                        <Typography
                            variant="body1"
                            component="p"
                            align="center"
                            color="white"
                        >
                            Here you can find all your favorite dishes of interest
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>

    )
}
export default Shop