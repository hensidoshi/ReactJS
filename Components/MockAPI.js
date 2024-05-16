import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const MockAPI = () => {

  const [faculties, setFaculties] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    fetch("https://65e6c4c253d564627a8cebb1.mockapi.io/faculty")
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        setFaculties(res);
    });
  },[]);

  const formatedFaculty = faculties.map((fac)=>{
    return(
        <>
        <div class="card col-md-3">
          <img src={fac.facultyimage} class="card-img-top" 
          alt="..."/>
          <div class="card-body">   
          <h4 class="cars-text">Id:{fac.id}</h4>
          <h4 class="card-text">Name: {fac.facultyname}</h4>
          <button class="btn btn-outline-primary m-2" onClick={()=>{
            navigate("../facultydetails/" + fac.id)
          }}>View more</button>
          <button class="btn btn-outline-danger m-2" onClick={()=>{
            fetch("https://65e6c4c253d564627a8cebb1.mockapi.io/faculty/"+fac.id,
            {
              method:"DELETE"
            })
          }}>Delete</button>
          </div>
        </div>
        </>
    );
  });
  return (
    <div>
      <div className="row m-2 p-2">{formatedFaculty}</div>
      <div style={{ textAlign: 'center' }}>
        <button className="btn btn-outline-secondary"
        onClick={()=>{navigate("/faculty/add")}}
        >Add Faculty
        </button>
      </div>
    </div>
  );
};
export default MockAPI;