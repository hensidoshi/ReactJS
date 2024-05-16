/*import faculties from "./Data/faculties.txt"

function Fac_exp() {
    const filter_fac = faculties.filter((fac) => {
        let experience = parseInt(fac.FacultyExperience.split("+")[0]);
        return experience >= 10;
    });

    const formatedFac = filter_fac.map((fac) => {
        return (
            <>
                <div class="card col-md-3">
                    <img src={fac.FacultyImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{fac.FacultyName}</h5>
                        <p class="card-text">{fac.FacultyDesignation}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{fac.FacultyEducationQualification}</li>
                        <li class="list-group-item">{fac.FacultyWorkingSince}</li>
                        <li class="list-group-item">{fac.FacultyExperience}</li>
                        <li class="list-group-item">{fac.FacultyID}</li>
                    </ul>
                </div>
            </>
        );
    });

    return formatedFac;
}

export default Fac_exp;*/
