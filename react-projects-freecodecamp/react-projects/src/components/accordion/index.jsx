import React, { useState } from "react";
import data from "./data.js";
import "./styles.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  function handleMultiSelection(id) {
    let copyMultiple = [...multiple];

    const findIndex = copyMultiple.indexOf(id);

    if (findIndex === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndex, 1);
    }

    setMultiple(copyMultiple);
  }

  function handleMultiselection() {
    setenableMultiSelection(!enableMultiSelection);
    if (enableMultiSelection === true) {
      setSelected(null);
      setMultiple([]);
    }
  }

  return (
    <div className="wrapper">
      <button onClick={handleMultiselection}>
        Enable/Disable Multiselection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question} </h3>
              </div>
              <span>+</span>
              {(
                enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1
                  : selected === dataItem.id
              ) ? (
                <p>{dataItem.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
}

export default Accordion;
