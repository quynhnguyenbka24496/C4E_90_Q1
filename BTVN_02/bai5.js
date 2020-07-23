// 5)  Kiểm tra số vừa nhập có phải là số hoàn hảo không?
// - Số hoàn hảo là số mà tổng ước số của nó (không tính nó) bằng chính nó. VD: 6 = 1 + 2 +3
let n=Number(prompt("Nhap :"))
let s=0;
for(let i=1;i<=n;i++){
    if(n%i ==0){
        s +=i;
    }
}
console.log(`Tong cac uoc la:${s}`);
if(n ==s){
console.log("hoan hao");
}
else{
    console.log("ko hoan hao");
}