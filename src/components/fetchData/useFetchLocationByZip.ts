import { useEffect, useState } from "react";
import locationAction from "../../Actions/LocationAction";

export const useFetchLocationByZip = (zipsCode: []) => {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    if (zipsCode[0]) {
      debugger;
      console.log(zipsCode);
      locationAction
        .fetchLocationByZip(zipsCode)
        .then((res) => {
          console.log(res);
          setLocationData(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Zipcodes is empty or data is already present");
    }
  }, [zipsCode]);

  return [locationData];
};
