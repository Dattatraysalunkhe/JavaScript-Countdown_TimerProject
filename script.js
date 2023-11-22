const endDate = "31 December 2023 12:59 PM"
const input = document.querySelectorAll("input")

document.getElementById("endDate").innerText = endDate;


const clock = () => {
    const end = new Date(endDate)
    const now = new Date()

    const diff = (end - now) / 1000;  //converted ms in sec

    //converted Days
    input[0].value = Math.floor(diff / 3600 / 24);

    input[1].value = Math.floor((diff / 3600) % 24)

    input[2].value = Math.floor((diff / 3600) % 60)

    input[3].value = Math.floor(diff % 60 )

}

setInterval( () => {
 
   clock()

},1000)

