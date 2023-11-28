import axios from "axios";
import { useContext } from "react";
import { openAIBreedSuggestionFunction } from "./openai";
import { DogContext } from "../../context/DogContext";

interface data {
  name: string;
  breed: string;
}
const useGenerateActivities = () => {
  const { setAiGeneratedActivities } = useContext(DogContext);

  const generatedActivityByAI = async (dogData: data) => {
    console.log("Calling generated activites");

    // if (isObjectEmpty(aiGeneratedActivities) && !isObjectEmpty(dogData)) {
    const userString = `Dog's name is ${dogData.name}, and breed is ${dogData.breed}`;
    console.log(userString);
    const url = "https://api.openai.com/v1/chat/completions";
    const params = {
      headers: {
        // Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
        Authorization: `Bearer ${import.meta.env.VITE_OPENAIAPI}`,

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

      // console.log(res);
      setAiGeneratedActivities(res);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return [generatedActivityByAI];
};

export default useGenerateActivities;
