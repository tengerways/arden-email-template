import React from "react";
import { Link } from "react-router-dom";

function ManageEmails() {
    return(
        <>
            <div className='dashboard-title mb-3'>
                <h1>Manage Emails</h1>
            </div>
            <div className="row mb-3 clearfix">
                <div className="col-12 col-lg-9">
                    <div className="filters">
                        <div className="row clearfix">
                            <div className="col-12 col-lg-2 col-xl-1">
                                <i className="bi bi-funnel-fill"></i>
                            </div>
                            <div className="col-12 col-lg-3 col-xl-4">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Choose Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-5">
                                <div>
                                    <input type="text" className="form-control" id="search" placeholder="Search" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-xl-2">
                                <button type="submit" className="btn btn-success w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="">
                        <Link to="/create-email" className="btn btn-primary w-100 p-4">Create new Email</Link>
                    </div>
                </div>
            </div>
            <div className="row mb-3 clearfix">
                <div className="col-12 col-xl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email template name</th>
                                <th scope="col">Created by name</th>
                                <th scope="col">Created date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action items</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Tengerways</td>
                                <td>Otto</td>
                                <td>25 June 2024</td>
                                <td>Sent</td>
                                <td>
                                    <i className="bi bi-eye me-2"></i>
                                    <i className="bi bi-trash"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Arden - 2406</td>
                                <td>Thornton</td>
                                <td>21 June 2024</td>
                                <td>Sent</td>
                                <td>
                                    <i className="bi bi-eye me-2"></i>
                                    <i className="bi bi-trash"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mrise</td>
                                <td>The Bird</td>
                                <td>20 June 2024</td>
                                <td>Draft</td>
                                <td>
                                    <i className="bi bi-pencil-fill me-2"></i>
                                    <i className="bi bi-trash"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>MSTCS</td>
                                <td>The Bird</td>
                                <td>19 June 2024</td>
                                <td>Sent</td>
                                <td>
                                    <i className="bi bi-eye me-2"></i>
                                    <i className="bi bi-trash"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageEmails;