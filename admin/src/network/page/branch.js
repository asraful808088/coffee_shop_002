// import axios from "axios";
// import { config } from "./../../config";
import isEqual from "utility/isEql/isEql";

export function postOurBranch({ populerBranch = [], memo = [] }, result) {
  const removeImage = [];
  memo.forEach((element, index) => {
    const find = populerBranch.find((element2, index2) => {
      return isEqual(element2.image, element);
    });
    if (!find) {
      removeImage.push(element);
    }
  });
  for (const iterator of heroImageContext.image) {
    if (iterator.webUrl) {
      formData.append(`file-${filecount}`, JSON.stringify(iterator));
    } else {
      formData.append(`file-${filecount}`, iterator.fullFile);
    }

    filecount++;
  }

  //   axios
  //     .post(`${config.SERVER_HOST}/home/branchInfo`)
  //     .then((res) => {
  //       if (result) {
  //         result(res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       if (result) {
  //         result(err);
  //       }
  //     });
}
