import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from 'react-redux';

export const UserRoute = ({component: Component, ...rest}) =>
{
    const status = useSelector(state => state.isLogged);

    return (
        <Route
            {...rest}
            render={props =>
            {
                if(status)
                {
                    return <Component {...props}/>;
                } else
                {

                    return <Redirect to={{
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    }
                    }/>
                }
            }
            }

        />
    );
};
