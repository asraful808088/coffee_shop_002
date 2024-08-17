import axios from "axios";
import { config } from "../../config";
export function postProdectItems({ data }, result) {
  const host = `${config.SERVER_HOST}/prodectTrain`;
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  axios
    .post(host, data)
    .then((res) => {
      if (result) {
        result({ res: res });
      }
    })
    .catch((err) => {
      if (result) {
        result({ res: err });
      }
    });
}
