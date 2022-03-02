import { render, screen } from "@testing-library/react";
import FeatureFlagViewDetails from "./view/FeatureFlagDetails/FeatureFlagViewDetails";
import {
  MOCK_ITEM_SWITCH,
  MOCK_ITEM_SWITCH_WITH_CHILDREN,
  MOCK_ITEM_SWITCH_WITH_SELECT,
} from "./AppTestingUtils";

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

  // todo: add more testing for on toggle of muiswitch component
});
