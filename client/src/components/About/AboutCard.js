import { Card, CardContent, Typography, Grid, Box } from "@mui/material"

import about from "../../styles/about.module.scss";

const AboutCard = ({head, title, description}) => {

    return (
        <Grid item xs={4}>
            <Card className={about.card}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {head}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Box>
                        <Typography variant="body2">
                            {description}
                            <br />
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>

    )
}
export default AboutCard