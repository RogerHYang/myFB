import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LargeCard from "./large_card";

import { NavButton, ButtonLabel } from "../../../../utils/buttons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Filter = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonAccent = styled.div`
  height: 100%;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  ${({ isSelected }) =>
    isSelected &&
    css`
      border-bottom: 3px solid hsl(214, 89%, 52%);
    `}
`;

const Collage = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default ({ searchPattern }) => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const [filterId, setFilterId] = useState(0);

  let filterLabels;
  filterLabels = ["All Friends", "Mutual Friends"];
  if (user.id === sessionUser.id) {
    filterLabels = ["All Friends"];
  }

  let list = Object.values(user.friends || {});

  let mutualList = list.filter((friend) =>
    sessionUser.friends.hasOwnProperty(friend.id)
  );

  let nonMutualList = list.filter(
    (friend) => !sessionUser.friends.hasOwnProperty(friend.id)
  );

  if (filterId === 0) {
    list = mutualList.concat(nonMutualList);
  } else {
    list = mutualList;
  }

  if (searchPattern) {
    searchPattern = searchPattern.toLowerCase();
    list = list.filter(({ firstName, lastName }) =>
      firstName.concat(" ", lastName).toLowerCase().includes(searchPattern)
    );
  }

  return (
    <Container>
      <Filter>
        {filterLabels.map((label, i) => {
          const isSelected = filterId === i;
          return (
            <ButtonAccent key={i} isSelected={isSelected}>
              <NavButton isSelected={isSelected} onClick={() => setFilterId(i)}>
                <ButtonLabel
                  text={label}
                  color={isSelected ? "hsl(214, 89%, 52%)" : "inherit"}
                />
              </NavButton>
            </ButtonAccent>
          );
        })}
      </Filter>
      <Collage>
        {list.map((friend) => (
          <LargeCard key={friend.id} user={friend} />
        ))}
      </Collage>
    </Container>
  );
};
