// @flow
import * as React from "react";

export type SectionTitleType = {
  title: string,
};

export type GeneralFeatureFlag = {
  label: string,
  select?: React.Node, // not sure if this could be called children
  defaultToggleValue?: boolean,
};

export type MenuItem = {
  value: string | number,
  label: string,
};

export type Select = {
  labelId: string,
  id: string,
  value: string | number,
  label: string,
  menuitems: Array<MenuItem>,
};

type ChildrenSwitchType = {
  label: string,
  defaultChecked: boolean,
  color: string,
  select: ?Select,
};

export type SwitchType = {
  label: string,
  defaultChecked: boolean,
  color: string,
  select: ?Select,
  children?: ?any, // TODO: type this object
};

export type Contents = { switches: Array<SwitchType> };

export type Root = {
  title: string,
  xs: number,
  isSingleSettingCard: boolean,
  contents: Array<Contents>,
};

export type ConfigRoot = {
  configRoot: Array<Root>,
};
