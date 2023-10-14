import React, { useEffect } from 'react';

export default function Home({count,setCount}) {
    useEffect(()=>{
        setCount(1);
    })
    //const imglink="https://i.postimg.cc/HL1ZzpPX/IMG20221221165736-removebg-preview.jpg";
    const imglink="https://i.postimg.cc/NfrNmW39/91-88878-02756-20210123-161741.jpg"
    return (
        <div className='py-4'>
            <div className="card mb-3 py-4">
                <div className="row g-0">
                    <div className="col-md-4 px-3 py-5 d-flex align-items-center justify-content-center">
                        <img className="rounded-5" src={imglink} alt="SomeThing Wromh" />
                    </div>
                    <div className="col-md-8 px-3">
                        <div className="card-body">
                            <h5 className="card-title">Introduction</h5>
                            <p className="card-text">
                                Hello, I'm Ashwani Dubey, born on February 26, 1999, in Gorakhpur, Uttar Pradesh. I'm passionate about various pursuits, including playing chess, cricket, exploring new places, and coding. Mathematics and Data Structures and Algorithms (DSA) are my favorite subjects, and I find immense joy in solving complex problems.

                                I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a strong foundation in web development. I'm also proud to mention that I am Gate-qualified and have successfully cleared the JEE Advanced examination. In my coding journey, I've solved more than 500 problems across different coding platforms.

                                With a knack for problem-solving and a dedication to continuous learning, I've contributed to over 20 projects, honing my skills and gaining valuable experience along the way.

                                Thank you for visiting my website.
                            </p>
                            <div className="social-links">
                                <a className="px-1" href="https://github.com/ashwanidubey" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a className="px-1" href="mailto:ashwani786dubey@gmail.com">Gmail</a>
                                <a className="px-1" href="https://www.linkedin.com/in/ashwani-dubey-5a8490196/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
