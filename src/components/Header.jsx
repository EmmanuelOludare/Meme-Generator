import { FaToggleOn } from "react-icons/fa";
import trollFace from "./images/troll-face.webp"

const Header = (props) => {
    return (
        <header className="header">
            <img 
                src={trollFace}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <FaToggleOn onClick={props.switchTheme} className="toggle"/>
        </header>
    )
}

export default Header