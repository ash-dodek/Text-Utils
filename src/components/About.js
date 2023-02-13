import React from 'react'

export default function About() {
  return (
    <>
        <div className="accordion container" id="accordionExample">
            <h1>About Us</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is this website?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is a text utility website, where you can do modifications in your provided text</strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What frameworks/libraries are used in making this?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                          <strong>This website is made in <a rel='noopener' target="_blank" href="http://reactjs.org">React JS</a> with the help of <a target="_blank" href="https://www.youtube.com/@CodeWithHarry">CodeWithHarry</a>'s React JS Course</strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        If you want to contribute
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                          <strong>You can contribute to this website, check on <a rel='noopener' target="_blank" href="https://github.com/ash-dodek/Text-Utils">Github</a></strong>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
