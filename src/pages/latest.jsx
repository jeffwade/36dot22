// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { ModeContext } from "../components/plasmic/36_dot_22/PlasmicGlobalVariant__Mode";
import { PlasmicLatest } from "../components/plasmic/36_dot_22/PlasmicLatest";
import sketch from "../sketches/letterB.js";

function Latest() {
  return (
    <ModeContext.Provider value={undefined}>
      <PlasmicLatest
        p5Sketch={{
          props: {
            sketch: sketch,
            name: "latest",
          }
        }}
      />
    </ModeContext.Provider>
  );
}

export default Latest;
