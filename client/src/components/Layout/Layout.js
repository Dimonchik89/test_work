import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"

const Layout = ({children}) => {

    return (
        <>
            <Header/>
            <Navigation/>
            {children}
        </>
    )
}
export default Layout