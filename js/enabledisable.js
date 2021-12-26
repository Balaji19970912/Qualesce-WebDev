function enablepolicy(termsCheckBox){
    //If the checkbox has been checked
    if(termsCheckBox.checked) {
        //Set the disabled property to FALSE and enable the button.
        document.getElementById("enable_button").disabled = false;
        //change the attribute of cursor to pointer.
        const Enablehand = document.getElementById('enable_button');
        enable_button.setAttribute('style','cursor:pointer');
    } else {
        //Otherwise, disable the submit button.
        document.getElementById("enable_button").disabled = true;
        enable_button.setAttribute('style','cursor:not-allowed');
    }
}