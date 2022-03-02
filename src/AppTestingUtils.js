export const MOCK_ITEM_SWITCH: SwitchType = {
  label: "CASE MANAGEMENT",
  defaultChecked: true,
  color: "primary",
  select: null,
};

export const MOCK_ITEM_SWITCH_WITH_CHILDREN: SwitchType = {
  label: "CASE MANAGEMENT",
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
};

export const MOCK_ITEM_SWITCH_WITH_SELECT: SwitchType = {
  label: "CASE MANAGEMENT",
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
};
