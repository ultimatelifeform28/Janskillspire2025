import React from 'react';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from './UserProfileInfo';
import UserProfilePosts from './UserProfilePosts';

const UserProfile = () => {
    const userData = {
        name: "Jacorey Lasane",
        bio: "I'm an IT Specialist transitioning into software development, bringing over eight years of experience in IT support, networking, and systems administration across both military and civilian sectors. My background includes managing mobile assets for the DISA Mobility Program, leading teams to resolve complex technical issues, and ensuring the security and performance of enterprise systems. I'm skilled in Python, JavaScript, PowerShell, and automation tools, with a passion for building scalable, secure solutions. Currently pursuing degrees in cybersecurity and software development, I’m committed to driving digital transformation and leveling up in the tech space.",
        avatarUrl: "https://via.placeholder.com/150"
    };
  return (
    <div className="user-profile">
      <UserProfileHeader />
      <UserProfileInfo 
      name={userData.name}
      bio={userData.bio}
      avatarUrl={userData.avatarUrl}
      />
      <UserProfilePosts />
    </div>
  );
}

export default UserProfile;
// This component is the main container for the user profile page.
//  It imports and renders three child components: UserProfileHeader, UserProfileInfo, and UserProfilePosts.

