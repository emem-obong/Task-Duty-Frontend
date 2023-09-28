import React from "react";
import editImage from "../assets/icons/clarity_note-edit-line.png";
import deleteimage from "../assets/icons/fluent_delete-24-regular.png";
import { useNavigate } from "react-router-dom";
import addImage from "../assets/icons/fluent_add-24-filled.png";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const Task = ({baseURL}) => {
  const { data, loading, error } = useFetch(`${baseURL}/api/task`);
  const navigate = useNavigate();

  const handleDelete= async (id)=>{
    const options={
      method:"DELETE"
    }
    const res = await fetch(`${baseURL}/api/task/${id}`, options)
    const data= await res.json()

    if (res.status === 200){
      toast.success(data.message)
      setTimeout(() => {
        navigate(0)
      }, 1000);
      return
    }
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-between gap-1">
        <h3>My Task</h3>
        <div
          onClick={() => {
            navigate("/new");
          }}
          className="image  d-flex gap-1 text-center"
        >
          <img src={addImage} alt="" />
          <p> Add New Task</p>
        </div>
      </div>

      {data
        ? data.map((datum) => {
            const { title, description, tag, _id } = datum;
            const tagcolor =
              tag.toLowerCase() === "urgent" ? "#F38383" : "#73C3A6";
            return (
              <div className="container" key={_id}>
                <div className="border mt-4 rounded-3 p-3">
                  <div className="d-flex justify-content-between mt-3 border-bottom pb-3 mb-3 ">
                    <p className="tags" style={{ color: tagcolor }}>
                      {tag}
                    </p>

                    <div className=" click d-flex gap-2 align-items-center">
                      <Link
                        to={`/edit/${datum._id}`}
                        className="button1 text-decoration-none border rounded px-1 py-1"
                      >
                        <img src={editImage} alt="" />
                        Edit
                      </Link>
                      <button onClick={()=>{
                        handleDelete(datum._id)
                      }}  className="button2 px-1 py-1 ">
                        <img src={deleteimage} alt="" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-start">{title}</p>
                  <p className="text-start">{description}</p>
                </div>
              </div>
            );
          })
        : null}

      {loading ? <p>loading...</p> : null}
      {error ? <p>{error}</p> : null}
      <a className="anchor" href="#top">
        Back to Top
      </a>
    </div>
  );
};

export default Task;
