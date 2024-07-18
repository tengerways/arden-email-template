import React from 'react'
import TotalEmails from '../../assets/images/total-email.svg'
import TodayEmails from '../../assets/images/today-email.svg'
import PieChart from '../../assets/images/pie-chart.svg'
import Refresh from '../../assets/images/refresh.svg'
import { useNavigate } from 'react-router-dom'

function Dashboard(){

    const navigate = useNavigate();

    const handleViewEmail = (e) => {
        e.preventDefault();
        navigate('/view-email');
    };

    return(
        <>
            <div className='dashboard-title mb-3'>
                <h1>Dashboard</h1>
            </div>
            <div className='welcome-banner mb-3'>
                Welcome back Jason,
            </div>
            <ul className='top-grid'>
                <li>
                    <div className='image-holder'>
                        <img src={TotalEmails} className='img-fluid' alt='Image goes here' />
                    </div>
                    <h3>151<span>Total Emails created</span></h3>
                </li>
                <li>
                    <div className='image-holder'>
                        <img src={TodayEmails} className='img-fluid' alt='Image goes here' />
                    </div>
                    <h3>21<span>Total Emails created today</span></h3>
                </li>
            </ul>
            <div className='row mt-3 clearfix'>
                <div className='col-12 col-lg-6'>
                    <div className='dash-card'>
                        <div className='dash-card-header'>
                            Recent Emails
                        </div>
                        <div className='dash-card-body'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Emails</th>
                                        <th scope="col">Sent date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Lorem ipsum</td>
                                        <td>25 June 2024</td>
                                        <td><a href='' onClick={handleViewEmail}><i className='bi bi-eye'></i></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Lorem ipsum</td>
                                        <td>25 June 2024</td>
                                        <td><a href='' onClick={handleViewEmail}><i className='bi bi-eye'></i></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Lorem ipsum</td>
                                        <td>25 June 2024</td>
                                        <td><a href='' onClick={handleViewEmail}><i className='bi bi-eye'></i></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Lorem ipsum</td>
                                        <td>25 June 2024</td>
                                        <td><a href='' onClick={handleViewEmail}><i className='bi bi-eye'></i></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Lorem ipsum</td>
                                        <td>25 June 2024</td>
                                        <td><a href='' onClick={handleViewEmail}><i className='bi bi-eye'></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;