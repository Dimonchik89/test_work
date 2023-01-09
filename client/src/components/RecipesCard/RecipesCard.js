import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';

import recipes from "../../styles/recipes.module.scss";

const RecipeCard = ({imgPath, title, description, id}) => {
    const router = useRouter()

    const handleNavigate = () => {
        router.push(`/recipe/${id}`)
    }

    return (
        <Grid 
            item 
            xs={4}
            className={recipes.container}
        >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    className={recipes?.img}
                    image={`${process.env.NEXT_PUBLIC_BASE_URL}${imgPath}`}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={recipes.description}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        onClick={handleNavigate}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    )
}
export default RecipeCard;