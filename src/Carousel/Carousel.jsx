import "./Carousel.css"
import {useState, useEffect, Children, cloneElement} from "react"

const PAGE_WIDTH = 450

const Carousel = ({children}) => {
  const [pages, setPages] = useState([])


  useEffect(() => {
    setPages(
        Children.map(children, (child) => {
            return cloneElement(
              child, {
                style: {
                    height: "100%",
                    minWidth: `${PAGE_WIDTH}px`,
                    maxWidth: `${PAGE_WIDTH}px`,
                } 
              }
            )
        })
    )
  }, [])


  return (
    <div className="main-container">
        <div className="window">
            <div className="all-pages-container">
                {pages}
            </div>
        </div>
    </div>
  )
}

export default Carousel