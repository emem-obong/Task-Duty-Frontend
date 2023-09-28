import React from "react";
import imageComponent from "./../assets/icons/Component 1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-md-flex align-items-center py-5">
      <div className="text-start px-5">
        <h1>
          Manage your Task on <span>Task Duty</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aut neque libero, fuga, autem earum quae consequuntur sequi deserunt
          sit assumenda, quasi ratione explicabo? Quidem maiores eos dolore
          dignissimos officiis?
        </p>
        <Link to="/task" className=" homelink py-2 px-3 text-decoration-none ">
          Go to My Task
        </Link>
      </div>
      <img className="w-100" src={imageComponent} alt="" />
    </div>
  );
};

export default Home;
