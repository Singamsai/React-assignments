import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import homeimage from "./images/homeimage.PNG";
import Home2 from "./Home2";

export default function Home() {

  return (
    <div className="homme">
      <div
        style={{ backgroundImage: `url(${homeimage})` }}
        className="homme_head"
      >
        <h1>FS-04(Reactjs)Assignments</h1>
      </div>
        <Link to="assignments/assignment01"><Home2 name="assignment-01" date="march 7"/></Link>
        <Link to="assignments/assignment02"><Home2 name="assignment-02" date="march 7"/> </Link>
        <Link to="assignments/assignment03">
        <Home2 name="assignment-03" date="march 7"/>
        </Link>
        <Link to="assignments/assignment04">
        <Home2 name="assignment-04" date="march 7"/>
        </Link>
        <Link to="assignments/assignment05">
        <Home2 name="assignment-05" date="march 7"/>
        </Link>
        <Link to="assignments/assignment06">
        <Home2 name="assignment-06" date="march 14"/>
        </Link>
        <Link to="assignments/todolist">
        <Home2 name="Todo App" date="march 18"/>
        </Link>
      
     
        <Link to="homeworks/homework01"><Home2 name="homework-01" date="march 7"/>
        </Link>
        <Link to="homeworks/homework02"><Home2 name="homework-02" date="march 9"/>
        </Link>
        <Link to="homeworks/homework03"><Home2 name="homework-03" date="march 7"/>
        </Link>
        <Link to="homeworks/homework04"><Home2 name="homework-04" date="march 7"/>
        </Link>
        <Link to="homeworks/homework05"><Home2 name="homework-05" date="march 7"/>
        </Link>
        <Link to="homeworks/homework06"><Home2 name="homework-06" date="march 14"/>
        </Link>
        <Link to="homeworks/homework13"><Home2 name="homework-12" date="march 25"/>
        </Link>
        <Link to="homeworks/homework13"><Home2 name="homework-13" date="march 25"/>
        </Link>

        <Link to="weeklytests/weeklytest01">
        <Home2 name="weeklytest-01" date="march 12"/>
        </Link>
    </div>
  );
}
