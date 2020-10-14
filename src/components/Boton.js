import React from 'react';
//import { Button } from 'reactstrap';

export default (props) => {
  return (
  <button className="btn-dark" onClick={props.onClick}>{props.sign}</button>
);
};

/*export default (props) => {
    return (
    <Button color={props.color} onClick={props.onClick}>{props.sign}</Button>
  );
};
*/

