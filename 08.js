function cardHide(card) {
    let hideNum = [];
    for (let i = 0; i < card.length; i++) {
        if (i < card.length - 3) {
            hideNum.push("*");
        } else {
            hideNum.push(card[i]);
        }
    }
    return hideNum.join("");
}