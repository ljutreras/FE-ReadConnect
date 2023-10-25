import NavBar from "./NavBar"

const Header = ({dataLogin, handleClearStorage}) => {
  return (
    <header>
        <NavBar handleClearStorage={handleClearStorage} dataLogin={dataLogin}/>
    </header>
  )
}

export default Header