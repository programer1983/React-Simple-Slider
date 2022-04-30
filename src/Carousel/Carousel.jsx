import "./Carousel.css"
import {useState, useEffect, Children, cloneElement} from "react"
import {FaChevronLeft, FaChevronRight} from  "react-icons/fa"

const PAGE_WIDTH = 450

const Carousel = ({children}) => {
  const [pages, setPages] = useState([])

  const handleArrowLeftClick = () => {
      console.log("handleArrowLeftClick")
  }

  const handleArrowRightClick = () => {
    console.log("handleArrowRightClick")
}


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
        <FaChevronLeft className="arrow" onClick={handleArrowLeftClick}/>
        <div className="window">
            <div className="all-pages-container">
                {pages}
            </div>
        </div>
        <FaChevronRight className="arrow" onClick={handleArrowRightClick}/>
    </div>
  )
}

export default Carousel