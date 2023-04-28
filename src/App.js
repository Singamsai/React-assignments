import { Route, Routes } from 'react-router-dom';
import './App.css';
import Assignment06 from './assignments/assignment-06/Assignment06';
import Inputcomp from './assignments/todolist/Inputcomp';
import Homework13 from './homework/homework-13/Homework13';
import Weeklytest01 from './weeklytests/weeklytest-01/Weeklytest01';
import Home from './Home';
import Assignment05 from './assignments/assignment-05/Assignment05';
import Homework06 from './homework/homework-06/Homework06';
import Assignment04 from './assignments/assignment-04/Assignment04';
import Homework05 from './homework/homework-05/Homework05';
import Assignment02 from './assignments/assignment-02/Assignment02';
import Assignment01 from './assignments/assignment-01/Assignment01';
import Homeword02 from './homework/homework-02/Homeword02';
import Homework04 from './homework/homework-04/Homework04';
import Homework01 from './homework/homework-01/Homework01';
import Assignment03 from './assignments/assignment-03/Assignment03'
import Homework03 from './homework/homework-03/Homework03'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="assignments/assignment01" element={<Assignment01/>}></Route>
        <Route path="assignments/assignment02" element={<Assignment02/>}></Route>
        <Route path="assignments/assignment03" element={<Assignment03/>}></Route>
        <Route path="assignments/assignment04" element={<Assignment04/>}></Route>
        <Route path="assignments/assignment05" element={<Assignment05/>}></Route>
        <Route path="assignments/assignment06" element={<Assignment06/>}></Route>
        <Route path="assignments/todolist" element={<Inputcomp/>}></Route>
        <Route path="homeworks/homework01" element={<Homework01/>}></Route>
        <Route path="homeworks/homework02" element={<Homeword02/>}></Route>
        <Route path="homeworks/homework03" element={<Homework03/>}></Route>
        <Route path="homeworks/homework04" element={<Homework04/>}></Route>
        <Route path="homeworks/homework05" element={<Homework05/>}></Route>
        <Route path="homeworks/homework06" element={<Homework06/>}></Route>
        <Route path="homeworks/homework13" element={<Homework13/>}></Route>
        <Route path="weeklytests/weeklytest01" element={<Weeklytest01/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
