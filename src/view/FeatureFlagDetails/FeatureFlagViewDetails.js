// @flow

import type { SwitchType } from "../../types/FeatureFlagTypes";
import { Item } from "./../FeatureFlagView";

import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FeatureFlagViewDetailsSwitch from "./FeatureFlagViewDetailsSwitch";

import { useState } from "react";

import * as React from "react";

type Props = $ReadOnly<{
  itemSwitch: SwitchType,
}>;

export default function FeatureFlagViewDetails({
  itemSwitch,
}: Props): React.MixedElement {
  const [showChildSwitches, setShowChildSwitches] = useState(false);

  return (
    <Item>
      <FeatureFlagViewDetailsSwitch
        itemSwitch={itemSwitch}
        showChildSwitches={showChildSwitches}
      />

      {itemSwitch?.children != null && (
        <IconButton
          color="primary"
          component="span"
          onClick={() => {
            setShowChildSwitches(!showChildSwitches);
          }}
        >
          <ArrowDropDownIcon />
        </IconButton>
      )}
    </Item>
  );
}
