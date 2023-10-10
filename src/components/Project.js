import React, { useEffect } from 'react'
import './Extrastyle.css'

export default function Project({ count, setCount }) {
    useEffect(() => {
        setCount(4);
    })
    const projects = [{
        p_name: "iNotebook Cloud", p_type: "Personal Project", p_desc: "User can add notes and save in cloud later he can see notes from any device using his credentials", git: "#", hlink: "#", tech: "TechStack: React, Node , MongoDb , Bootstrap"
    }, {
        p_name: "Flipcart Clone", p_type: "Personal Project", p_desc: "It is Flipcart clone , Purpose of this project is only for learning and show my skills ", git: "#", hlink: "#", tech: "TechStack: React, Node , MongoDb , Bootstrap"
    }, {
        p_name: "Student Performace Analysis", p_type: "College Project", p_desc: "I worked as a backend developer on a college project designed to support students in their exam preparations. Our platform conducted tests and used machine learning to provide personalized recommendations based on students' performance. These recommendations helped students improve their study strategies for better results.", git: "#", hlink: "#", tech: "TechStack: Html,CSS, JS, django , ML Libraries (matplolib , sklearn ,linear regression ,pandas)"
    }
    ];
    return (
        <div className='py-3'>
            {
                projects.map((project) => <>
                    <div class="card mycard py-2 px-2 my-2 mx-4 bg-success-subtle">
                        <div class="card-header">
                            {project.p_type}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{project.p_name}</h5>
                            <p class="card-text">{project.p_desc}</p>
                            <p class="card-text">{project.tech}</p>
                            <a href={project.git} class="btn btn-primary mx-1 my-1">Github Link</a>
                            <a href={project.hlink} class="btn btn-primary mx-1 my-1">Hosted Link</a>
                        </div>
                    </div>
                </>)
            }

        </div>
    )
}
