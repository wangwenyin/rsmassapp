const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  username: state => state.user.username,
  rolesName: state => state.user.rolesName
}
export default getters
