import { Container, Box, Typography, Button } from "@mui/material"
import { useRouter } from "next/router";

import learn from "../styles/learn.module.scss";

const Learn = () => {
    const router = useRouter()

    const handleGoRecipesPage = () => {
        router.push("/recipes")
    }

    return (
        <Box className={learn.wrapper}>
            <Container>
                <Box className={learn.content__wrapper}>
                    <Typography
                        variant="h6"
                        component="p"
                        color="white"
                        align="center"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit alias tempore voluptate nam dolorem aperiam corporis, modi maiores nihil! Nam dicta culpa iure tempora assumenda velit inventore et voluptatum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit alias tempore voluptate nam dolorem aperiam corporis, modi maiores nihil! Nam dicta culpa iure tempora assumenda velit inventore et voluptatum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit alias tempore voluptate nam dolorem aperiam corporis, modi maiores nihil! Nam dicta culpa iure tempora assumenda velit inventore et voluptatum!
                    </Typography>
                    <Box className={learn.button__wrapper}>
                        <Button
                            variant="outlined"
                            onClick={handleGoRecipesPage}
                        >
                            Go recipes
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Learn