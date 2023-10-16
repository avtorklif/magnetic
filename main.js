const calcDPS = (dmg, rof) => 1 / (1 - rof / 100) * dmg * 100 - 100

const handleInputs = () => {
    const inputDmg = document.getElementById("inputDmgModifier").value.replace(",", ".");
    const inputRof = document.getElementById("inputRateOfFireBonus").value.replace(",", ".");
    const dpsBonus = calcDPS(parseFloat(inputDmg), parseFloat(inputRof));
    const isValid = dpsBonus && dpsBonus < Number.POSITIVE_INFINITY && dpsBonus > 0;
    const dpsBonusFmt = (Math.round(dpsBonus * 100) / 100).toFixed(2);
    document.getElementById("pDpsBonus").innerText = isValid ? `${dpsBonusFmt}%` : "?";
}

const initialize = () => {
    document.getElementById("inputDmgModifier").value = 1.12;
    document.getElementById("inputRateOfFireBonus").value = 11;
    handleInputs();
}