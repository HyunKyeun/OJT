import Navbar from "./NavBar";
// Layout만들기
export default function Layout({children}) {
  return (
    <>
    {/* Navbar 아래에 컴포넌트들이 위치한다 */}
    <Navbar />
    <div>{children}</div>
    </>
  )
}