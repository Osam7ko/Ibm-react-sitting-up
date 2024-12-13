import { BrowserRouter , Routes ,Route, Navigate } from 'react-router-dom'
import ContentRating from './like-dislike-view/ContentRating';
import EventPlanner from './Event Planner Landing Page/EventPlanner';
import TodoList from './todolist/TodoList';
import WelcomeComponent from './Welcome';
import FetchData from './fetchComp/FetchDate';
import FeedbackForm from './feedbackComp/FeedbackForm';
import AppShCar from './shopping/AppShCar'

function Apps(props) {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomeComponent/> }/>
            <Route path='/contentRating' element={<ContentRating/> }/>
            <Route path='/eventPlanner' element={<EventPlanner/>}/>
            <Route path='/todoList' element={<TodoList/>}/>
            <Route path='/fetchData' element={<FetchData/>}/>
            <Route path='/feedbackForm' element={<FeedbackForm/>}/>
            {/* <Route path='/appShCar' element={<AppShCar/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Apps;
