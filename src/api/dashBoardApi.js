import configDeterminator from "../configs/configDeterminator";
import axios from "axios";

export const getAllAssignmentForUser = emailId => {
  return axios.get(
    configDeterminator.cmpApiEndpoint + "/assignments?search=" + emailId,
    {
      headers: {
        Accept: "application/json"
      }
    }
  );
};
