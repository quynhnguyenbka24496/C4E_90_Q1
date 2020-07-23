// // 4. Một cặp số nguyên dương được gọi là số bạn bè nếu tổng các ước số của số này bằng chính số kia. 
// Hãy viết chương trình kiểm tra xem 2 số nhập vào có phải là số bạn bè hay không.
//  Nếu phải thì xuất 'YES', ngược lại là 'NO'.
// // VD:  220 và 284 là cặp số bạn bè vì tổng các ước số của 220 là: 1+2+4+5+10+11+20+22+44+55+110=284 và tổng các ước số của 284 là 1+2+4+71+142=220.
let n1=Number(prompt("Nhap so 1:"))
let n2=Number(prompt("Nhap so 2:"))
let s1=0
let s2=0
for(let i1=1;i1<=n1;i1++){
    if(n1%i1 == 0){
        s1 +=i1
    }
}
for(let i2=1;i2<=n2;i2++){
    if(n2%i2 == 0){
        s2 +=i2
    }
}
console.log(s1);
console.log(s2);
if(s1 ===s2){
    console.log("hai so la ban be");

}
else{
    console.log("Hai so khong phai la ban be");
}