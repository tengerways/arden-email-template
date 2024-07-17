import React from "react";
import { Link } from "react-router-dom";

function ViewEmail() {
    return(
        <>
            <Link to="/manage-emails" className="btn btn-outline-dark"><i className="bi bi-chevron-left"></i> Back</Link>
            <div className='dashboard-title my-3'>
                <h1>View Email</h1>
            </div>
            <div className="row mb-3 clearfix">
                <div className="col-12 col-lg-6">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">Name:</th>
                                <td>Email 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-12 col-lg-6">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">Netrate ID:</th>
                                <td>54373</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>            
            <div className="my-3">                
                <div className="bg-white p-3 rounded-3">
                    <p>
                        <strong>Hi Johnny,</strong><br /><br /> 
                        We are pleased to offer this proposal of insurance for McIntosh Village Condominium Association. This Package policy proposal is offered for a one year term by Amerisure Insurance Company, one of America’s strongest insurance companies. This is only a quote for insurance and shall not be deemed as a binding obligation of the insurer.
                        The annual Package policy premium is $14,648 with a policy fee of $350. Total premium and Policy fee equal $14,998. Please note this does not include Terrorism coverage which would increase premium by an additional $ 440.00.<br /><br />
                        <strong>Table Content</strong><br /><br />
                        Annual Premium: $14,648 + $350 Policy Fee = TOTAL PREMIUM $14,998<br />
                        TRIA: $440 (Optional)<br />
                        Deductible: $10,000 AOP Deductible + $50,000 Per Building Wind/Hail Deductible + Roof Limitation Endorsement (Cosmetic)<br />
                        SUBJECT TO- Prior to Binding: Insurance will not be bound unless the following items are submitted and accepted prior to binding:<br />
                        Provide the information or findings of the association’s last roof inspection/maintenance.<br />
                        Provide 90-day currently valued loss runs for 2019-2024. This quote is contingent on no claims/losses for 2019-2024. Confirm association has central station fire alarms. Confirm that the association does not own or maintain any amenities, lakes, or ponds. This quote does not include coverage for any amenities, lakes, or ponds. Confirm that the association does not allow charcoal grilling. Note that charcoal grilling is not allowed anywhere in the association. Provide signed Arden Application that reflects the quote provided. The attached Arden Application matches the quote proposal. Do not make edits to the Arden Application without letting the underwriter know. Provide signed TRIA. The TRIA form is attached to quote proposal. Provide current financials. Arden will need to verify the Insured has favorable reserves/maintenance program. Provide inspection contact: Name, Phone Number, E-mail Address Provide the accounting/billing contact: Name, Phone Number, E-mail Address. Provide the payment plan for invoices: Annual, 3-Pay, 4-Pay, or 9-pay.<br />
                        Note: This quote is subject to a favorable loss control inspection completed within 30 days of binding. Arden will order the inspection at the time of binding.<br />
                        Note: This quote reflects the GOLD Property Enhancement Option with Ordinance B limit of $300,000 per building and Ordinance C limit of $300,000 per building.<br />
                        Note: This quote reflects $10,000 AOP Deductible + $50,000 Per Building Wind/Hail Deductible + Roof Limitation Endorsement (Cosmetic).<br /><br />
                        <strong>Thank you,</strong>
                    </p>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-warning" type="button">Close</button>
            </div>
        </>
    )
}

export default ViewEmail;