import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacultyEdit() {
  let params=useParams();
  const navigate=useNavigate();
  const [data,setData]=useState({});
  useEffect(()=>{
    fetch("https://65e6c4c253d564627a8cebb1.mockapi.io/faculty/"+params.id,
    {
        method:"GET"
    })
    .then((res)=>{return res.json();})
    .then((res)=>{
        setData(res);
    });
    },[])
  return (
    <>
    <table class="table table-striped">
    <tbody>
    <tr>
        <td>Enter facultyname:</td>
        <td>
            <input 
                value={data.facultyname}
                onChange={(e)=>{
                setData({...data,facultyname:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter facultyage:</td>
        <td>
            <input 
                value={data.facultyage}
                onChange={(e)=>{
                setData({...data,facultyage:e.target.value});
            }} type="text" />   
        </td>
    </tr>

    <tr>
        <td>Enter facultyimage:</td>
        <td>
            <input 
                value={data.facultyimage}
                onChange={(e)=>{
                setData({...data,facultyimage:e.target.value});
            }} type="text" />
        </td>
    </tr>
        
    <tr>
        <td>Enter facultymobile:</td>
        <td>
            <input 
                value={data.facultymobile}
                onChange={(e)=>{
                setData({...data,facultymobile:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter facultyemail:</td>
        <td>
            <input 
                value={data.facultyemail}
                onChange={(e)=>{
                setData({...data,facultyemail:e.target.value});
            }} type="text" />
        </td>
    </tr>
    </tbody>
    </table>

    <div style={{ textAlign: 'center' }}>
      <button className="btn btn-outline-secondary" onClick={()=>{
        fetch("https://65e6c4c253d564627a8cebb1.mockapi.io/faculty/"+params.id,
        {
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(()=>{navigate("/facultydetails/"+params.id)});
      }}>
        Edit Faculty
      </button>
    </div>
    </>
  );
}
export default FacultyEdit;