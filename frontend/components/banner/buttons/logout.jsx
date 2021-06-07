import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/session_actions";

export default ({className}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signout = () =>
    dispatch(logout()).then(() => history.replace("/login"));
  return (
    <div className={className} onClick={signout}>
      <FontAwesomeIcon icon="sign-out-alt" /> Log Out
    </div>
  );
};
