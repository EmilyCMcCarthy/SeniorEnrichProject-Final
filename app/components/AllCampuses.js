import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const AllCampuses = (props) => {
    
    const campuses = props.campuses;
    console.log(campuses, "Campuses")
    return (
        <div>
            <h3>Campuses</h3>
            <div className="row">
            {
                campuses.map(campus => (
                    
                    <div className="col-xs-4" key={ campus.id }>
                    <Link to={`campuses/${campus.id}`}>
                    <h5>{ campus.name }</h5>
                    </Link>
                    <p>{ campus.location }</p>
                    
                    </div>
                    
                ))
            }
            </div>
        </div>
    );
};

export default AllCampuses;