import React, { useEffect } from 'react';
import './Extrastyle.css'
export default function Experience({count,setCount}) {
    useEffect(()=>{
        setCount(3);
    })
    const companies = [
        {
            name: "Smarsh India",
            position: "Delivery Engineer ",
            from: "Dec 2021",
            to: "Aug 2023",
            description: "Tech Stack : Html, CSS , JavaScript , React, Node , MongoDb , concourse , datadog , python , linux , terraform"
        },
        {
            name: "Byjus (Intern) ",
            position: "Software Engineer ",
            from: "July 2021",
            to: "Nov 2021",
            description: "Tech Stack : Html, CSS , JavaScript , React, Node , MongoDb"
        },
        {
            name: "Newton School",
            position: "Trainee",
            from: "Jan 2021",
            to: "June 2021",
            description: "Tech Stack : Html, CSS , JavaScript , React, Node , Data Structure"
        }
    ];

    return (
        <>
        <div className="card-container row justify-content-center">
            {companies.map((company, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3 py-5 mycard ">
                    <div className="card bg-success-subtle" style={{ height: "100%" }}>
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">{company.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {company.position} ({company.from} - {company.to})
                            </h6>
                            <p className="card-text">{company.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <p class="card-text">I am a highly skilled and passionate software engineer with a strong foundation in data structures and a keen interest in optimizing and solving complex problems. I possess a diverse technical background, proficient in a wide range of technologies including 𝐌𝐨𝐧𝐠𝐨𝐃𝐁, 𝐑𝐞𝐚𝐜𝐭, 𝐍𝐨𝐝𝐞.𝐣𝐬, 𝐄𝐱𝐩𝐫𝐞𝐬𝐬, 𝐏𝐲𝐭𝐡𝐨𝐧, 𝐉𝐚𝐯𝐚, 𝐋𝐢𝐧𝐮𝐱 𝐬𝐡𝐞𝐥𝐥 𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐧𝐠 and more. My experience spans across various tech stacks, including MERN ,showcasing my adaptability and versatility in delivering top-notch solutions. Additionally, I have hands-on experience with tools like 𝐂𝐨𝐧𝐜𝐨𝐮𝐫𝐬𝐞,𝐃𝐚𝐭𝐚𝐝𝐨𝐠,𝐓𝐞𝐫𝐫𝐚𝐟𝐨𝐫𝐦, 𝐚𝐧𝐝 𝐊𝐮𝐛𝐞𝐫𝐧𝐞𝐭𝐞𝐬 , allowing me to excel in deploying and managing scalable applications. As a highly motivated and detail-oriented individual, I am committed to continuous learning and staying up-to-date with emerging technologies to drive innovation and deliver impactful results in every project I undertake. Seeking opportunities to leverage my expertise in a dynamic and collaborative environment to contribute to cutting-edge projects and create elegant solutions for real-world challenges.</p>
                          
        </>  
    );
}
