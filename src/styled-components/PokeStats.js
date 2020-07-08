import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

// The highest possible value for any base stats in pokemon is 255
const maxStats = 255;

const PokeStatsBox = styled.div`
  padding: 15px 5px;
  min-width: 200px;
`;

const Stat = styled.div`
  padding: 2px 0;
  /* display: flex;
  flex-flow: row nowrap; */
`;

const StatBarContainer = styled.div`
  ${color}
  width: 100%;
  height: 10px;
  background-color: #d6d6d6;
`;

const StatBar = styled.div`
  width: ${(props) => props.statpercent + "%"};
  ${color}
  height: 100%;
`;

function PokeStats(props) {
  return (
    <PokeStatsBox>
      {props.stats &&
        Object.entries(props.stats).map(([key, value]) => (
          <Stat>
            {key}: {value}
            <StatBarContainer>
              <StatBar
                bg={"bg.homeGreen"}
                statpercent={Math.round((value / maxStats) * 100)}
              />
            </StatBarContainer>
          </Stat>
        ))}
    </PokeStatsBox>
  );
}

export default PokeStats;
