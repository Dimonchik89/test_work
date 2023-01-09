import { Container, Box, Grid } from "@mui/material"
import Typography from '@mui/material/Typography';
import AboutCard from "../components/About/AboutCard";

import about from "../styles/about.module.scss"

const aboutInfo = [
    {
        head: 'We Offer',
        title: 'Large library of recipes',
        description: 'Our collection of recipes has more than 50,000'
    },
    {
        head: 'You can',
        title: 'Submit your recipes',
        description: 'If you have an interesting recipe, send it to us and we will post it with us'
    },
    {
        head: 'Have questions',
        title: 'If you have any questions',
        description: 'You can always leave a question and we will contact you'
    },
]

const About = () => {

    const content = aboutInfo.map(item => (
        <AboutCard 
            key={item.head} 
            head={item.head} 
            title={item.title}
            description={item.description}
        />
    ))

    return (
        <Box className={about.wrapper}>
            <Container>
                    <Typography
                        variant="h4"
                        component="p"
                        align="center"
                    >
                        About
                    </Typography>
                <Box className={about.content__wrapper}>
                    <Grid container spacing={2}>
                        {content}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
export default About