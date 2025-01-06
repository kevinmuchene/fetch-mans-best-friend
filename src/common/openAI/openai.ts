export const openAIBreedSuggestionFunction = (input: string) => {
  return {
    model: "gpt-40-2024-11-20",
    messages: [
      {
        role: "user",
        content: input,
      },
    ],
    functions: [
      {
        name: "todosExtracted",
        description:
          "I will give you a dog's breed, name of the dog and your task is to generate breed-based activity: Here is an example: I have a dog its breed is Bedlington Terrier, and its name is Tony. Your task is to generate 4 points breed-based activity recommendations. I have given you the following an example: 1. Agility Training: Bedlington Terriers are agile and quick learners. Setting up an agility course in your backyard or enrolling Tony in an agility class would be both mentally and physically stimulating for him. 2. Swimming: Bedlingtons are known to be good swimmers. If you have access to a safe swimming area, this could be a great way for Tony to exercise. 3. Fetch and Frisbee: Utilize Tony's quick reflexes and love for running with games of fetch or frisbee in a spacious, secure area. 4.Hide and Seek: Engage his curious nature with a game of hide and seek. Hide his favorite toys or treats around the house or garden for him to find. ",
        parameters: {
          type: "object",
          properties: {
            activity1: {
              type: "string",
              description: "activity",
            },
            activity2: {
              type: "string",
              description: "activity",
            },
            activity3: {
              type: "string",
              description: "activity",
            },
            activity4: {
              type: "string",
              description: "activity",
            },
          },
          required: ["activity1", "activity2", "activity3", "activity4"],
        },
      },
    ],
    temperature: 1,
    max_tokens: 255,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };
};
