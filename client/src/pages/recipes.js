import { useEffect } from "react"
import {Box, Container} from "@mui/material";
import { Grid } from "@mui/material";

import RecipeCard from "../components/RecipesCard/RecipesCard";
import Error from "../components/Error/Error";

import recipes from "../styles/recipes.module.scss";

const Recipes = ({products, errorCode}) => {

    if(errorCode) {
        return <Error/>
    }

    const content = products?.map(item => <RecipeCard key={item.id} imgPath={item.image} title={item.title} description={item.description} id={item.id}/>)

    return (
        <Box
            className={recipes.wrapper}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {content}
                </Grid>
            </Container>
        </Box>

    )
}
export default Recipes

export async function getStaticProps() {
    const response = await fetch(`${process.env.BASE_URL}/product`)
    const errorCode = response.ok ? false: response.statusCode;
    const products = await response.json()

    return {
        props: {
            products,
            errorCode
        }
    }
}