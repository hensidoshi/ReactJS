import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacultyDetail(){
    let params=useParams();
    const navigate=useNavigate();
    const[faculty,setFaculty]=useState({});
    useEffect(()=>{
    fetch("https://65e6c4c253d564627a8cebb1.mockapi.io/faculty/"+params.id,
    {
        method:"GET"
    })
    .then((res)=>{return res.json();})
    .then((res)=>{
        setFaculty(res);
    });
    },[])
    return <>
    <div class="card col-md-3">
      <img src={faculty.facultyimage} class="card-img-top" 
      alt="..."/>
      <div class="card-body">   
      <h4 class="cars-text">Id:{faculty.id}</h4>
      <h4 class="card-text">Name: {faculty.facultyname}</h4>
      <h4 class="card-text">Age: {faculty.facultyage}</h4>
      <h4 class="card-text">Mobile Number: {faculty.facultymobile}</h4>
      <h4 class="card-text">Email: {faculty.facultyemail}</h4>

      <button class="btn btn-outline-success" 
      onClick={()=>{
        navigate("/faculty/edit/"+params.id);
      }}>Edit</button>

      <span style={{ marginRight: '10px' }}></span>

      <button class="btn btn-outline-danger"
        onClick={()=>{
        fetch("https://65e6c4c253d564627a8cebb1.mockapi.io/faculty/"+params.id,
        {
            method:"DELETE"
        })
        .then(()=>{navigate("/mockapi")});
        }}
      >Delete</button> 
      </div>
    </div>
    </>
}
export default FacultyDetail;