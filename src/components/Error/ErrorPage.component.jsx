import { Link } from "react-router-dom";
import Button from "../Button/Button.component";

import "./ErrorPage.styles.scss"

const ErrorPage = () => {
    return (
        <section className="error-page">
            <h1 className="error-title">Sorry the page you requested does not exist.</h1>
            <Link to="/">
                <Button title={`back home`} />
            </Link>

        </section>
    )
}

export default ErrorPage