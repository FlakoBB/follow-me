import photo from '../assets/images/user-photo.jpg'

export const UserPhoto = () => {
  return `
    <figure class="user-photo">
      <img
        src='${photo}'
        draggable='false'
      />
    </figure>
  `
}
