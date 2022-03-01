import { useState } from "react";
import { Link } from "react-router-dom";

const Teacherdashboard=()=>{
    const [steps, setSteps] = useState(0);
    const [stdAssDetails,setStdAssDetails] = useState(false);
    const [tabname, setTabname] = useState('');
    const aggregate = [
        {name: 'Attendance Aggregate', percentage: 20},
        {name: 'Assesement Aggregate', percentage: 45},
        {name: 'Quizes Aggregate', percentage: 50}
    ]


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
                        <li>
                            <a href='#'>Discussion Forum</a>
                        </li>
                        <li>
                            <a href='#'>Calendar</a>
                        </li>
                        <li>
                            <a href='#'>Report</a>
                        </li>
                        <li>
                            <a href='#'>Fee Collection</a>
                        </li>
                        <li>
                            <a href='#'>Documents</a>
                        </li>
                        <li>
                            <a href='#'>Notices</a>
                        </li>
                    </ul>
                </div>
                <div className='rightContent'>
                    <h1 className="textCenter">Teacher Dashboard</h1>

                    {steps == 0 && 
                    <div className="mainDashboardContent" style={{'marginTop':'25px'}}>
                        <Link className="btn actionBtn dBlock textCenter" to="/about-us">My Report</Link>
                        <button className="btn actionBtn dBlock textCenter" onClick={()=>{setSteps(steps+1)}}>Class Evaluations</button>
                    </div>
                    }

                    {steps == 1 && 
                    <form>
                        <div className="grayBgContainer" style={{'marginTop':'25px'}}>
                            <div>

                                <div className="row">
                                    <div className="column col-6">
                                        <select className="formControl" style={{'marginBottom':'10px'}}>
                                            <option>Select Class</option>
                                        </select>
                                    </div>
                                    <div className="column col-6">
                                        <select className="formControl">
                                            <option>Select Subject</option>
                                        </select>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <h2 className="mb20">Class XYZ</h2>
                            <div className="reportDataWrapper">
                                {aggregate.map((ag,index) =>
                                    <div className="row mb10" key={index}>
                                        <div className="column col-5">
                                            <div>{ag.name}</div>
                                        </div>
                                        <div className="column col-5">
                                            <div className="dualColorBar" style={{'--per':ag.percentage+'%'}}></div>
                                        </div>
                                        <div className="column col-2">
                                            {ag.percentage}%
                                        </div>
                                    </div>
                                )}
                               
                                <div className="row">
                                    <div className="column">
                                        <button type="button" className="btn actionBtn dBlock textCenter" onClick={()=>{setSteps(steps + 1)}}>Go to Evaluations</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    }
                    {steps == 2 &&
                    <div>
                        <div className="evaluationTabWrpr">
                            <button className="tabBtn">Attendance</button>
                            <button className={`tabBtn ${tabname=='assesement' ? 'active':''}`} onClick={()=>{setTabname('assesement')}}>Assesement</button>
                            <button className="tabBtn">Quizes</button>
                            <button className={`tabBtn ${tabname=='overall' ? 'active':''}`} onClick={()=>{setTabname('overall')}}>Overall</button>
                        </div>
                        {!stdAssDetails && 
                            <div style={{marginTop: '30px'}}>
                                <h3 style={{'marginBottom': '25px', 'fontSize': '24px'}}>Science Grade 10</h3>
                                <table className="table tableBordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Assesement</th>
                                            <th>Date</th>
                                            <th>Time Taken</th>
                                            <th>Score</th>
                                            <th>Report</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <button className="link" onClick={()=>{setStdAssDetails(true) ; setTabname('assesement');}}>Student 1</button>
                                            </td>
                                            <td>Matter</td>
                                            <td>10/9/21</td>
                                            <td>1 day</td>
                                            <td>9/10</td>
                                            <td>
                                                <button className="link">Report</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }

                        {stdAssDetails && tabname=='assesement' && 
                            <div className="grayBgContainer" style={{marginTop: '30px'}}>
                                <h3 style={{'marginBottom': '25px', 'fontSize': '24px'}}>Student 1, Science, Grade 10, Teacher A</h3>
                                <div className="reportDataWrapper">
                                    <div className="row mb10">
                                        <div className="column col-5">
                                            <div>Monthly Aggregate</div>
                                        </div>
                                        <div className="column col-5">
                                            <div className="dualColorBar" style={{'--per':'50%'}}></div>
                                        </div>
                                        <div className="column col-2">
                                            50%
                                        </div>
                                    </div>
                                
                                    <div className="row">
                                        <div className="column col-6">
                                            <select className="formControl mb10">
                                                <option>Select Chapter</option>
                                            </select>
                                            <select className="formControl mb10">
                                                <option>Select Assesement / Quiz</option>
                                            </select>
                                            <button className="btn actionBtn dBlock textCenter">General Performance Report</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {tabname=='overall' &&
                            <div className="grayBgContainer" style={{marginTop: '30px'}}>
                                <h3 style={{'marginBottom': '25px', 'fontSize': '24px'}}>Student 1, Science, Grade 10, Teacher A</h3>
                                <div className="reportDataWrapper">
                                    <div className="row mb10">
                                        <div className="column col-5">
                                            <div>Monthly Aggregate</div>
                                        </div>
                                        <div className="column col-5">
                                            <div className="dualColorBar" style={{'--per':'50%'}}></div>
                                        </div>
                                        <div className="column col-2">
                                            50%
                                        </div>
                                    </div>

                                    <div className="row mb10">
                                        <div className="column col-5">
                                            <div>Assesement Completion</div>
                                        </div>
                                        <div className="column col-5">
                                            <div className="dualColorBar" style={{'--per':'50%'}}></div>
                                        </div>
                                        <div className="column col-2">
                                            50%
                                        </div>
                                    </div>
                                
                                    <div className="row">
                                        <div className="column col-12">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Chapter</th>
                                                        <th>Strength</th>
                                                        <th>Error Frequency</th>
                                                        <th>Hurdle Topics</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Matter</td>
                                                        <td><div className="dualColorBar" style={{'--per':'50%'}}></div></td>
                                                        <td>50%</td>
                                                        <td>Intermolecular Strength</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Atoms</td>
                                                        <td><div className="dualColorBar" style={{'--per':'10%'}}></div></td>
                                                        <td>10%</td>
                                                        <td>Brownian Motion</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    }
                </div>
            </main>
        </>
    )
}

export default Teacherdashboard;