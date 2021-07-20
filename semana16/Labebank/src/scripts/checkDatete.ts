export const checkDate = (date:string) => {

    const currentTime = new Date()
    const yearCurrent = currentTime.getFullYear()
    const monthCurrent = currentTime.getMonth()
    const dayCurrent = currentTime.getDay()

    const inputDate = new Date(Date.parse(date))
    const yearInput = inputDate.getFullYear()
    const monthInput = inputDate.getMonth()
    const dayInput = currentTime.getDay()

    const age = yearCurrent - yearInput

    if(age >= 18){
        if(age === 18 && monthCurrent > monthInput){
            return true
            }else if(monthCurrent === monthInput && dayInput >= dayCurrent){
                return true

            }else{
                return false
            }

    return true

    }else{
        return false
    }
  }