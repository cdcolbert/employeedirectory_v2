import axios from "axios";

export default {
  getEmp: function() {
    return axios.get("https://randomuser.me/api/?results=15&nat=us");
  }
};

