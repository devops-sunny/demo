import React from "react";
import Edit from "../../../assets/images/edit.png";

function PatientMoreDetail() {

    const arr = [
        {
            "id": "1",
            "Drug": "(PARACETAMOL;500MG) Tablets (Oral)",
            "Duration": "5 Days",
            "RouteOfAdmin": "15 May 1988",
            "TotalQuantity": "30 Tablets",
            "StartDate": "17/06/2022",
            "InstructionIndication": "2 tab, 3 times in day",
            "Refill": "1 Time(s)",
            "MobileNo.": "920027299",
            "SpecialInstruction": "30 Minutes Before Meals"
        },
        {
            "id": "2",
            "Drug": "(PARACETAMOL;500MG) Tablets (Oral)",
            "Duration": "5 Days",
            "RouteOfAdmin": "15 May 1988",
            "TotalQuantity": "30 Tablets",
            "StartDate": "17/06/2022",
            "InstructionIndication": "2 tab, 3 times in day",
            "Refill": "1 Time(s)",
            "MobileNo.": "920027299",
            "SpecialInstruction": "30 Minutes Before Meals"
        },
        {
            "id": "3",
            "Drug": "(PARACETAMOL;500MG) Tablets (Oral)",
            "Duration": "5 Days",
            "RouteOfAdmin": "15 May 1988",
            "TotalQuantity": "30 Tablets",
            "StartDate": "17/06/2022",
            "InstructionIndication": "2 tab, 3 times in day",
            "Refill": "1 Time(s)",
            "MobileNo.": "920027299",
            "SpecialInstruction": "30 Minutes Before Meals"
        }
    ]

    return (
        <>
            <div className="page-row">
                <div className="titlebox">
                    <h2>Prescription Details (12/05/2022)</h2>
                </div>
                <div className="custom-btn-grp">
                    <a href="#" className="border-btn">
                        Go Back
                    </a>
                    <a href="#" className="add-btn">
                        Copy Prescription &amp; Edit
                    </a>
                </div>
            </div>

            <div className="white-box">
                <div className="patients-details-preview">
                    {arr.map((item, key) => {
                        return (
                            <>
                                <div className="drug-box">
                                    <h2>
                                        Drug 1 : <span>{item.Drug}</span>
                                    </h2>
                                    <div className="patients-details">
                                        <ul>
                                            <li>
                                                Duration : <span>{item.Duration}</span>
                                            </li>
                                            <li>
                                                Route of admin : <span>{item.RouteOfAdmin}</span>
                                            </li>
                                            <li>
                                                Total Quantity : <span>{item.TotalQuantity}</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                Start Date : <span>{item.StartDate}</span>
                                            </li>
                                            <li>
                                                Instruction/Indication : <span>{item.InstructionIndication}</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                Refill : <span>{item.Refill}</span>
                                            </li>
                                            <li>
                                                Mobile No. : <span>{item.MobileNo}</span>
                                            </li>
                                            <li>
                                                Special Instruction : <span>{item.SpecialInstruction}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </>
                        )
                    })

                    }

                </div>
            </div>
        </>
    );
}

export default PatientMoreDetail;
