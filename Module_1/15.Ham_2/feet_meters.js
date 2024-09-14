function feet_meters(){
    let feet = parseFloat(document.getElementById("feet").value);
    let meters = parseFloat(document.getElementById("meters").value);
    let resultF;
    resultF = 0.305 * feet;
    let resultM;
    resultM = 3.279 * meters;
    document.getElementById("reFeet").innerHTML = resultF.toString() + " meters";
    document.getElementById("reMet").innerHTML = resultM.toString() + " feet";
}