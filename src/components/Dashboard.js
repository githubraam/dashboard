import { Link } from "react-router-dom";
import ClassEvaluations from "./reports/ClassEvalautions";

const Dashboard=()=>{

    return(
        <>
            <main className='main'>
                <div className='leftSidebar'>
                    <ul className="sidebarMenuList">
                        <li>
                            <a href='#'>User Profile</a>
                        </li>
                        <li>
                            <a href='#'>Attendance</a>
                        </li>
                        <li>
                            <a href='#'>Library</a>
                        </li>
                        <li>
                            <a href='#'>Assesement</a>
                        </li>
                        <li>
                            <a href='#'>Live Classes</a>
                        </li>
                    </ul>
                </div>
                <div className='rightContent'>
                    <h1 className="textCenter">Teacher Dashboard</h1>

                    <div className="mainDashboardContent" style={{'marginTop':'25px'}}>
                        
                        <Link className="btn actionBtn dBlock textCenter" to="/about-us">My Report</Link>
                        <Link className="btn actionBtn dBlock textCenter" to="/class-evaluations">Class Evaluations</Link>
                    </div>

                    <ClassEvaluations />
                </div>
            </main>
        </>
    )
}

export default Dashboard;