import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { featureFormElements } from "../utils/FeatureFormElements";

import FeatureFlagViewDetails from "./FeatureFlagDetails/FeatureFlagViewDetails";

type Props = $ReadOnly<{}>;

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FeatureFlagView(props: Props): React.MixedElement {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        {featureFormElements.map((item, id) => {
          return (
            <div key={id}>
              {item.configRoot.map((root, id) => {
                const displayStyle = root.isSingleSettingCard
                  ? "inline"
                  : "flex";
                return (
                  <div key={id}>
                    <Box>{root.title}</Box>
                    <Grid container spacing={2}>
                      {root.contents.map((content, id) => {
                        return content.switches.map((itemSwitch, id) => {
                          return (
                            <Grid
                              item
                              xs={root.xs}
                              key={id}
                              sx={{ display: displayStyle }}
                            >
                              <Box
                                sx={{ boxSizing: "border-box", width: "100%" }}
                              >
                                <FeatureFlagViewDetails
                                  itemSwitch={itemSwitch}
                                />
                              </Box>
                            </Grid>
                          );
                        });
                      })}
                    </Grid>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Box>
  );
}
