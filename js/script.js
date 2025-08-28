
function getIdElement(id){
    const element = document.getElementById(id);
    return element;
}

getIdElement("cards-btns").addEventListener("click", function (e){


    if(e.target.className.includes("call-btn")){
        const callBtn = e.target;
        const coinBtn = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].children[0].innerText;
        const heatBtn = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0].innerText;
        const copyBtn = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].innerText;
        const cardTitle = callBtn.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.children[1].children[3].children[0].innerText
        console.log(serviceNumber)

        const currentCoin = Number(coinBtn);
        
        if(currentCoin < 20){
            alert("❌ You don't have enough coins! You need at least 20 coins to make a call.")
            return;
        }
        let newCoin = currentCoin - 20;
        
        alert(`📞 Calling ${cardTitle} ${serviceNumber}`)

        getIdElement("coin-icon").innerText = newCoin;

        

        
    }
    
})