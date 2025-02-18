import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const NoAuthRoute = ({children,authenticated, ...rest}) => {
    return !authenticated ? (
        children
    ) : (
        <Navigate to="/"/>
    )
}

const mapStateToProps = ({session}) => ({
    authenticated: session.authenticated
})


export default connect(mapStateToProps) (NoAuthRoute);