import React from 'react';
import { useSelector } from 'react-redux';
import ProfileList from './profileList';
import AddProfile from './addProfile';
import EditProfile from './editProfile';
import ProfileView from './profileVIew';
import ProfileActionHeaderLeft from './ProfileActionHeaderLeft';
import ProfileActionHeaderRight from "./ProfileActionHeaderRight";
import ActionHeader from '../../components/layouts/ActionHeader';
import { MainWrapper } from "../../components/UI/Layout";
import './profile.css';

const Profile = (props) => {
  const { showAddProfile, showEditProfile, showViewProfile } = useSelector(({ profileReducer }) => ({
    showAddProfile: profileReducer.showAddProfile,
    showEditProfile: profileReducer.showEditProfile,
    showViewProfile: profileReducer.showViewProfile
  }))
  console.log(props)
  return (
    <React.Fragment>
      <ActionHeader
        leftComponent={<ProfileActionHeaderLeft />}
        rightComponent={<ProfileActionHeaderRight />}
      />
      <div className="profile-wrapper">
        <div className="profile-view">
          <MainWrapper>
            <ProfileList />
          </MainWrapper>
        </div>
        <div className="profile-action">
          {showAddProfile && <AddProfile />}
          {showEditProfile && <EditProfile />}
          {showViewProfile && <ProfileView />}
        </div>
      </div>
    </React.Fragment>

  )
}
export default Profile;
