import React from "react";
import All from "./All";
import "./App.css";

import { useI18n } from "./useI18n";
import { I18nContext } from "./I18nContext";

import ToDo from "./ds/ToDo/ToDo";
import SortedAndRotated from "./ds/Algo/SortedAndRotated";
import MergeSortedArrays from "./ds/Algo/MergeSortedArrays";
import RotateArrayByDPosition from "./ds/Algo/RotateArrayByDPosition";
import RemoveDuplicates from "./ds/Algo/RemoveDuplicatesFromArray";

function App() {
  const { t } = useI18n();
  const [ds, setDs] = React.useState(true);

  const handleOnDrop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  };

  const handleOnDragStart = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const handleOnDragOver = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      {/* <div
        id="drop"
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid",
        }}
      ></div>
      <div
        id="drag"
        draggable
        onDragStart={handleOnDragStart}
        style={{
          width: "60px",
          height: "60px",
          border: "1px solid",
        }}
      >
        Rashmi
      </div>
      <div className="carousal">
        {[1, 2, 3, 4].map((i) => {
          return <div className="carousal-item">Item {i}</div>;
        })}
      </div>
      <h1 className="App">{t("welcome")}</h1>
      <I18nContext.Provider value={t}>
        <All />
      </I18nContext.Provider>

      <p>Selected language is: {navigator.language}</p> */}

      {/* <ToDo /> */}
      {/* <SortedAndRotated /> */}
      {/* <MergeSortedArrays /> */}
      {/* <RotateArrayByDPosition /> */}
      <RemoveDuplicates />
    </>
  );
}

export default App;
