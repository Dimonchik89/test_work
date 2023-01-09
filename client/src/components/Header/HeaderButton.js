import { useRouter } from "next/router";
import Button from '@mui/material/Button';

import header from "../../styles/header.module.scss";

const HeaderButton = ({page}) => {
    const router = useRouter();

    const handleNavigate = (page) => {
        if(page === 'shop'){
            router.push(`/`)
        } else {
            router.push(`/${page}`)
        }
    }
    const styleActiveButton = router.pathname == `/${page}` ? header.active : router.pathname == '/' && page === 'shop' ? header.active : null

    return (
        <Button
            key={page}
            onClick={() => handleNavigate(page)}
            className={`${header.button} ${styleActiveButton}`}
        >
            {page}
        </Button>
    )
}
export default HeaderButton;