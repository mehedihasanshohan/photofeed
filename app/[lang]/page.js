// import { getDictionary } from "./disctionaries";
// import PhotoList from "@/components/PhotoList";

// export default async function Home() {

//   const response = await fetch(`${process.env.BASE_API_URL}/photos`);
//   const photos = await response.json();

//   return (
//     <PhotoList photos={photos} />
//   );
// }

import { getDictionary } from "./dictionaries";

export default async function Home ({params: {lang}}){
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <h2>{dictionary.followers}</h2>
    </div>
  );
}