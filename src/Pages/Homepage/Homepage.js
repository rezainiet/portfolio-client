import React from 'react';
import ContactMe from './ContactMe/ContactMe';
import HomepageHero from './HomepageHero';
import MyProjects from './MyProjects/MyProjects';
import MySKills from './MySkills/MySKills';

const Homepage = () => {
    return (
        <div>
            <HomepageHero></HomepageHero>
            <MyProjects></MyProjects>
            <MySKills></MySKills>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Homepage;