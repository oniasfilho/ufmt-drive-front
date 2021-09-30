let UserProfile = () => {
  var username = ''

  var getUserName = () => {
    return username // Or pull this from cookie/localStorage
  }

  var setUserName = (name) => {
    username = name
    // Also set this in cookie/localStorage
  }

  return {
    getUserName: getUserName,
    setName: setUserName,
  }
}

export default UserProfile
