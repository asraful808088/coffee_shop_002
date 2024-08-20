import axios from "axios";
import config from "../config";
interface FATCH_OPTIONS {
  prodectId: string;
  callback: any;
}

export default function getProdect(option: FATCH_OPTIONS) {
  axios
    .get(`${config.HOST_SERVER_BASE_POINT}/review/${option.prodectId}`)
    .then((res) => {
      option.callback(res);
    })
    .catch((err) => {
      option.callback(err);
    });
}
