import "./Carousel.css"

const Carousel = ({children}) => {
  return (
    <div className="main-container">
        <div className="window">
            <div className="all-pages-container">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Carousel