import "./Carousel.css"
import {useState, useEffect, Children, cloneElement} from "react"
import {FaChevronLeft, FaChevronRight} from  "react-icons/fa"

const PAGE_WIDTH = 450

const Carousel = ({children}) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleArrowLeftClick = () => {
    setOffset((currentOffset) => {
        const newOffset = currentOffset + PAGE_WIDTH
        return newOffset
    })
  }

  const handleArrowRightClick = () => {
    setOffset((currentOffset) => {
        const newOffset = currentOffset - PAGE_WIDTH
        return newOffset
    })
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
            <div className="all-pages-container"
                 style={{transform: `translateX(${offset}px)`}}
            >
                {pages}
            </div>
        </div>
        <FaChevronRight className="arrow" onClick={handleArrowRightClick}/>
    </div>
  )
}

export default Carousel