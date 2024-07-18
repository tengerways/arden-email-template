import React from "react";
import { useNavigate } from "react-router-dom";

function CreateEmail() {

    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/manage-emails');
    };

    return(
        <>
            <button onClick={handleBack} className="btn btn-outline-dark"><i className="bi bi-chevron-left"></i> Back</button>
            <div className='dashboard-title my-3'>
                <h1>Create Email</h1>
            </div>
            <div className="row mb-3 clearfix">
                <div className="col-12 col-lg-6">
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter the name of template" />
                    </div>
                </div>
            </div>
            <div className="row align-items-end mb-3 clearfix">
                <div className="col-12 col-lg-6">
                    <div>
                        <label htmlFor="netrateID" className="form-label">Netrate ID</label>
                        <input type="text" className="form-control" id="netrateID" placeholder="Enter Netrate ID" />
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <button type="submit" className="btn btn-primary">Fetch Quote PDF</button>
                </div>
            </div>
            <div className="row align-items-end mb-5 clearfix">
                <div className="col-12 col-lg-6">
                    <div>
                        <label htmlFor="ChooseEmailTemplate" className="form-label">Choose Email Template</label>
                        <select className="form-select" aria-label="Default select example" id="ChooseEmailTemplate">
                            <option selected>Choose Email Template</option>
                            <option value="gold">Gold Package</option>
                            <option value="platinium">Platinium Package</option>
                        </select>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Generat Email Content</button>
            <div className="mt-5 mb-3">                
                <textarea className="form-control" id="textarea" rows="16"></textarea>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary" type="button">Open in Outlook</button>
                <button class="btn btn-success" type="button">Save as draft</button>
                <button class="btn btn-warning" type="button">Cancel</button>
            </div>
        </>
    )
}

export default CreateEmail;