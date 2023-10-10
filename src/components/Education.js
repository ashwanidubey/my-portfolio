import React, { useEffect } from 'react';

export default function Education({ count, setCount }) {
    useEffect(() => {
        setCount(2);
    }, []);

    return (
        <>
            <div className="container py-5">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="row">DEGREE/EXAMINATION</th>
                                <th>Institute/BOARD</th>
                                <th>Year</th>
                                <th>CGPA/PERCENTAGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Btech(CSE)</td>
                                <td>UIET, KANPUR</td>
                                <td>2017-21</td>
                                <td>7.18 CPA</td>
                            </tr>
                            <tr>
                                <td>Intermediate</td>
                                <td>OXFORD PUBLIC SCHOOL, GORAKHPUR</td>
                                <td>2014-16</td>
                                <td>81.2 %</td>
                            </tr>
                            <tr>
                                <td>HIGH SCHOOL</td>
                                <td>OXFORD PUBLIC SCHOOL, GORAKHPUR</td>
                                <td>2012-14</td>
                                <td>7.6 CGPA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        <p>My education has provided me with a strong foundation in computer science and has equipped me with the necessary skills to succeed as a professional. I have developed strong critical thinking, problem-solving, and communication skills through my studies. I am also a highly motivated and self-directed learner.
I am confident that my education and skills would be a valuable asset to your team. I am eager to learn more about your company and the opportunities that you have available. I am confident that I would be a great fit for your team and that I can make a significant contribution to your company's success.</p>
        </>
    )
}
