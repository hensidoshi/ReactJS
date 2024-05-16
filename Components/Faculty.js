const fac = [
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
    name: "Dr.Gopi Sanghani",
    description: "Dean - School of Computer science",
    study: "Ph.D. , M.E.(CE)",
    experience: "23+ years",
    working_since: "Jul-2012",
  },
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
    name: "Dr. Nilesh Ghabhava",
    description: "Professor",
    study: "Ph.D. , M.E.(CE)",
    experience: "20+ years",
    working_since: "Jul-2009",
  },
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/317---28-04-2023-01-32-29.jpg",
    name: "Prof. Wassem Ghada",
    description: "Assistant Professor",
    study: "Ph.D.(pursuring) , M.Tech(ICT)",
    experience: "14+ years",
    working_since: "Aug-2021",
  },
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
    name: "Prof. Arjun Bala",
    description: "Assistant Professor",
    study: "Ph.D.(pursuring) , M.Tech(CSE)",
    experience: "13+ years",
    working_since: "Jul-2013",
  },
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/12---28-04-2023-02-06-51.jpg",
    name: "Prof. Firoz Sherasiya",
    description: "Assistant Professor",
    study: "Ph.D.(pursuring) , M.E.(CE)",
    experience: "18+ years",
    working_since: "Dec-2022",
  },
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg",
    name: "Prof. Maulik Trivedi",
    description: "Assistant Professor",
    study: "Ph.D.(pursuring) , M.Tech.(CSE)",
    experience: "15+ years",
    working_since: "Jun-2009",
  },
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
    name: "Dr. Pradyumansinh Jadeja",
    description: "Assistant Professor",
    study: "Ph.D. ,M.E.(CE)",
    experience: "18+ years",
    working_since: "Jul-2009",
  },
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg",
    name: "Prof. Swati Sharma",
    description: "Assistant Professor",
    study: "M.Tech. (CSE)",
    experience: "15+ years",
    working_since: "May-2013",
  },
];

var newArr = fac.map((e)=>{
  return(
    <>
          <div class="card col-md-3">
          <img src={e.img} class="card-img-top" 
          alt="..."/>
          <div class="card-body">
               <h5 class="card-title">{e.name}</h5>
              <p class="card-text"> {e.description}</p>
              <hr/>
              <p class="card-text"> {e.study}</p>
              <hr/>
              <table>       
               <tr>
                  <td>
                    <p class="text-secondary">Experience</p>
                      <p class="card-text text-center text text-primary-emphasis bg-primary-sublt font fw-bold bs-primary-bg-sutable">
                              {e.experience}
                          </p>
                      </td>
                      <td>
                      <p class="text-secondary">working_since</p>
                          <p class="card-text text-center text text-primary-emphasis bg-primary-sublt font fw-bold bs-primary-bg-sutable">
                              {e.working_since}
                          </p>
                      </td>
                  </tr>    
              </table>     
           </div>
      </div>   
    </>
  )
})

const Faculty = () => {
  return <div class="row m-2 p-2">{newArr};</div>;
}
export default Faculty