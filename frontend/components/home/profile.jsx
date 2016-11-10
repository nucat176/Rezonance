import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <h1 className="profile-header">{this.props.currentUser.username}</h1>
    );
  }
}

export default Profile;
