// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5NqxLwkJf8dtHXPoVMH2rF
// Component: 8NUtQpwWWvU4

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
import { RichLayout } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: FNIk-CnxQYXU/codeComponent
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: u-J0rH0B-4/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_app_starter.module.css"; // plasmic-import: 5NqxLwkJf8dtHXPoVMH2rF/projectcss
import sty from "./PlasmicPageLayout.module.css"; // plasmic-import: 8NUtQpwWWvU4/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: PyW6TZpbbJLI/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: _xdH0GQIHPc0/icon

createPlasmicElementProxy;

export type PlasmicPageLayout__VariantMembers = {};
export type PlasmicPageLayout__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageLayout__VariantsArgs;
export const PlasmicPageLayout__VariantProps = new Array<VariantPropType>();

export type PlasmicPageLayout__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPageLayout__ArgsType;
export const PlasmicPageLayout__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPageLayout__OverridesType = {
  root?: p.Flex<typeof RichLayout>;
  loadingBoundary?: p.Flex<typeof LoadingBoundary>;
};

export interface DefaultPageLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPageLayout__RenderFunc(props: {
  variants: PlasmicPageLayout__VariantsArgs;
  args: PlasmicPageLayout__ArgsType;
  overrides: PlasmicPageLayout__OverridesType;
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
    <RichLayout
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root
      )}
      logoElement={
        <Icon2Icon
          className={classNames(projectcss.all, sty.svg__gt5Y5)}
          role={"img"}
        />
      }
      navMenuItems={[
        { path: "/", name: "Link 1" },
        { path: "/", name: "Link 2" }
      ]}
      simpleNavTheme={(() => {
        const __composite = { scheme: null };
        __composite["scheme"] = "primary";
        return __composite;
      })()}
      title={"App title" as const}
    >
      <LoadingBoundary
        data-plasmic-name={"loadingBoundary"}
        data-plasmic-override={overrides.loadingBoundary}
        className={classNames("__wab_instance", sty.loadingBoundary)}
        loadingState={
          <ph.DataCtxReader>
            {$ctx =>
              true ? (
                <div className={classNames(projectcss.all, sty.freeBox__vW262)}>
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__iIoQd)}
                    role={"img"}
                  />
                </div>
              ) : null
            }
          </ph.DataCtxReader>
        }
      >
        <ph.DataCtxReader>
          {$ctx =>
            true ? (
              <div className={classNames(projectcss.all, sty.freeBox__nKbxp)}>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <section
                      className={classNames(projectcss.all, sty.section__z3As)}
                    >
                      <h1
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1___397
                        )}
                      >
                        {"Untitled page"}
                      </h1>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___1Ukwr
                        )}
                      >
                        {
                          "Press the big blue + button to insert components like Tables, Text, Buttons, and Forms.\n\nJoin our Slack Community (icon in bottom left) for help!"
                        }
                      </div>
                    </section>
                  ),
                  value: args.children
                })}
              </div>
            ) : null
          }
        </ph.DataCtxReader>
      </LoadingBoundary>
    </RichLayout>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loadingBoundary"],
  loadingBoundary: ["loadingBoundary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof RichLayout;
  loadingBoundary: typeof LoadingBoundary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageLayout__VariantsArgs;
    args?: PlasmicPageLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPageLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPageLayout__ArgsType,
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
          internalArgPropNames: PlasmicPageLayout__ArgProps,
          internalVariantPropNames: PlasmicPageLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageLayout";
  } else {
    func.displayName = `PlasmicPageLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicPageLayout = Object.assign(
  // Top-level PlasmicPageLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loadingBoundary: makeNodeComponent("loadingBoundary"),

    // Metadata about props expected for PlasmicPageLayout
    internalVariantProps: PlasmicPageLayout__VariantProps,
    internalArgProps: PlasmicPageLayout__ArgProps
  }
);

export default PlasmicPageLayout;
/* prettier-ignore-end */