import type { SwitchType } from "../utils/FeatureFormElements";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import * as React from "react";

type Props = $ReadOnly<{
  itemSwitch: SwitchType,
  parentSwitchState: boolean,
}>;

export default function FeatureFlagViewDetailsChildSwitch({
  itemSwitch,
  parentSwitchState,
}: Props): React.MixedElement {
  const [childSwitchState, setChildSwitchState] = useState(parentSwitchState);
  console.log(childSwitchState);
  return (
    <>
      <span> {itemSwitch.label} </span>
      <Switch
        onChange={() => setChildSwitchState(!setChildSwitchState)}
        checked={childSwitchState}
        color={itemSwitch.color}
      />
    </>
  );
}
