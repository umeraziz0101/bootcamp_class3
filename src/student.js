import React from "react";

function Student(props) {
    return (
        <div>
            <p>
                ID : <span>{props.id}</span>
            </p>
            <p>
                Name : <span>{props.name}</span>
            </p>
            <p>
                Email : <span>{props.email}</span>
            </p>
            <p>
                City : <span>{props.city}</span>
            </p>
        </div>
    );
}

export default Student;
