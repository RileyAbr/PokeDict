import React from "react";
import styled from "styled-components";
import { color, border } from "styled-system";

// Styled components
import Types from "../../../styled-components/Types";

const DetailCard = styled.article`
  ${color};
  max-width: 700px;
  margin: auto;
  border-radius: 3px;
  padding: 10px;
`;

const CardHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px 10px 15px;
  border-bottom: solid 1px black;
  ${border};
`;

const CardName = styled.h2`
  font-weight: bold;
  display: inline;
  margin-right: 0.5rem;
`;

const CardID = styled.h3`
  ${color};
  display: inline;
`;

const CardBody = styled.div`
  padding: 0 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const CardSprite = styled.img`
  width: 200px;
  height: auto;
`;

const CardStats = styled.div`
  /* Testing values */
  border: 2px solid black;
  ${border};
  border-radius: 3px;
  width: 200px;
`;

const CardBio = styled.section`
  padding: 0px 20px;
`;

const CardGenus = styled.h2`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  line-height: 1.2rem;
`;

const CardSubheading = styled.h4`
  text-align: left;
  width: 100%;
  ${color}
  margin: 20px 0;
  padding: 0.4rem 1rem;
`;

const CardProfile = styled.section`
  display: flex;
  flex-flow: row wrap;
  padding: 4px;
`;

const CardTableItem = styled.td`
  padding: 0.75rem 0;
  padding-right: 35px;
  &:nth-child(2n + 1) {
    font-weight: bold;
  }
`;

// Main componenet
function PokeDetailCard(props) {
  return (
    <DetailCard bg={"bg.cardWhite"}>
      {/* Header */}
      <CardHeader borderColor={"border.grey"}>
        <div>
          <CardName>{props.pokemon.name}</CardName>
          <CardID color={"font.grey"}>#{props.pokemon.id}</CardID>
        </div>
        <Types
          firstType={props.pokemon.types[0]}
          secondType={props.pokemon.types[1]}
        />
      </CardHeader>

      {/* Body */}
      <CardBody>
        <CardSprite src={props.pokemon.image} alt={props.pokemon.name} />
        <CardStats borderColor={"border.grey"}>
          {props.pokemon.stats &&
            Object.entries(props.pokemon.stats).map(([key, value]) => (
              <div key={key}>
                {key}: {value}
              </div>
            ))}
        </CardStats>

        {/* Bio section */}
        <CardBio>
          <CardGenus>{props.pokemon.genus}</CardGenus>
          <CardDescription>{props.pokemon.description}</CardDescription>
        </CardBio>

        {/* Profile section */}
        <CardSubheading color={"font.white"} bg={"bg.homeGreen"}>
          Profile
        </CardSubheading>
        <CardProfile>
          <table>
            <tbody>
              <tr>
                <CardTableItem>Height:</CardTableItem>
                <CardTableItem>{props.pokemon.height} m</CardTableItem>
              </tr>
              <tr>
                <CardTableItem>Catch Rate:</CardTableItem>
                <CardTableItem>catch_rate</CardTableItem>
              </tr>
              <tr>
                <CardTableItem>Egg Groups:</CardTableItem>
                <CardTableItem>
                  {props.pokemon.egg_groups
                    ? props.pokemon.egg_groups.map((element) => (
                        <div key={element}>
                          {element.charAt(0).toUpperCase() + element.slice(1)}
                        </div>
                      ))
                    : ""}
                </CardTableItem>
              </tr>
              <tr>
                <CardTableItem>Abilities</CardTableItem>
                <CardTableItem>
                  {props.pokemon.abilities
                    ? props.pokemon.abilities.map((element) => (
                        <div key={element}>
                          {element.charAt(0).toUpperCase() + element.slice(1)}
                        </div>
                      ))
                    : ""}
                </CardTableItem>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <CardTableItem>Weight:</CardTableItem>
                <CardTableItem>{props.pokemon.weight} kg</CardTableItem>
              </tr>
              <tr>
                <CardTableItem>Gender Ratio:</CardTableItem>
                <CardTableItem>gender_ratio</CardTableItem>
              </tr>
              <tr>
                <CardTableItem>Hatch Steps:</CardTableItem>
                <CardTableItem>hatch_steps</CardTableItem>
              </tr>
              <tr>
                <CardTableItem>EVs:</CardTableItem>
                <CardTableItem>evs</CardTableItem>
              </tr>
            </tbody>
          </table>
        </CardProfile>

        {/* Unused */}
        {/* <h4 className="detail-card-section-header">Damage When Attacked</h4>
        <section></section> */}
      </CardBody>
    </DetailCard>
  );
}

export default PokeDetailCard;
