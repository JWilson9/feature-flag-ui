import { render, screen } from "@testing-library/react";
import FeatureFlagViewDetails from "./view/FeatureFlagDetails/FeatureFlagViewDetails";
import App from "./App";
import type { SwitchType } from "./types/FeatureFlagTypes";

const MOCK_ITEM_SWITCH: SwitchType = {
  label: "CASE MANAGEMENT",
  defaultChecked: true,
  color: "primary",
  select: null,
};

const MOCK_ITEM_SWITCH_WITH_CHILDREN: SwitchType = {
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

const MOCK_ITEM_SWITCH_WITH_SELECT: SwitchType = {
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

describe("FeatureFlagViewDetails", () => {
  test("renders feature flag title section", () => {
    render(<FeatureFlagViewDetails itemSwitch={MOCK_ITEM_SWITCH} />);
    const featureFlagSectionTitle = screen.getByText(MOCK_ITEM_SWITCH.label);
    expect(featureFlagSectionTitle).toBeInTheDocument();
  });

  test("does not render dropdown icon if feature flag section has no children", () => {
    render(<FeatureFlagViewDetails itemSwitch={MOCK_ITEM_SWITCH} />);
    expect(screen.queryByTestId("ArrowDropDownIcon")).toBeNull();
  });

  test("renders dropdown icon if feature flag section has children", () => {
    render(
      <FeatureFlagViewDetails itemSwitch={MOCK_ITEM_SWITCH_WITH_CHILDREN} />
    );
    expect(screen.getByTestId("ArrowDropDownIcon")).toBeInTheDocument();
  });

  test("does not render select dropdown if select is not preset in the form schema", () => {
    render(<FeatureFlagViewDetails itemSwitch={MOCK_ITEM_SWITCH} />);
    expect(screen.queryByTestId("view-details-select")).toBeNull();
  });

  test("renders select dropdown if select is preset in the form schema", () => {
    render(
      <FeatureFlagViewDetails itemSwitch={MOCK_ITEM_SWITCH_WITH_SELECT} />
    );
    expect(screen.getByTestId("view-details-select")).toBeInTheDocument();
  });
});
