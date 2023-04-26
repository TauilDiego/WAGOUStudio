import {useTheme} from "vuetify";

export default function () {

  const theme = useTheme()

  function changeTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
  }


  return {
    theme,
    changeTheme
  }
}
