var goldenList = []
var indexlist = []
var healthList=["X","X","X","X","X","X","X","X","X","X",]
var goldenPiece = 0;


function createRandom(max, length) {
    const chars = "abcdef";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result + (Math.floor(Math.random() * max) + 1);
}



for (var j = 0; goldenList.length < 8; j++) {
    goldenList[j] = createRandom(5, 1)
    indexlist[j] = goldenList.indexOf(goldenList[j])
    if (indexlist[j] != j) {
        console.log("aynısı var");
        goldenList[j] = createRandom(5, 1)
        console.log(goldenList[j])
    }


}
console.log(goldenList);

function getParent(id) {
    console.log(id);

    for (var i = 0; i <= goldenList.length; i++) {
        if (id == goldenList[i]) {
            console.log("Tebrikler, Bir Altın Buldun.")

            if (goldenPiece < 8) {
                goldenPiece++
                console.log(goldenPiece)
                var index = goldenList.indexOf(id);
                goldenList[index]="0";
            }
            if (goldenPiece == 8) {
                document.getElementById("successText").style="visibility:visible;";
                document.getElementById("playAgainText").style="visibility:visible;";
                document.getElementById("playAgainButton").style="visibility:visible;";
            }


            var td = document.getElementById(id);
            if (!td.hasChildNodes()) {
                var img = document.createElement('img');
                img.src = "img/golden.png";
                img.style = "height:50px;width:50px;"
                img.className = "img-fluid"
                td.appendChild(img);
            }

        }
        // if (id!=goldenList[i]) {
        //     document.getElementById("healthText").innerText=healthList.toString().split(",");
        //     if(healthList[i]==goldenList.indexOf(id)){
        //         if(healthList[i]=="X"){healthList[i]=""
        //         console.log(healthList)
        //         healthText=healthList; 
        //         console.log(healthList)}
                
        //     }
            
        // }
    }
    console.log(goldenList);
}