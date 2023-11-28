import { useEffect, useContext } from "react";
import locationAction from "../../Actions/LocationAction";
import { DogContext } from "../../context/DogContext";
import { DogZipCode } from "../../common/Interfaces";

export const useFetchLocationByZip = (zipsCode: DogZipCode[]) => {
  const { setMatchLocation } = useContext(DogContext);

  useEffect(() => {
    if (zipsCode[0]) {
      locationAction
        .fetchLocationByZip(zipsCode)
        .then((res) => {
          setMatchLocation(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Zipcodes is empty or data is already present");
    }
  }, [zipsCode]);
};
