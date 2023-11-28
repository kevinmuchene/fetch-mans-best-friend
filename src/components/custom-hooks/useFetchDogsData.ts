import { useEffect, useState } from "react";
import dogAction from "../../Actions/DogAction";

interface dogsData {
  img: string;
  name: string;
  age: number;
  breed: string;
  zip_code: string;
  id: string;
}

const useFetchDogsData = (dogsId: string[]) => {
  const [dogsData, setDogsData] = useState<dogsData[]>([]);
  useEffect(() => {
    if (dogsId) {
      dogAction
        .fetchDogs(dogsId)
        .then((res) => {
          // console.log(res);
          setDogsData(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("dogid is empty or data is already present");
    }
  }, [dogsId]);

  return [dogsData];
};

export default useFetchDogsData;

/**
 * 
 * const mockDataArray = [
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_16086.jpg",
    name: "Haley",
    age: 0,
    breed: "Whippet",
    zip_code: "43466",
    id: "onGFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_18590.jpg",
    name: "Renee",
    age: 0,
    breed: "Whippet",
    zip_code: "59473",
    id: "vnGFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_7528.jpg",
    name: "Vincenzo",
    age: 0,
    breed: "Whippet",
    zip_code: "08321",
    id: "83GFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_1678.jpg",
    name: "Rachelle",
    age: 1,
    breed: "Gordon Setter",
    zip_code: "10523",
    id: "rXGFTIcBOvEgQ5OCx6Al",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_2031.jpg",
    name: "Janessa",
    age: 1,
    breed: "Gordon Setter",
    zip_code: "59830",
    id: "u3GFTIcBOvEgQ5OCx6Al",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02109525-Saint_Bernard/n02109525_10805.jpg",
    name: "Eric",
    age: 0,
    breed: "Saint Bernard",
    zip_code: "62532",
    id: "33GFTIcBOvEgQ5OCx9I_",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02109525-Saint_Bernard/n02109525_13410.jpg",
    name: "Fannie",
    age: 0,
    breed: "Saint Bernard",
    zip_code: "32122",
    id: "_XGFTIcBOvEgQ5OCx9JA",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02109525-Saint_Bernard/n02109525_13655.jpg",
    name: "Yvette",
    age: 0,
    breed: "Saint Bernard",
    zip_code: "28781",
    id: "AXGFTIcBOvEgQ5OCx9NA",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02109525-Saint_Bernard/n02109525_2369.jpg",
    name: "Marshall",
    age: 0,
    breed: "Saint Bernard",
    zip_code: "76250",
    id: "MnGFTIcBOvEgQ5OCx9NA",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02109525-Saint_Bernard/n02109525_5966.jpg",
    name: "Keenan",
    age: 1,
    breed: "Saint Bernard",
    zip_code: "52352",
    id: "VHGFTIcBOvEgQ5OCx9NA",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_11307.jpg",
    name: "Maeve",
    age: 0,
    breed: "Whippet",
    zip_code: "14221",
    id: "WXGFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_13244.jpg",
    name: "Hoyt",
    age: 1,
    breed: "Whippet",
    zip_code: "15446",
    id: "c3GFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_14374.jpg",
    name: "Zella",
    age: 1,
    breed: "Whippet",
    zip_code: "22654",
    id: "iHGFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_14828.jpg",
    name: "Ayden",
    age: 0,
    breed: "Whippet",
    zip_code: "72530",
    id: "j3GFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_392.jpg",
    name: "Theo",
    age: 0,
    breed: "Whippet",
    zip_code: "72632",
    id: "2nGFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_6699.jpg",
    name: "Junius",
    age: 0,
    breed: "Whippet",
    zip_code: "13470",
    id: "6nGFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_7736.jpg",
    name: "Annabelle",
    age: 1,
    breed: "Whippet",
    zip_code: "85934",
    id: "-HGFTIcBOvEgQ5OCx5Qe",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_2397.jpg",
    name: "Sharon",
    age: 0,
    breed: "Gordon Setter",
    zip_code: "20193",
    id: "xXGFTIcBOvEgQ5OCx6Al",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_2907.jpg",
    name: "Dameon",
    age: 1,
    breed: "Gordon Setter",
    zip_code: "31207",
    id: "2HGFTIcBOvEgQ5OCx6Al",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_296.jpg",
    name: "Julien",
    age: 0,
    breed: "Gordon Setter",
    zip_code: "79059",
    id: "23GFTIcBOvEgQ5OCx6Al",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_3239.jpg",
    name: "Doug",
    age: 1,
    breed: "Gordon Setter",
    zip_code: "45880",
    id: "4XGFTIcBOvEgQ5OCx6Al",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_3954.jpg",
    name: "Jayce",
    age: 0,
    breed: "Gordon Setter",
    zip_code: "97522",
    id: "-HGFTIcBOvEgQ5OCx6Al",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_709.jpg",
    name: "Gideon",
    age: 0,
    breed: "Gordon Setter",
    zip_code: "15435",
    id: "HnGFTIcBOvEgQ5OCx6El",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_714.jpg",
    name: "Nolan",
    age: 1,
    breed: "Gordon Setter",
    zip_code: "35959",
    id: "H3GFTIcBOvEgQ5OCx6El",
  },
  {
    img: "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_751.jpg",
    name: "Ludie",
    age: 0,
    breed: "Gordon Setter",
    zip_code: "66861",
    id: "IHGFTIcBOvEgQ5OCx6El",
  },
];
 */
