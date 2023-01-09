import { Box, Typography } from "@mui/material"

const TimeCard = ({title, icon = null}) => {

    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            {icon}
            <Box
                sx={{display: 'flex', flexDirection: 'column', marginLeft: "10px"}}
            >
                <Typography
                    variant="body2"
                    component="span"
                >
                    PREP
                </Typography>
                <Typography
                    variant="body2"
                    component="span"
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    )
}
export default TimeCard