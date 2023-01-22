import { FaToggleOn } from "react-icons/fa";

const Header = (props) => {
    return (
        <header className="header">
            <img 
                src="./src/images/troll-face.webp" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <FaToggleOn onClick={props.switchTheme} className="toggle"/>
        </header>
    )
}

export default Header