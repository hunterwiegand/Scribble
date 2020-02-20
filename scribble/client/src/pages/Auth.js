// This page with show our login paged to handle user Auth()

// Import React so we can utilize components and jsk
// Which is html like code, but in javascript
import React, { Component } from "react";

import { Container } from "../components/Grid";


import GoogleAuth from "../components/GoogleAuth";

class testAuth extends Component {
    render() {
        return (
            <Container>
                <GoogleAuth></GoogleAuth>
            </Container>
        );
    }
};




export default testAuth;
