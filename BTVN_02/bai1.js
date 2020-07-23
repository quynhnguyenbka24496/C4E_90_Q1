// 1. Nhập 1 số nguyên n, xuất tổng các số lẻ từ 1 đến n.
// 2. Nhập vào 1 số nguyên n, xuất ra n! (giai thừa) 
// 3. Tính kết quả của phép toán 1+1/(2^3)+1/(3^3)+...+1/(n^3)
// 4. Một cặp số nguyên dương được gọi là số bạn bè nếu tổng các ước số của số này bằng chính số kia. Hãy viết chương trình kiểm tra xem 2 số nhập vào có phải là số bạn bè hay không. Nếu phải thì xuất 'YES', ngược lại là 'NO'.
// VD:  220 và 284 là cặp số bạn bè vì tổng các ước số của 220 là: 1+2+4+5+10+11+20+22+44+55+110=284 và tổng các ước số của 284 là 1+2+4+71+142=220.

// 5)  Kiểm tra số vừa nhập có phải là số hoàn hảo không?
// - Số hoàn hảo là số mà tổng ước số của nó (không tính nó) bằng chính nó. VD: 6 = 1 + 2 +3

// Đây là bài tập nhé lớp mình ơi
//Bài 1
let n=Number(prompt("Nhap vao so nguyen n:"))
let s=0;
for(let i=0;i<=n;i++){
    if(i%2 !=0){
        s+=i;
    }
    
}
console.log(s);