//Higher order components
//Reuse code
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info pls dont share</p> }
            <WrapedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrapedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? <WrapedComponent {...props}/> : <p>Please Authenticate your self</p>
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info="This is the detail"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the detail"/>, document.getElementById('app'));
