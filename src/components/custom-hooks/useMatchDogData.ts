import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { selectFavoriteIDs } from "../../redux/slices/favoriteDogsIdSlice";
import DogAction from "../../Actions/DogAction";
import { setMatchDogData } from "../../redux/slices/matchDogSlice";

export const useMatchDogData = () => {
  const [zipcode, setZipcode] = useState<string[]>([]);

  const favoriteIDs = useAppSelector(selectFavoriteIDs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (favoriteIDs.favoriteDogsId.length > 0) {
      const fetchFavoriteMatchDog = async () => {
        try {
          const matchResponse = await DogAction.fetchFavoriteMatch(
            favoriteIDs.favoriteDogsId.slice(0, 100)
          );

          const matchId = [];
          const zipCode = [];

          matchId.push(matchResponse.match);

          const dogsResponse = await DogAction.fetchDogs(matchId);
          zipCode.push(dogsResponse[0].zip_code);

          dispatch(setMatchDogData(dogsResponse));
          setZipcode(zipCode);
        } catch (err) {
          console.log(err);
        }
      };
      fetchFavoriteMatchDog();
    }
  }, [favoriteIDs]);

  return { zipcode };
};
