// import PhotoCard from "./PhotoCard"

// const PhotoList = ({photos}) => {
//   return (
//     <div className="grid grid-cols-3 gap-6 p-4">
//         {
//             photos.map(photo => (
//                 <PhotoCard key={photo.id} photo={photo} />
//             ))
//         }
//     </div>
//   )
// }

// export default PhotoList

import PhotoCard from "./PhotoCard"

const PhotoList = ({photos}) => {
  return (
    <div className="img-grid">
        {
            photos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))
        }
    </div>
  )
}

export default PhotoList