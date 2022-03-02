// @flow

import type { SwitchType } from "../../types/FeatureFlagTypes";
import Switch from "@mui/material/Switch";
import FeatureFlagViewDetailsSelect from "./FeatureFlagViewDetailsSelect";
import Box from "@mui/material/Box";
import * as React from "react";
import { useState } from "react";
import FeatureFlagViewDetailsChildSwitch from "./FeatureFlagViewDetailsChildSwitch";

type Props = $ReadOnly<{
  itemSwitch: SwitchType,
  showChildSwitches: boolean,
}>;
export default function FeatureFlagViewDetailsSwitch({
  itemSwitch,
  showChildSwitches,
}: Props): React.MixedElement {
  const [switchState, setSwitchState] = useState(itemSwitch.defaultChecked);

  return (
    <>
      <span> {itemSwitch.label} </span>
      {itemSwitch.select != null && (
        <FeatureFlagViewDetailsSelect select={itemSwitch.select} />
      )}
      <Switch
        onChange={() => setSwitchState(!switchState)}
        checked={switchState}
        color={itemSwitch.color}
      />

      {showChildSwitches &&
        itemSwitch?.children?.map((childSwitch, i) => {
          return (
            <Box key={i}>
              <FeatureFlagViewDetailsChildSwitch
                itemSwitch={childSwitch}
                parentSwitchState={switchState}
              />
            </Box>
          );
        })}
    </>
  );
}
