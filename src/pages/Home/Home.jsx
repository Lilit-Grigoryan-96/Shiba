import React from 'react'
import Page from '../../layout/Page';
import Heading from "./components/Heading"
import FeaturesSection from "./components/FeaturesSection"
import Guests from "./components/Guests"
import Roadmap from "./components/Roadmap"
import Faq from "./components/Faq"

const Home = () =>{
    return (
        <Page>
            <Heading/>
            <FeaturesSection/>
            <Guests/>
            <Roadmap/>
            <Faq/>
        </Page>
    )
}

export default Home;