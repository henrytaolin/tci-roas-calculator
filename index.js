// function calculateLoan() {
//     console.log("Change");
// }

// Format dengan 2 Digit di belakang koma
// function formatCurrency(number) {
//     return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
//   }

// Format Tanpa Koma
function formatCurrency(number) {
    // Lakukan pengecekan apakah angka memiliki desimal dengan mengubahnya menjadi string
    const hasDecimal = number.toString().includes('.');

    // Jika angka memiliki desimal, gunakan format dengan 2 digit desimal, jika tidak, abaikan digit desimalnya
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: hasDecimal ? 2 : 0 }).format(number);
}


function calculateLoan() {
    eventValue = document.getElementById("event").value;
    // mulaiiklanValue = document.getElementById("mulai-iklan").value;
    // hariiniValue = document.getElementById("hari-ini").value;
    costValue = document.getElementById("cost").value;
    hargaValue = document.getElementById("harga").value;
    leadsValue = document.getElementById("leads").value;
    paidValue = document.getElementById("paid").value;

    penjualanValue = formatCurrency(paidValue * hargaValue);
    cplValue = formatCurrency(Math.ceil(costValue / leadsValue));
    cpaValue = formatCurrency(Math.ceil(costValue / paidValue));
    roasValue = ((paidValue * hargaValue) / costValue).toFixed(2);
    
    costValue = formatCurrency(costValue);

    // Mulai Iklan ${mulaiiklanValue} - ${hariiniValue}
    // <br>

    
    document.getElementById("payment").innerHTML = 
        `Report :
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
        
        `;
}