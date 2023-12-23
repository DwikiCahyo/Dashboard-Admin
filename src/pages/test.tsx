import React, { useEffect, useState } from 'react';

function Test() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log('Ini use effect 1', value1);
    console.log('Ini use effect 2', value2);
  }, [value1, value2]);
  return (
    <React.Fragment>
      <h1>Test </h1>
      <div className="btn btn-primary" onClick={() => setValue1(value1 + 1)}>
        Button 1
      </div>
      <div
        className="btn btn-secondary ms-1"
        onClick={() => setValue2(value2 + 1)}
      >
        Button 2
      </div>
    </React.Fragment>
  );
}

export default Test;
