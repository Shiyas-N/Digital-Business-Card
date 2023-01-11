import React from "react"

export default function Info(){
    return(
        <div className="info">
          <center>
            <img src="../images/picture.jpg"/>
            <div className="information">
                <h1>Muhammed Shiyas</h1>
                <h4>Frontend Developer</h4>
                <p>imshiyas.website</p>
            </div>
            <div className="btns">
                <a href="mailto:muhammedshiyasn811@gmail.com"><button className="btn-email"><i class="fa-solid fa-envelope"></i>Email</button></a>
                <a href="https://www.linkedin.com/login"><button className="btn-linkedin"><i class="fa-brands fa-linkedin"></i>
                LinkedIn</button></a>
            </div>
          </center>
        </div>
    )
}