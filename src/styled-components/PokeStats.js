import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

import { getPokemonStatAbbreviation } from "../Utils";

// The highest possible value for any base stats in pokemon is 255
const maxStats = 255;

const PokeStatsBox = styled.div`
    padding: 18px 5px;
    min-width: 200px;
`;

const Stat = styled.div`
    padding: 2px 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

const StatLabel = styled.div`
    min-width: 40px;
`;

const StatBarContainer = styled.div`
    ${color}
    width: 100%;
    height: 1.05rem;
    background-color: #d6d6d6;
    margin: 2px 0;
    margin-left: 4px;
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
                props.stats.map((stat) => (
                    <Stat key={stat.stat.name}>
                        <StatLabel>
                            {getPokemonStatAbbreviation(stat.stat.name)}:{" "}
                        </StatLabel>
                        <StatLabel>{stat.base_stat}</StatLabel>

                        <StatBarContainer>
                            <StatBar
                                bg={"bg.primary"}
                                statpercent={Math.round(
                                    (stat.base_stat / maxStats) * 100
                                )}
                            />
                        </StatBarContainer>
                    </Stat>
                ))}
        </PokeStatsBox>
    );
}

export default PokeStats;
