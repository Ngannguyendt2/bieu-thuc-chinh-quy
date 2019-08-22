function countVowelConsonant(str) {
    let patt1 = /(u|e|o|a|i|U|E|O|A|I)/g;
    let patt2 = /[A-Za-z]/g;
    let countVowel = 0;
    let count = 0;
    while (patt1.test(str))
    {
        countVowel++;
    }
    while (patt2.test(str))
    {
        count++;
    }
    document.write("so luong nguyen am la: " + countVowel );
    document.write("so luong phu am la: " + (count - countVowel));
}
countVowelConsonant("Xin chao");