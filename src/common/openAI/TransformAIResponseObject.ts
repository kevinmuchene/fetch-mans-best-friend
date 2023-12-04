import axios from "axios";
import { openAIBreedSuggestionFunction } from "./openai";
import { useAppDispatch } from "../../redux/Hooks";
import { setAIGneratedActivities } from "../../redux/slices/aiGeneratedActivitesSlice";

interface data {
  name: string;
  breed: string;
}
const useGenerateActivities = () => {
  const dispatch = useAppDispatch();

  const generatedActivityByAI = async (dogData: data) => {
    const userString = `Dog's name is ${dogData.name}, and breed is ${dogData.breed}`;

    const url = "https://api.openai.com/v1/chat/completions";
    const params = {
      headers: {
        // Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,

        // Authorization: `Bearer ${import.meta.env.VITE_OPENAIAPI}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(openAIBreedSuggestionFunction(userString)),
    };

    try {
      const response = await axios.post(url, params.body, {
        headers: params.headers,
      });
      const res = JSON.parse(
        response.data.choices[0].message.function_call.arguments
      );

      dispatch(setAIGneratedActivities(res));
    } catch (error) {
      console.log("Error", error);
    }
  };

  return [generatedActivityByAI];
};

export default useGenerateActivities;
