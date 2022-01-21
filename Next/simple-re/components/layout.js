import Logo from "./Logo";
import Header from "./Header";
export default function Layout ({children}) {
    return(
        <>
        <Logo />
        <div>{children}</div>
        </>
    )
}