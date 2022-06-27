import Button from '../Button/Button.component'
import './Homepage.styles.scss'

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="landing">
            <h1 className="introduction">Hello, <span className="row">I am <span className="dev-name">Julian</span>, </span>
            <span className="dev-title">Front End Developer.</span>
            </h1>
            <p className='intro-paragraph'>I love building projects for the web.</p>
            <Button title={`Let's get in touch!`} />
            </div>
        </div>
    )
}

export default Homepage