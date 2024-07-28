import "../Styles/HeroStyle.css"
function Hero(props) {
    return (
        <>
         <div className={props.cName}>
            <img src={props.HeroImg} alt="HeroImg" />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className={props.btnClass}>
                <a href={props.url}  >
                    {props.buttonText}
                </a>

                </div>
            </div>
            </div>   
        </>
    )
}

export default Hero
