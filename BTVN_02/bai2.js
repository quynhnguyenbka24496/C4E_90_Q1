// 2. Nhập vào 1 số nguyên n, xuất ra n! (giai thừa)
let n=Number(prompt("Nhap vao so nguyen n:"))
let p=1;
for(let i=1;i<=n;i++){
    p*=i;
}
console.log(p);