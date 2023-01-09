import { useRef } from "react";
import { useRouter } from "next/router"
import { Container, Grid, Typography, Box, Button } from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import useDownloader from "react-use-downloader";
import ReactToPrint from 'react-to-print';

import Error from "../../components/Error/Error";
import RecipePageImage from "../../components/RecipePage/RecipePageImage";
import TimeCard from "../../components/TimeCard/TimeCard";

import recipepage from "../../styles/recipepage.module.scss";

const RecipePage = ({recipe, errorCode}) => {
    const { query: { id } } = useRouter()
    const pageRef = useRef(null)
    const { download } = useDownloader();
    let time = ''

    if(errorCode) {
        return <Error/>
    }

    recipe.bake_time.map((item, i) => {
        if(i !== recipe.bake_time.length - 1) {
            time += `${item} hr to `
        } else {
            time += `${item} hr`
        }
    })

    return (
        <Box className={recipepage.wrapper}>
            <Container 
                maxWidth="xl"
                ref={pageRef}
            >
                <Grid container spacing={2}>
                    <Grid item xl={6}>
                        <Typography
                            variant="h3"
                            component="h2"
                        >
                            {recipe.title}
                        </Typography>
                        <Box className={recipepage.description__wrapper}>
                            <Typography
                                variant="body1"
                                component="span"
                            >
                                {recipe.description}
                            </Typography>
                        </Box>

                        <Box className={recipepage.time__container}>
                            <TimeCard 
                                title={`${recipe.pref_time} mins`} 
                                icon={<AccessTimeIcon fontSize="large"/>}
                            />
                            <TimeCard title={time} />
                            <TimeCard title={`${recipe.total_time} hr`} />  
                        </Box>
                        <Box className={recipepage.footer__container}>
                            <TimeCard title={`${recipe.yield}`} icon={<BlurCircularIcon fontSize="large"/>}/>
                            <Box>
                                <Button variant="outlined" startIcon={<AddIcon />} sx={{margin: "0 10px"}} onClick={() => download(`${process.env.NEXT_PUBLIC_BASE_URL}${recipe.image}`, recipe.image)}>
                                    Save Recipe 
                                </Button>
                                <ReactToPrint

                                    trigger={() => (
                                        <Button variant="outlined" startIcon={<PrintIcon />}>
                                            Print
                                        </Button>)
                                    }
                                    content={() => pageRef.current}
                                />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xl={6}>
                        <RecipePageImage image={`${recipe.image}`} title={recipe.title}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default RecipePage

export async function getServerSideProps({ query }) {
    const response = await fetch(`${process.env.BASE_URL}/product/${query.id}`)
    const errorCode = response.ok ? false : response.statusCode
    const recipe = await response.json();

    return {
        props: {
            recipe,
            errorCode
        }
    }
}