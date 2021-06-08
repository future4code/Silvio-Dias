export const goTo = (history,url) => {
    history.push(url)
}

export const goToBack = (history) => {
    history.goBack()
  };