export const checkDate = (date) => {
    const currentTime = new Date()
    const yearCurrent = currentTime.getFullYear()
    const monthCurrent = currentTime.getMonth()
    const dayCurrent = currentTime.getDay()

    const inputDate = new Date(date)
    const yearInput = inputDate.getFullYear()
    const monthInput = inputDate.getMonth()
    const dayInput = currentTime.getDay()

    const age = yearCurrent - yearInput
    console.log(date)
    console.log(inputDate)

    if(age >= 18){
        if(age === 18){
            if(monthCurrent > monthInput){
                return true
            }else if(monthCurrent === monthInput){
                if(dayInput >= dayCurrent){
                    return true
                }else{
                    return false
                }

                }else{
                    return false
                }
            }

    return true

    }else{
        return false
    }
  }