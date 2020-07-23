// 3. Tính kết quả của phép toán 1+1/(2^3)+1/(3^3)+...+1/(n^3)
let n=Number(prompt("Nhap vao n:"))
let s=0;
for(let i=1;i<=n;i++){
    s+=1/(i*i*i);

}
console.log(s)