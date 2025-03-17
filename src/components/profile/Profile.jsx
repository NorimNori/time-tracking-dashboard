import profileImage from '@/assets/images/image-jeremy.png'

const Profile = () => {
  return (
    <div className="profile">
      <img className="profile__image" src={profileImage} alt="Profile image" />
      <div className="profile__info">
        <p className="profile__text">Report for</p>
        <h1 className="profile__name">Jeremy Robson</h1>
      </div>
    </div>
  )
}

export default Profile