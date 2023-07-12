// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5NqxLwkJf8dtHXPoVMH2rF
// Component: 3KRlq4x-V2

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_app_starter.module.css"; // plasmic-import: 5NqxLwkJf8dtHXPoVMH2rF/projectcss
import sty from "./PlasmicDishSubmitComponent.module.css"; // plasmic-import: 3KRlq4x-V2/css

createPlasmicElementProxy;

export type PlasmicDishSubmitComponent__VariantMembers = {};
export type PlasmicDishSubmitComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicDishSubmitComponent__VariantsArgs;
export const PlasmicDishSubmitComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicDishSubmitComponent__ArgsType = {};
type ArgPropType = keyof PlasmicDishSubmitComponent__ArgsType;
export const PlasmicDishSubmitComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicDishSubmitComponent__OverridesType = {
  dishSubmitButton?: p.Flex<typeof AntdButton>;
  text?: p.Flex<"div">;
};

export interface DefaultDishSubmitComponentProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicDishSubmitComponent__RenderFunc(props: {
  variants: PlasmicDishSubmitComponent__VariantsArgs;
  args: PlasmicDishSubmitComponent__ArgsType;
  overrides: PlasmicDishSubmitComponent__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <AntdButton
      data-plasmic-name={"dishSubmitButton"}
      data-plasmic-override={overrides.dishSubmitButton}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.dishSubmitButton
      )}
      size={"small" as const}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Submit"}
      </div>
    </AntdButton>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  dishSubmitButton: ["dishSubmitButton", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  dishSubmitButton: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDishSubmitComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDishSubmitComponent__VariantsArgs;
    args?: PlasmicDishSubmitComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDishSubmitComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDishSubmitComponent__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDishSubmitComponent__ArgProps,
          internalVariantPropNames: PlasmicDishSubmitComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDishSubmitComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dishSubmitButton") {
    func.displayName = "PlasmicDishSubmitComponent";
  } else {
    func.displayName = `PlasmicDishSubmitComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicDishSubmitComponent = Object.assign(
  // Top-level PlasmicDishSubmitComponent renders the root element
  makeNodeComponent("dishSubmitButton"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDishSubmitComponent
    internalVariantProps: PlasmicDishSubmitComponent__VariantProps,
    internalArgProps: PlasmicDishSubmitComponent__ArgProps
  }
);

export default PlasmicDishSubmitComponent;
/* prettier-ignore-end */