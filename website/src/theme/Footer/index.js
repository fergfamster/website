import React from "react";
import Footer from "@theme-original/Footer";

export default function FooterWrapper(props) {
    return (
        <>
            <Footer {...props} />
            <script
                defer
                src='https://static.cloudflareinsights.com/beacon.min.js'
                data-cf-beacon='{"token": "75b59c2688014d5093a644893273bbeb"}'
            ></script>
        </>
    );
}
