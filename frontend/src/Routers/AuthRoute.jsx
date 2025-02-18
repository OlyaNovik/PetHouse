import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import MainPage from "../MainPage/MainPage";

const AuthRoute = ({children,authenticated, ...rest}) => {
    return authenticated ? (
        children
    ) : (
        <Navigate to="/"/>
    )
}

const mapStateToProps = ({session}) => ({
    authenticated: session.authenticated
})


export default connect(mapStateToProps) (AuthRoute);