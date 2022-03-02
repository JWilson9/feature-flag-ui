// @flow

import type {
  SectionTitleType,
  GeneralFeatureFlag,
} from "../types/FeatureFlagTypes";

export const sectionTitles: Array<SectionTitleType> = [
  {
    title: "general",
  },
];

const generalObject = {
  select: null,
  defaultToggleValue: true,
};

export const featureFlagItems: Array<GeneralFeatureFlag> = [
  {
    label: "Case Management",
    ...generalObject,
  },
  {
    label: "Map Timeline",
    ...generalObject,
  },
  {
    label: "Views & briefings",
    ...generalObject,
  },
];
