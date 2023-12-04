import { useEffect } from "react";
import locationAction from "../../Actions/LocationAction";
import { useAppDispatch } from "../../redux/Hooks";
import { setMatchLocationData } from "../../redux/slices/matchLocationSlice";

export const useFetchLocationByZip = (zipsCode: string[]) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (zipsCode[0]) {
      locationAction
        .fetchLocationByZip(zipsCode)
        .then((res) => {
          dispatch(setMatchLocationData(res));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // console.log("Zipcodes is empty or data is already present");
    }
  }, [zipsCode]);
};
