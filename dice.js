function showDots() {

    for (let dot of dots) {
        const dotElement = document.querySelector("#" + dot);

        dotElement.style.display = "none";

        switch (diceCount) {
            case 1:
                if (dot === "dot4") {
                    dotElement.style.display = "block";
                }
                break;
            case 2:
                if (dot === "dot1" || dot === "dot7") {
                    dotElement.style.display = "block";
                }
                break;
            case 3:
                if (dot === "dot1" || dot === "dot4" || dot === "dot7") {
                    dotElement.style.display = "block";
                }
                break;
            case 4:
                if (dot === "dot1" || dot === "dot2" || dot === "dot6" || dot === "dot7") {
                    dotElement.style.display = "block";
                }
                break;
            case 5:
                if (dot === "dot1" || dot === "dot2" || dot === "dot4" || dot === "dot6" || dot === "dot7") {
                    dotElement.style.display = "block";
                }
                break;
            case 6:
                dotElement.style.display = "block";
                if (dot === "dot4") {
                    dotElement.style.display = "none";
                }
                break;
        }
    }
}