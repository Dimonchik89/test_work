import Image from "next/image"
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

import error from "../styles/error.module.scss"

const Error = () => {
    const router = useRouter()

    const handleBackRecipes = () => {
        router.push('/')
    }

    return (
        <Box className={error.wrapper}>
            <Image
                src={"/static/error.png"}
                width={640}
                height={480}
                alt="error"
            />
            <Button
                variant="outlined"
                onClick={handleBackRecipes}
            >
                Back home
            </Button>
        </Box>
    )
}
export default Error;