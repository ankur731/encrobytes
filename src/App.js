import './App.css';
import Alumni from './Components/Alumni';
import Brochure from './Components/Brochure';
import Career from './Components/Career';
import Certificates from './Components/Certificates';
import FAQContainer from './Components/FAQContainer';
import Footer from './Components/Footer';
import Form from './Components/Form';
import FrontPage from './Components/FrontPage';
import Header from './Components/Header';
import Highlight from './Components/Highlight';
import Learning from './Components/Learning';
import Mentors from './Components/Mentors';
import Projects from './Components/Projects';
import Review from './Components/Review';
import Syllabus from './Components/Syllabus';
import Tools from './Components/Tools';


function App() {
  return (
    <div className="App">
      <Header />
      <FrontPage />
      <Highlight />
      <Syllabus />
      <Tools heading="Tools You’ll Master"/>
      <Mentors heading="Mentors" description="We handpick subject-matter experts for video lectures and live sessions." />
      <Brochure />
      <Career />
      <Alumni />
      <Certificates />
      <Brochure />
      <Learning />
      <Mentors heading="Super Mentors" description="Get mentored by Directors, VPs and Heads of top companies and heavyweights of the advertising industry." />
      <Projects heading="Brand Projects" description="Implement your course learnings by creating strategies for real brands such as:"/>
      <Review />
      <Form />
      <FAQContainer />
      <Brochure />
     <Footer />
    </div>
  );
}

export default App;
