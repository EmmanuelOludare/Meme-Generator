import React, { useRef, useState,useEffect } from 'react';
import html2canvas from 'html2canvas';
import { FaDownload } from "react-icons/fa";

const Meme = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);
  const elementRef = useRef(null);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2xscjb.png" 
  })
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
  }, [])

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(elementRef.current, {
        useCORS: true,
        allowTaint: true
      });
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'meme.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError(err);
    } finally {
      setIsDownloading(false);
    }
  };
  
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme" ref={elementRef}>
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            {isDownloading ? (
              <p className='status--text'>Downloading...</p>
            ) : (
              <button className="download--button" onClick={handleDownload}>Download Meme <FaDownload /></button>
            )}
        </main>
    )
}

export default Meme