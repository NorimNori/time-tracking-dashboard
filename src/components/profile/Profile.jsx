import profileImage from '@/assets/images/image-jeremy.png'
import './Profile.scss'

const Profile = () => {
  return (
    <div className="profile" role="region" aria-label="User profile">
      <img className="profile__image" src={profileImage} alt="Jeremy Robson's profile picture" />
      <div className="profile__info">
        <p className="profile__text">Report for</p>
        <h1 className="profile__name">Jeremy Robson</h1>
      </div>
    </div>
  )
}

export default Profile