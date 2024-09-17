import React from "react";
import { IoStarSharp } from "react-icons/io5";

function Card({ link, mainhead, Foundername, FounderOf }) {
  return (
    <>
    <div className="container">
      <div class="card text-center">
        <div class="card-body CarouselCardBody">
          <div className=" d-flex justify-content-center my-4">
            <img class="card-img-top CardImg" src={link} alt="Card image cap" />
          </div>
          <p class="card-text">{mainhead}</p>
          <div >
            <div>
            <div className="Stars">
            <IoStarSharp color="#ffb400" />
              <IoStarSharp color="#ffb400" />
              <IoStarSharp color="#ffb400" />
              <IoStarSharp color="#ffb400" />
            </div>
            </div>
            <p>{Foundername}</p>
            <p>{FounderOf}</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
