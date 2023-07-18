import React from 'react'
import AboutBlog from './AboutBlog'
import AboutAbout from './AboutAbout'
import HomeAuthor from '@/components/views/home/HomeAuthor'
import HomeJoin from '@/components/views/home/HomeJoin'
import AboutInfo from './AboutInfo'
import AboutImage from './AboutImage'

const About = () => {
  return (
    <div>
        <AboutInfo />
        <AboutImage />
        <AboutAbout />
        <AboutBlog />
        <HomeAuthor />
        {/* <HomeAuthor /> */}
        <HomeJoin />
    </div>
  )
}

export default About