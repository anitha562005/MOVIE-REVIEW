
import logo from './logo.svg';
import './App.css';
import FeedbackForm from './components/feedbackForm';
import ViewReview from './components/viewReview.js';
import { Navigate } from 'react-router-dom';

import{
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  navigate
}from "react-router-dom";

function App() {
  return (
   
     <Router>
      <h1>📽️Movie Review</h1>
      <div className="App">
         {/*{Tab navigation}*/}
         <div className='tabs'>
         <Link to="/form" className="tab-Link">Give Review</Link>
         <Link to="/view" className='tab-Link'>Veiw Review</Link>
      </div>

      {/*{Routes}*/}
      <Routes>
        <Route path="/" element={<Navigate to="/form"/>}/>
        <Route path="/form" element={<FeedbackForm/>}/>
         <Route path="/view" element={<ViewReview/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

