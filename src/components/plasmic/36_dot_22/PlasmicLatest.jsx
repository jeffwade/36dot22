// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: byT51ah2LGWp7TY4NhRWN5
// Component: Ts9o4wPDsr
import * as React from "react";
import { Link } from "gatsby";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ControlButton from "../../ControlButton"; // plasmic-import: MeM-3KPeHe/component
import Logo from "../../Logo"; // plasmic-import: Ez2OM_1IjG/component
import P5Sketch from "../../P5Sketch"; // plasmic-import: xVVehOIDYb/component
import { useScreenVariants as useScreenVariantszHblDRlCkyA0O } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZHblDRlCkyA0O/globalVariant
import { useMode } from "./PlasmicGlobalVariant__Mode"; // plasmic-import: 9hwEG37kNX/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_36_dot_22.module.css"; // plasmic-import: byT51ah2LGWp7TY4NhRWN5/projectcss
import * as sty from "./PlasmicLatest.module.css"; // plasmic-import: Ts9o4wPDsr/css
import InfoIcon from "./icons/PlasmicIcon__Info"; // plasmic-import: rh7Opgr7v/icon
import DarkmodeIcon from "./icons/PlasmicIcon__Darkmode"; // plasmic-import: GFhQaEFLo/icon
import LightmodeIcon from "./icons/PlasmicIcon__Lightmode"; // plasmic-import: ovRZdneIh/icon
import ArrowLeftIcon from "./icons/PlasmicIcon__ArrowLeft"; // plasmic-import: PJGoLlwR2/icon
import ListIcon from "./icons/PlasmicIcon__List"; // plasmic-import: osUcStubx/icon
import ArrowRightIcon from "./icons/PlasmicIcon__ArrowRight"; // plasmic-import: ON7qZLXAQxN/icon

export const PlasmicLatest__VariantProps = new Array();

export const PlasmicLatest__ArgProps = new Array();

