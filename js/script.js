
function getIdElement(id) {
    const element = document.getElementById(id);
    return element;
}

// call button functionality 
getIdElement("cards-btns").addEventListener("click", function (e) {


    if (e.target.className.includes("call-btn")) {
        const callBtn = e.target;
        const coinBtn = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].children[0].innerText;
        const cardTitle = callBtn.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.children[1].children[3].children[0].innerText
        const currenTime = new Date()

        
        const currentCoin = Number(coinBtn);

        if (currentCoin < 20) {
            alert("❌ You don't have enough coins! You need at least 20 coins to make a call.")
            return;
        }
        let newCoin = currentCoin - 20;

        alert(`📞 Calling ${cardTitle} ${serviceNumber}`)

        getIdElement("coin-icon").innerText = newCoin;


        const callHistory = document.createElement("div");
        callHistory.innerHTML = `
            <div class="w-full bg-gray-100 p-3 rounded-lg flex justify-between items-center">
                        <div>
                            <h3 class="font-bold">${cardTitle}</h3>
                            <p>${serviceNumber}</p>
                        </div>

                        <p>${currenTime.toLocaleTimeString()}</p>
                    </div>
        `

        getIdElement("call-history").append(callHistory);

    }
    else if (e.target.className.includes("copy-btn")) {
        const callBtn = e.target;
        const serviceNumber = callBtn.parentNode.parentNode.children[1].children[3].children[0].innerText;
        const copyBtn = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[2].children[0].children[0].innerText;

        const currentCopyBtn = Number(copyBtn)
        
        let newCopyCount = currentCopyBtn + 1;

        getIdElement("copy").innerText = newCopyCount;

        navigator.clipboard.writeText(serviceNumber)
        alert(`Number copied ${serviceNumber}`)



    }
    else if(e.target.className.includes("icon-heart")){
        const callBtn = e.target;
        const heartBtn = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0].innerText;
        const currentHearts = Number(heartBtn);
        
        let newHearts = currentHearts + 1;
        
        getIdElement("heart-icon").innerText = newHearts;
    }

})

// call history functionality
getIdElement("clear-btn").addEventListener("click", function () {
    getIdElement("call-history").innerHTML = '';
})




