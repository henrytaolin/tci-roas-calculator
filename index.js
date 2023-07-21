// function calculateLoan() {
//     console.log("Change");
// }

function formatCurrency(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  }
    

function calculateLoan() {
    eventValue = document.getElementById("event").value;
    mulaiiklanValue = document.getElementById("mulai-iklan").value;
    hariiniValue = document.getElementById("hari-ini").value;
    costValue = document.getElementById("cost").value;
    hargaValue = document.getElementById("harga").value;
    leadsValue = document.getElementById("leads").value;
    paidValue = document.getElementById("paid").value;

    penjualanValue = Math.floor(paidValue * hargaValue);
    cplValue = formatCurrency(costValue / leadsValue);
    cpaValue = formatCurrency(costValue / paidValue);
    roasValue = ((paidValue * hargaValue) / costValue).toFixed(2);
    
    costValue = formatCurrency(costValue);

    
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
        <br>
        Penjualan : ${formatCurrency(penjualanValue)}
        `;
}