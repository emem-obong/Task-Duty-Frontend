import React, { useState } from "react";
import arrowright from "../assets/icons/eva_arrow-ios-back-fill (1).png";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import Dropdown1 from "../components/Dropdown1";
import toast from "react-hot-toast";

const NewTask = ({baseURL}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending]=useState(false)

  const handleSubmit = async (e) => {
    setSending(true)
    e.preventDefault();

    const formData = {
      title,
      description,
      tag,
    };

    console.log(formData);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${baseURL}/api/task/create`, options);
    const data = await res.json();
    if (res.status===400){
      toast.error(data.message)
      setSending(false)
      return
    }
    toast.success(data.message)
    setSending(false)
    navigate("/task")

  };

  const navigate = useNavigate();

  
  return (
    <div className="container">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="navigate  d-flex align-items-center"
      >
        <img src={arrowright} alt="" />
        <h1 className="m-0">New Task</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="inputer d-flex flex-column gap-3 py-4"
      >
        <div className="position-relative">
          <label
            style={{
              top: "-30%",
              left: "2%",
            }}
            htmlFor="title"
            className="position-absolute text-secondary bg-white px-1"
          >
            Task Title
          </label>

          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-100 py-2 border rounded-2 px-2"
            type="text"
            id="title"
            placeholder="E.g project defense Assignment"
          />
        </div>
        <div className="position-relative">
          <label
            style={{
              top: "-5%",
              left: "2%",
            }}
            htmlFor="description"
            className="position-absolute text-secondary bg-white px-1"
          >
            Description
          </label>

          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-100 border rounded-2 px-2 py-2"
            id="description"
            placeholder="Briefly describe your task"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <Dropdown1 setTag={setTag} />

        {/* <Dropdown/> */}
        <button disabled={sending} className="done py-3 border rounded-3">Done</button>
      </form>
      <a className="anchor" href="#">
        back to top
      </a>
    </div>
  );
};

export default NewTask;
