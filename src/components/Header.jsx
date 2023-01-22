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
            <label onClick={props.toggle} id="toggle"></label>
        </header>
    )
}

export default Header