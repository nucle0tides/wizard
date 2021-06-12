import React from 'react';
import './Step.scss';

const Step = ({ type, title, options, values, onChange }) => {
    return (
        <>
          <h1>{title}</h1>
          <ul>
            {options.map(o => (
                <li
                  key={o}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={values[type][o]}
                      onChange={onChange}
                      name={o}
                      data-type={type}
                    />
                    <div>{o}</div>
                  </label>
                </li>
            ))}
          </ul>
        </>
    );
};

export default Step;
