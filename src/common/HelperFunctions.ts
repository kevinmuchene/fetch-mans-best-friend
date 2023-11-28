export function processZipCodes(input: string) {
  const zipCodes = input.split(" ");

  const validZipCodes = zipCodes.filter(
    (zipCode) => zipCode.length === 5 && /^\d+$/.test(zipCode)
  );

  return validZipCodes;
}

export function createUrl(dogBreeds, ageMin, ageMax, validZipCodes, sort) {
  let dogBreedsString = "";

  if (dogBreeds.length > 0) {
    dogBreedsString = dogBreeds
      .map((breed) => `breeds=${encodeURIComponent(breed)}`)
      .join("&");
  }

  return `?ageMin=${ageMin}&ageMax=${ageMax}${
    validZipCodes.length ? `&zipCodes=${validZipCodes.join(",")}` : ""
  }${dogBreedsString ? `&${dogBreedsString}` : ""}&size=20&sort=breed:${sort}`;
}