function PlasmicLatest__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszHblDRlCkyA0O(),
    mode: useMode()
  });

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {(hasVariant(globalVariants, "screen", "desktopOnly") ? true : true) ? (
          <div
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_tokens,
              sty.root,
              {
                [projectcss.global_mode_dark]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                ),

                [sty.rootglobal_mode_dark]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                )
              }
            )}
          >
            <nav
              className={classNames(projectcss.all, sty.nav__y4KKq, {
                [sty.navglobal_mode_dark__y4KKQcm4Qj]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                )
              })}
            >
              <ControlButton
                data-plasmic-name={"info"}
                data-plasmic-override={overrides.info}
                className={classNames("__wab_instance", sty.info)}
                icon={
                  <InfoIcon
                    data-plasmic-name={"infoIcon2"}
                    data-plasmic-override={overrides.infoIcon2}
                    className={classNames(projectcss.all, sty.infoIcon2)}
                    role={"img"}
                  />
                }
              />

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__pjSjj
                )}
                component={Link}
                href={"/"}
                platform={"gatsby"}
              >
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                ) ? (
                  <Logo
                    data-plasmic-name={"logo"}
                    data-plasmic-override={overrides.logo}
                    className={classNames("__wab_instance", sty.logo)}
                  />
                ) : null}
              </p.PlasmicLink>

              <ControlButton
                data-plasmic-name={"modeToggle"}
                data-plasmic-override={overrides.modeToggle}
                className={classNames("__wab_instance", sty.modeToggle)}
                icon={
                  <p.PlasmicIcon
                    data-plasmic-name={"infoIcon"}
                    data-plasmic-override={overrides.infoIcon}
                    PlasmicIconType={
                      hasVariant(globalVariants, "mode", "dark")
                        ? LightmodeIcon
                        : DarkmodeIcon
                    }
                    className={classNames(projectcss.all, sty.infoIcon, {
                      [sty.infoIconglobal_mode_dark]: hasVariant(
                        globalVariants,
                        "mode",
                        "dark"
                      )
                    })}
                    role={"img"}
                  />
                }
              />
            </nav>

            {(
              hasVariant(globalVariants, "screen", "desktopOnly") ? true : true
            ) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                {true ? (
                  <P5Sketch
                    data-plasmic-name={"p5Sketch"}
                    data-plasmic-override={overrides.p5Sketch}
                    className={classNames("__wab_instance", sty.p5Sketch)}
                  />
                ) : null}
              </p.Stack>
            ) : null}

            <nav
              className={classNames(projectcss.all, sty.nav__yl7QF, {
                [sty.navglobal_mode_dark__yl7QFcm4Qj]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                )
              })}
            >
              <ControlButton
                data-plasmic-name={"prev"}
                data-plasmic-override={overrides.prev}
                className={classNames("__wab_instance", sty.prev)}
                icon={
                  <ArrowLeftIcon
                    data-plasmic-name={"infoIcon3"}
                    data-plasmic-override={overrides.infoIcon3}
                    className={classNames(projectcss.all, sty.infoIcon3)}
                    role={"img"}
                  />
                }
              />

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__jqUyF
                )}
                component={Link}
                href={"/list"}
                platform={"gatsby"}
              >
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                ) ? (
                  <ControlButton
                    data-plasmic-name={"list"}
                    data-plasmic-override={overrides.list}
                    className={classNames("__wab_instance", sty.list)}
                    icon={
                      <ListIcon
                        data-plasmic-name={"infoIcon5"}
                        data-plasmic-override={overrides.infoIcon5}
                        className={classNames(projectcss.all, sty.infoIcon5)}
                        role={"img"}
                      />
                    }
                  />
                ) : null}
              </p.PlasmicLink>

              <ControlButton
                data-plasmic-name={"next"}
                data-plasmic-override={overrides.next}
                className={classNames("__wab_instance", sty.next)}
                icon={
                  <ArrowRightIcon
                    data-plasmic-name={"infoIcon4"}
                    data-plasmic-override={overrides.infoIcon4}
                    className={classNames(projectcss.all, sty.infoIcon4)}
                    role={"img"}
                  />
                }
              />
            </nav>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "info",
    "infoIcon2",
    "logo",
    "modeToggle",
    "infoIcon",
    "freeBox",
    "p5Sketch",
    "prev",
    "infoIcon3",
    "list",
    "infoIcon5",
    "next",
    "infoIcon4"
  ],

  info: ["info", "infoIcon2"],
  infoIcon2: ["infoIcon2"],
  logo: ["logo"],
  modeToggle: ["modeToggle", "infoIcon"],
  infoIcon: ["infoIcon"],
  freeBox: ["freeBox", "p5Sketch"],
  p5Sketch: ["p5Sketch"],
  prev: ["prev", "infoIcon3"],
  infoIcon3: ["infoIcon3"],
  list: ["list", "infoIcon5"],
  infoIcon5: ["infoIcon5"],
  next: ["next", "infoIcon4"],
  infoIcon4: ["infoIcon4"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLatest__ArgProps,
      internalVariantPropNames: PlasmicLatest__VariantProps
    });

    return PlasmicLatest__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLatest";
  } else {
    func.displayName = `PlasmicLatest.${nodeName}`;
  }
  return func;
}

export const PlasmicLatest = Object.assign(
  // Top-level PlasmicLatest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    info: makeNodeComponent("info"),
    infoIcon2: makeNodeComponent("infoIcon2"),
    logo: makeNodeComponent("logo"),
    modeToggle: makeNodeComponent("modeToggle"),
    infoIcon: makeNodeComponent("infoIcon"),
    freeBox: makeNodeComponent("freeBox"),
    p5Sketch: makeNodeComponent("p5Sketch"),
    prev: makeNodeComponent("prev"),
    infoIcon3: makeNodeComponent("infoIcon3"),
    list: makeNodeComponent("list"),
    infoIcon5: makeNodeComponent("infoIcon5"),
    next: makeNodeComponent("next"),
    infoIcon4: makeNodeComponent("infoIcon4"),
    // Metadata about props expected for PlasmicLatest
    internalVariantProps: PlasmicLatest__VariantProps,
    internalArgProps: PlasmicLatest__ArgProps
  }
);

export default PlasmicLatest;
/* prettier-ignore-end */
