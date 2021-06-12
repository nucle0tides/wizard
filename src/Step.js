import React from 'react';

const Step = ({ type, title, options, values, onChange }) => {
    return (
        <>
          <h1>{title}</h1>
          {options.map(o => (
              <span
                key={o}
              >
                <input
                  type="checkbox"
                  checked={values[type][o]}
                  onChange={onChange}
                  name={o}
                  data-type={type}
                />
                <label>
                  {o}
                </label>
              </span>
          ))}
        </>
    );
};

export default Step;
