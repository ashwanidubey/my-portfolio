import React, { useEffect } from 'react';
import './Extrastyle.css'

export default function Skills({count,setCount}) {
    useEffect(()=>{
        setCount(5);
    })
    const skills = [{ name: "Computer languages", value: "JavaScript, Machine Learning, CSS, HTML, Python, Java, C++, C,jquery" },
    { name: "Operating Systems", value: "Linux , Windows , mac" },
    { name: "Software Packages", value: "React ,Node,  Mongodb ,MySQL, Django, Matplotlib, Pandas" },
    { name: "Additional Courses Taken", value: "Data Structure" },
    { name: "Soft Skills", value: "Critical Thinking, Decision-making , Teamwork" },
    { name: "DevOps and Cloud", value: "Concourse (CI/CD), Datadog(Monitoring and Analytics),Terraform (Infrastructure as Code),KubernetesContainer Orchestration)" },
    { name: "Tools and Technology", value: "Vscode , Github" }
    ]
    return (
        <div className='py-3'>
            <div className="card-container row">
                {
                    skills.map((item) => <>
                        <div className="col-md-4 mb-3 mycard " >
                            <div className="card" style={{ height: '195px' }}>
                                <div className="card-body bg-success-subtle">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.value}</p>
                                </div>
                            </div>
                        </div>
                    </>)
                }

            </div>
        </div>
    )
}




