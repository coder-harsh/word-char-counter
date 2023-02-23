let textbox = document.getElementById("textbox");
textbox.addEventListener('input', function () {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;
    text = text.trim(); //extra space cut kar do. char print k bad trim se space count hota rahega. trim se starting and end m extra space remove kar dega. but bich m space dene se word badh raha h
    let words = text.split(" "); //sentence me space mile to usko break karke array m store kar do.
    var cleanlist = words.filter(function (elm) {
        return elm != ""; //wisa word array m store karo jo blank nhi h.
    });
    document.getElementById("word").innerHTML = cleanlist.length; //bich wale space ko  count nhi karega ab
});