// function calculateLoan() {
//     console.log("Change");
// }

function calculateLoan() {
    eventValue = document.getElementById("event").value;
    mulaiiklanValue = document.getElementById("mulai-iklan").value;
    hariiniValue = document.getElementById("hari-ini").value;
    costValue = document.getElementById("cost").value;
    hargaValue = document.getElementById("harga").value;
    leadsValue = document.getElementById("leads").value;
    paidValue = document.getElementById("paid").value;

    penjualanValue = (paidValue * hargaValue).toFixed(0);
    cplValue = (costValue / leadsValue).toFixed(0);
    cpaValue = (costValue / paidValue).toFixed(0);
    roasValue = (penjualanValue / costValue).toFixed(2);

    document.getElementById("payment").innerHTML = 
        `Report :
        <br>
        Mulai Iklan ${mulaiiklanValue} - ${hariiniValue}
        <br>
        ${eventValue}
        <br>
        Leads : ${leadsValue}
        <br>
        Paid : ${paidValue}
        <br>
        Penjualan : ${penjualanValue}
        <br>
        CPL : ${cplValue}
        <br>
        CPA : ${cpaValue}
        <br>
        Cost : ${costValue}
        <br>
        ROAS : ${roasValue}
        `;
}