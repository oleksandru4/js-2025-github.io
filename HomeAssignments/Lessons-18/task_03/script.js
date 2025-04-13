class AgeCalculator{
    constructor() {
        this.birthDayInput = document.querySelector('#birthDayInput')
        this.ageOutput = document.getElementById('ageOutput')

        this.calculateAge = this.calculateAge.bind(this)
        this.birthDayInput.onchange = this.calculateAge
    }

    // чи був день наролження в поточному році
    isHadBirthdayThisYear(currentDate, birthDate) {
        let monthDifference = currentDate.getMonth() - birthDate.getMonth()
        // console.log(monthDifference, currentDate.getDate(), birthDate.getDate())
        return (monthDifference > 0 || (monthDifference === 0 && currentDate.getDate() > birthDate.getDate()))
    }

    calculateAge() {
        let birthDate = birthDayInput.valueAsDate

         if (birthDate) {
            let currentDate = new Date()
            let age = currentDate.getFullYear() - birthDate.getFullYear()
            this.ageOutput.value = this.isHadBirthdayThisYear(currentDate, birthDate) ? age : --age
         } else {
            this.ageOutput.value = '' // якщо дата народження не введена, очищається к-ть років
         }
    }
}

window.onload = function() {
  let myAgeCalculator = new AgeCalculator()
  myAgeCalculator.birthDayInput.value = '2025-01-01'
}