import { useState } from "react";
let isEdit = false;
let id=0; //id=-1;
const Form = () => {
  var [faculty, setFaculty] = useState(["avb", "vms"]);
  var [data, setData] = useState("");
  return (
    <>
      <form>
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                value={data}
                onChange={(e) => {
                  setData(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="submit"
                value="submit"
                onClick={(e) => {
                    //console.log(isEdit);
                    /*if(isEdit){
                        //alert("hello");
                        faculty[id]=data;
                    }*/
                    if(id>0){
                        faculty[id]=data;
                        id=-1
                    }
                    else{
                        setFaculty([...faculty, data]);
                    }
                    setData("");
                    e.preventDefault();
                }}
              />
            </td>
          </tr>
        </table>
        <ul>
          {faculty.map((fac, i) => {
            return (
              <li>
                {i} {fac} {""}

                <button
                  onClick={(e) => {
                    isEdit=true;
                    id=i; 
                    setData(faculty[i]);
                    e.preventDefault();
                  }}
                >
                  Edit
                </button>
                {" "}
                <button
                  onClick={() => {
                    let temp = faculty.filter((index) => {
                      return index !== fac;
                    });
                    setFaculty(temp);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
};
export default Form;
//{i}{fac}