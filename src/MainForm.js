import React, { useState } from 'react';
import Step from './Step';

const options = ['dog', 'cat', 'fish', 'rabbit'];
const LIKE = 'like';
const DISLIKE = 'dislike';

const MainForm = ({}) => {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({
        [LIKE]: options.reduce((acc, val) => {
            acc[val] = false;
            return acc;
        }, {}),
        [DISLIKE]: options.reduce((acc, val) => {
            acc[val] = false;
            return acc;
        }, {}),
    });

    const next = () => setStep(s => s + 1);
    const prev = () => setStep(s => s - 1);

    const handleChange = (e) => {
        const { name, dataset: { type } } = e.target;
        setValues(vals => ({
            ...vals,
            [type]: {
                ...vals[type],
                [name]: !vals[type][name]
            }
        }));
    };

    const steps = () => {
        const shared = {
            onChange: handleChange,
            options: options,
            values: values,
        };

        switch (step) {
        case 1:
            return (
                <Step
                  type={LIKE}
                  title="What animals do you like?"
                  {...shared}
                />
            );
        case 2:
            return (
                <Step
                  type={DISLIKE}
                  title="What animals do you dislike?"
                  {...shared}
                />
            );
        default:
            return <span />;
        }
    };

    return (
        <>
          <form onSubmit={() => { alert(JSON.stringify(values)); }}>
            {steps()}
            <div>
              {step > 1 && (
                  <button onClick={prev}>Previous</button>
              )}
              {step < 2 && (
                  <button onClick={next}>Next</button>
              )}
              {step === 2 && (
                  <button type="submit">Submit</button>
              )}
            </div>
          </form>
        </>
    );
};

export default MainForm;
