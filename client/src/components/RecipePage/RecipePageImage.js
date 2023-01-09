import { CardMedia } from "@mui/material"

import recipepage from "../../styles/recipepage.module.scss"

const RecipePageImage = ({image, title}) => {

    return (
        <CardMedia
            className={recipepage.image}
            image={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
            title={title}
        />
    )
}
export default RecipePageImage