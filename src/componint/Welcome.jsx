import {Link} from 'react-router-dom'
import './Welcome.css'
import Clock from './clockcomp/Clock';

export default function WelcomeComponent(){
    const currDate = new Date();

    return(
        <div className="Welcome">
            <div>
                <h1>Hello Osama</h1>
                <h2>This Is Your root page for IBM Softwere Certi/React course</h2>
                <div>
                    <h2 className='time'>The time now is {currDate.toLocaleTimeString()}.</h2>
                    <Clock/>
                </div>
                <h2>The date now is {currDate.toLocaleDateString()}</h2>
                <div className='link'>Your contentRating <Link to='/contentRating'>Go Here</Link></div>
                <div className='link'>Your eventPlanner <Link to='/eventPlanner'>Go Here</Link></div>
                <div className='link'>Your todoList <Link to='/todoList'>Go Here</Link></div>
                <div className='link'>Your FetchDate <Link to='/fetchData'>Go Here</Link></div>
                <div className='link'>Your FeedBack Form <Link to='/feedbackForm'>Go Here</Link></div>
                <div className='link'>Your Store Cart It is not working You Should Build it in deferent App</div>
                {/* <div>Your contentRating <Link to='/contentRating'>Go Here</Link></div> */}
            </div>
        </div>
    )
}