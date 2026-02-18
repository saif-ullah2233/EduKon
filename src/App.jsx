import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./image/logo.png";
import { HomeContainer } from './components/Homecontainer';
import { TopBare } from './components/Topbare';
import { Sponcered } from './components/sponcered';
import { Categories} from './components/catogaries';
import { FeaturedCourse } from './components/Featuredcourse';
import { Aboutcourses } from './components/Aboutcourses';
import Instructors from './components/Instructures';
import { StudentFeedback } from './components/Studentfeedback';
import { ResourceLibrary } from './components/Resourcellibrary';

function App() {

 
  return (
    <>
      <div>
      <TopBare />
      </div>
      <div>
        <HomeContainer />
      </div>
      <div>
        <Sponcered />
      </div>
      <div>
      <Categories />
      </div>
      <div>
        <FeaturedCourse />
      </div>
      <div>
        <Aboutcourses />
      </div>
     <StudentFeedback />
     <ResourceLibrary />
    </>
  )
}


export default App
