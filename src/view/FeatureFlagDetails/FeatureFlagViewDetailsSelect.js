// @flow

import MUISelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { Select } from "../../types/FeatureFlagTypes";
import { useState } from "react";

import * as React from "react";

type Props = $ReadOnly<{
  select: Select,
}>;

export default function FeatureFlagViewDetailsSelect({
  select,
}: Props): React.MixedElement {
  const [selectState, setSelectState] = useState(select.value);

  const handleChange = (event) => {
    setSelectState(event.target.value);
  };

  return (
    <MUISelect
      labelId={select.labelId}
      id={select.id}
      value={selectState}
      label={select.label}
      onChange={handleChange}
      sx={{ height: 26 }}
    >
      {select?.menuitems?.map((item, id) => {
        return (
          <MenuItem key={id} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })}
    </MUISelect>
  );
}
