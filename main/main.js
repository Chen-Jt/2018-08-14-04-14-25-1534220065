module.exports = function main(number) {
    numLedArray = [
    ["._.",
     "|.|",
     "|_|"],
    ["...",
     "..|",
     "..|"],
    ["._.",
     "._|",
     "|_."],
    ["._.",
     "._|",
     "._|"],
    ["...",
     "|_|",
     "..|"],
    ["._.",
     "|_.",
     "._|"],
    ["._.",
     "|_.",
     "|_|"],
    ["._.",
     "..|",
     "..|"],
    ["._.",
     "|_|",
     "|_|"],
    ["._.",
     "|_|",
     "..|"]
    ];
    res = "";
    number = number.toString();
    for(i=0;i<3;++i)
    {
        for(j=0;j<number.length-1;++j)
        {
            res += numLedArray[parseInt(number[j])][i]+" ";
        }
        res += numLedArray[parseInt(number[j])][i]+"\n";
    }
    return res;
};