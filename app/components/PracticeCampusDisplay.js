import React from 'react';
import { Link } from 'react-router-dom';

export default function PracticeCampusDisplay (props) {

  const campuses = props.campuses;

  return (
    <div>
            <h3>Campuses</h3>
            <div>
                <Link to={`/addCampus`}><button>+</button></Link>
            </div>
            <div className="row">
            {
                campuses.map(campus => (
                    
                    <div className="col-xs-4" key={ campus.id }>
                    <img src={campus.image}></img>
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
}
