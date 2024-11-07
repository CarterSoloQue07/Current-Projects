function check(form){
    var apple = form.outApple.value;
    var orange = form.outOrange.value;
    var banana = form.outBanana.value;
    var peach = form.outPeach.value;

    /*if(apple.search (/^[0-9][0-9]?/) ||
        orange.search (/^[0-9][0-9]?/) ||
        banana.search (/^[0-9][0-9]?/)) updated this code to the below*/
        if([apple, orange, peach, banana].some(fruit => fruit.search(/^[0-9][0-9]?/)))
        {
            alert("Please enter a number from 0 to 99!");
            return false;
        }
    var total = 1.50 * apple + 1.99 * orange + 1.99 * peach + 0.63 * banana;
    form.totalB4.value = total.toFixed(2);

    var tax = total * .0725;
    form.outTax.value = tax.toFixed(2);

    var totalAft = total + tax;
    form.taxAfter.value = totalAft.toFixed(2);

}
