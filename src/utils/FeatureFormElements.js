// @flow

import type { ConfigRoot } from "../types/FeatureFlagTypes";

export const featureFormElements: Array<ConfigRoot> = [
  {
    configRoot: [
      {
        title: "GENERAL",
        xs: 4,
        isSingleSettingCard: false,
        contents: [
          {
            switches: [
              {
                label: "CASE MANAGEMENT",
                defaultChecked: true,
                color: "primary",
                select: null,
              },
              {
                label: "MAP TIMELINE",
                defaultChecked: true,
                color: "primary",
                select: {
                  labelId: "map-timeline-select-label",
                  id: "map-timeline-simple-select",
                  value: 10,
                  label: "Age",
                  menuitems: [
                    {
                      value: 10,
                      label: "ten",
                    },
                    {
                      value: 20,
                      label: "twenty",
                    },
                  ],
                },
              },
              {
                label: "VIEW & BRIEFING",
                defaultChecked: true,
                color: "primary",
                select: null,
              },
            ],
          },
          {
            switches: [
              {
                label: "NOTIFICATIONS",
                defaultChecked: true,
                color: "primary",
                select: null,
              },
              {
                label: "MASS COUMMUNICATIONS",
                defaultChecked: true,
                color: "primary",
                select: {
                  labelId: "mass-communications-select-label",
                  id: "mass-communication-simple-select",
                  value: 10,
                  label: "",
                  menuitems: [
                    {
                      value: 10,
                      label: "ten",
                    },
                    {
                      value: 20,
                      label: "twenty",
                    },
                  ],
                },
              },
              {
                label: "TRAFFIC CAMERAS",
                defaultChecked: true,
                color: "primary",
                select: null,
              },
            ],
          },
        ],
      },
      {
        title: "ALERTS",
        xs: 4,
        isSingleSettingCard: true,
        contents: [
          {
            switches: [
              {
                label: "ALERT MANAGER",
                defaultChecked: true,
                color: "primary",
                select: null,
              },
              {
                label: "ALERT RULES",
                defaultChecked: true,
                color: "primary",
                select: {
                  labelId: "alert-rules-select-label",
                  id: "alert-rules-select",
                  value: 10,
                  label: "Age",
                  menuitems: [
                    {
                      value: 10,
                      label: "10",
                    },
                    {
                      value: 20,
                      label: "20",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        title: "SETTINGS",
        xs: 4,
        isSingleSettingCard: true,
        contents: [
          {
            switches: [
              {
                label: "AUDIT LOG",
                defaultChecked: true,
                color: "primary",
                select: null,
                children: null,
              },
              {
                label: "USER",
                defaultChecked: true,
                color: "primary",
                select: null,
                children: [
                  {
                    label: "USER ADD",
                    defaultChecked: true,
                    color: "primary",
                    select: null,
                  },
                  {
                    label: "USER DELETE",
                    defaultChecked: true,
                    color: "primary",
                    select: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
