console.log("");

 sbiBank ={
    bankName: "SBI Bank",
    location: "Mumbai",
    accountNo: "902844613519",
    ifsc: "SBI0000412546",
    interestRate: "7%",
 showDetails: function(totalDetails){
console.log(` Bank Name: ${this.bankName}, Location: ${this.location}, Account NO.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate ${this.interestRate}`);
 }
 
}


 axisBank={
    bankName: "AXIS Bank",
    location: "Pune",
    accountNo: "974515164875",
    ifsc:"AXIS0000211245778" ,
    interestRate:"8%",
    showDetails: function(totalDetails){
    console.log(` Bank Name: ${this.bankName}, Location: ${this.location}, Account NO.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate ${this.interestRate}`);
}

}

 hdfcBank ={
    bankName: "HDFC Bank",
    location: "Sangli",
    accountNo: "974535164875",
    ifsc:"HDFC000021453678" ,
    interestRate: "5.4%",
    showDetails: function(totalDetails){
        console.log(` Bank Name: ${this.bankName}, Location: ${this.location}, Account NO.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate ${this.interestRate}`);
    }
    
}

 yesBank ={
    bankName: "YES Bank",
    location: "Kolhapur",
    accountNo:"974535786124",
    ifsc: "YES000012453687",
    interestRate: "6%",
    showDetails: function(totalDetails){
        console.log(` Bank Name: ${this.bankName}, Location: ${this.location}, Account NO.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate ${this.interestRate}`);
    }
    
}

sbiBank.showDetails();
console.log("----------------------------------------------------------------------------------------------------------------");
axisBank.showDetails();
console.log("----------------------------------------------------------------------------------------------------------------");
hdfcBank.showDetails();
console.log("----------------------------------------------------------------------------------------------------------------");
yesBank.showDetails();
console.log("----------------------------------------------------------------------------------------------------------------");