//i stil need to work on it, its not working 
function ZodiacSign() {
        document.getElementById('currentDate').valueAsDate = new Date();
        function GetZodiacSign(day,month){
           if ((month==1 && day>=20)||(month==2 && day <=18))
            return "Aquarius";
           else if ((month==2 && day>=19)||(month==3 && day <=20))
            return "Pisces";
              else if ((month==3 && day>=21)||(month==4 && day <=19))
            return "Aries";
              else if ((month==4 && day>=20)||(month==5 && day <=20))
            return "Taurus";
                else if ((month==5 && day>=21)||(month==6 && day <=20))
            return "Gemini";
                else if ((month==6 && day>=21)||(month==7 && day <=22))
            return "Cancer";
                else if ((month==7 && day>=23)||(month==8 && day <=22))
            return "Leo";
                else if ((month==8 && day>=23)||(month==9 && day <=22))
            return "Virgo";
                else if ((month==9 && day>=23)||(month==10 && day <=22))
            return "Libra";
                else if ((month==10 && day>=23)||(month==11 && day <=21))
            return "Scorpio";
                else if ((month==11 && day>=22)||(month==12 && day <=21))
            return "Sagittarius";
                else if ((month==12 && day>=22)||(month==1 && day <=19))
            return "Capricorn";
            }

}
function calculateAge() {
    let birthDate = document.getElementById("BirthDate").value;
    window.location.href = "age.html?birthDate=" + birthDate;
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ageForm").addEventListener("submit", (e) => {
        e.preventDefault(); // stop page refresh
        calculateAge();
    });
});
function displayZodiacSign() {
    let birthDate = document.getElementById("BirthDate").value;
    let date = new Date(birthDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let zodiacSign = GetZodiacSign(day, month);
    document.getElementById("zodiacSign").textContent = zodiacSign;
}
function displayAge() {
    let birthDate = document.getElementById("BirthDate").value;
    let date = new Date(birthDate);
    let today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    let monthDifference = today.getMonth() - date.getMonth();
    if (monthDifference < 0) {
        age--;
    }
    document.getElementById("age").textContent = age;
}
