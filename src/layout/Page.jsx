import React from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Page = (props) =>{
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>

    )
};
export default Page;