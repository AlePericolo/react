import React from "react"

const Gender = (props) => {

    let { gender } = props;
    //console.log(gender);

    switch(gender){
        case 'M':
            return (
                <span className="badge badge-success">Male</span>
            )
            break;
        case 'F':
            return (
                <span className="badge badge-danger">Female</span>
            )
            break;
        default:
            return null
            break;
    }
}
export default Gender