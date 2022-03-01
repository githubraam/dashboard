import { useState } from "react";
import { Link } from "react-router-dom";

const Studentdashboard = () => {
    const [steps, setSteps] = useState(0);
    const aggregate = [
        { name: 'Attendance Aggregate', percentage: 20 },
        { name: 'Assesement Aggregate', percentage: 45 },
        { name: 'Quizes Aggregate', percentage: 50 }
    ]


    return (
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
                    <h1 className="textCenter">Student Dashboard</h1>
                    {steps === 0 &&
                        <div style={{ marginTop: '20px' }}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Overall Aggregate</th>
                                        <th>Report Generation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button className="link" onClick={() => { setSteps(steps + 1) }}>Science</button>
                                        </td>
                                        <td>
                                            <div className="dualColorBar" style={{ '--per': '50%' }}></div>
                                        </td>
                                        <td>
                                            <button className="link">Generate Report</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="link" onClick={() => { setSteps(steps + 1) }}>Science</button>
                                        </td>
                                        <td>
                                            <div className="dualColorBar" style={{ '--per': '50%' }}></div>
                                        </td>
                                        <td>
                                            <button className="link">Generate Report</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="container" style={{ marginTop: '30px' }}>
                                <div className="row mb10">
                                    <div className="col-4">
                                        <div>Attendance Aggregate</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="dualColorBar" style={{ '--per': '50%' }}></div>
                                    </div>
                                </div>
                                <div className="row mb10">
                                    <div className="col-4">
                                        <div>Quizes Aggregate</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="dualColorBar" style={{ '--per': '50%' }}></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div>Assesement Aggregate</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="dualColorBar" style={{ '--per': '50%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {steps === 1 &&
                        <div style={{ marginTop: '20px' }}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Chapter</th>
                                        <th>Assesement</th>
                                        <th>Video Watched</th>
                                        <th>Quizes Aggregate</th>
                                        <th>Assesement Report</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chapter 1</td>
                                        <td><div className="dualColorBar" style={{ '--per': '70%' }}></div></td>
                                        <td>50%</td>
                                        <td>50%</td>
                                        <td><button className="link" onClick={() => { setSteps(steps + 1) }}>Report</button></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }

                    {steps === 2 &&
                        <div style={{ marginTop: '30px' }}>
                            <div className="container">
                                <h3 style={{ marginBottom: '20px' }}>Chapter 4</h3>
                            </div>
                            <div className="container grayBgContainer" style={{ padding: '30px' }}>
                                <div className="row">
                                    <div className="col-6">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Attribute</th>
                                                    <th>Time Taken</th>
                                                    <th>Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Quiz 1</td>
                                                    <td>20 mins</td>
                                                    <td>10 / 10</td>
                                                </tr>
                                                <tr>
                                                    <td>Quiz 1</td>
                                                    <td>20 mins</td>
                                                    <td>10 / 10</td>
                                                </tr>
                                                <tr>
                                                    <td>Quiz 1</td>
                                                    <td>20 mins</td>
                                                    <td>10 / 10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-6">
                                        <div style={{paddingLeft: '15px'}}>
                                            <h4 style={{marginBottom: '15px'}}>Report</h4>

                                            <select className="formControl" style={{marginBottom: '15px'}}>
                                                <option>Choose Quiz</option>
                                                <option>Choose Quiz</option>
                                                <option>Choose Quiz</option>
                                            </select>

                                            <button className="btn actionBtn dBlock textCenter" style={{marginBottom: '15px'}}>Go to Report</button>
                                            <button className="btn actionBtn dBlock textCenter">Get Aggregate Report</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </main>
        </>
    )
}

export default Studentdashboard;