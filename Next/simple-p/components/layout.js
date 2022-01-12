import Logo from "./Logo";

export default function Layout ({children}) {
    return(
        <>
        <Logo />
        <div>{children}</div>
        </>
    )
}