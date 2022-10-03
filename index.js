// Bài 1:
// let str = prompt("Mời nhập vào một chuỗi:");
// let arr = str.split("");
// let l = arr.length;
// for (let i = 0; i <= (l / 2); i++) {
//     for (let j = l - 1; j >= (l / 2); j--) {
//         for (let j = (l - 1); j >= (l - 1) / 2; j--) {
//             if ((i + j) == (l - 1)) {
//                 arr[i] = [arr[j], arr[j] = arr[i]][0];
//             }
//         }
//     }
// }
// let newStr = arr.toString();
// console.log(newStr);

// Bài 2:
// let str = prompt("Mời bạn nhập 1 chuỗi");
// str = str.toLowerCase();
// let arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//     miniArr = arr[i].split("");
//     console.log(miniArr);
//     let text = miniArr[0].toLocaleUpperCase();
//     // text = text.toLocaleUpperCase();
//     console.log(text);
//     miniArr.splice(0, 1,text);
//     arr[i] = miniArr.join("");
//     console.log(arr[i])
// }
// let newStr = arr.join(" ");
// console.log(newStr);

// Bài 3:
// let str = prompt("Nhập 1 mảng bất kì (cách nhau bởi dấu phẩy):");
// let arr = str.split(",");
// let l = arr.length;
// let i = 0;
// while (i < l) {
//     for (let j = i + 1; j < l; j++) {
//         if (arr[i] == arr[j]) {
//             arr.splice(j, 1);
//             l--;
//             j--;
//         }
//     }
//     i++;
// }
// console.log(arr);

// Bài 4:
// let str = prompt("Nhập 1 mảng bất kì (cách nhau bởi dấu phẩy):");
// let arr = str.split(",");
// let l = arr.length;
// for (let key in arr) {
//     for (let i = 0; i < l; i++) {
//         if (Number(arr[key]) < Number(arr[i])) {
//             arr[key] = [arr[i], arr[i] = arr[key]][0];
//         }
//     }
// }
// console.log(arr);

// Bài 5:
// let str = prompt("Nhập tên 3 nhân viên cách nhau bởi dấy phẩy");
// let arr = str.split(",");
// let ques3 = true;
// while (ques3 == true) {
//     idea = prompt("Mời bạn nhập vào tác vụ mình muốn\nC: Creat\nR: Read\nU: Update\nD: Delete");
//     while (idea != "C" && idea != "R" && idea != "U" && idea != "D") {
//         idea = prompt("Cú pháp không đúng. Xin mời nhập lại\nC: Creat\nR: Read\nU: Update\nD: Delete");
//     }
//     switch (idea) {
//         case "C": {
//             let ques = true;
//             while (ques == true) {
//                 let newC = prompt("Mời bạn nhập tên nhân viên muốn thêm:");
//                 arr.push(newC);
//                 console.log(arr);
//                 ques = confirm("Bạn có muốn thêm nhân viên khác không?(Y/N)");
//             }
//             break;
//         }
//         case "R": {
//             console.log(arr);
//             break;
//         }
//         case "U": {
//             let ques1 = true;
//             while (ques1 == true) {
//                 let position = +prompt("Mời bạn nhập phần tử muốn update:");
//                 let newU = prompt("Mời bạn nhập giá trị update:");
//                 arr[position] = newU;
//                 console.log(arr);
//                 ques1 = confirm("Bạn có muốn update phần tử khác không?(Y/N)");
//             }
//             break;
//         }
//         case "D": {
//             let ques2 = true;
//             while (ques2 == true) {
//                 let position1 = +prompt("Mời bạn nhập phần tử muốn xóa:");
//                 arr.splice(position1, 1);
//                 console.log(arr);
//                 ques2 = confirm("Bạn có muốn xóa phần tử khác không? (Y/N)");
//             }
//             break;
//         }
//     }
//     ques3 = confirm("Bạn có muốn làm tác vụ khác không? (Y/N):");
//     if (ques3 == false) {
//         alert("Goodbye and see you again!");
//     }
// }

// Bài 6:
// let str = prompt("Mời nhập vào ngày tháng năm (cách nhau bởi dấu /);");
// let arr = str.split("/");
// let date1 = [];
// let month1 = [1, 3, 5, 7, 8, 10, 12];
// let date2 = [];
// let month2 = [4, 6, 9, 11];
// let date3 = []
// for (let i = 1; i <= 31; i++) {
//     date1.push(i);
// }
// for (let i = 1; i <= 30; i++) {
//     date2.push(i);
// }
// for (let i = 1; i <= 28; i++) {
//     date3.push(i);
// }
// let ktr;
// if (arr[2] % 400 === 0 || (arr[2] % 4 === 0 && arr[2] % 100 !== 0)) {
//     ktr = true;
// }
// let t;
// let ok;

// if (ktr == true) {
//     if (arr[1] == 2) {
//         if (arr[0] == 29) {
//             console.log(`${str} là ngày hợp lệ`);
//             t = 0;
//             ok = 1;
//         } else { t = 1; }
//     } else { t = 1; }
// } else { t = 1; }
// if (t == 1) {
//     if ((date1.indexOf(Number(arr[0])) != -1 && month1.indexOf(Number(arr[1])) != -1) || (date2.indexOf(Number(arr[0])) != -1 && month2.indexOf(Number(arr[1])) != -1) || (date3.indexOf(Number(arr[0])) != -1 && Number(arr[1]) == 2)) {
//         console.log(`${str} là ngày hợp lệ`);
//         ok = 1;
//     } else {
//         console.log(`${str} là ngày không hợp lệ`);
//     }
// }
// if (ok == 1) {
//     x = month1.indexOf(Number(arr[1]));
//     y = month2.indexOf(Number(arr[1]));
//     if (x != -1) {
//         if (arr[0] == 31) {
//             console.log(`Ngày tiếp theo là: 1/${Number(arr[1])+1}/${arr[2]}.`);
//         } else {
//             console.log(`Ngày tiếp theo là: ${Number(arr[0])+1}/${arr[1]}/${arr[2]}.`);
//         }
//     } else if (y != -1) {
//         if (arr[0] == 30) {
//             console.log(`Ngày tiếp theo là: 1/${Number(arr[1])+1}/${arr[2]}.`);
//         } else {
//             console.log(`Ngày tiếp theo là: ${Number(arr[0])+1}/${arr[1]}/${arr[2]}.`);
//         }
//     } else {
//         if (arr[0] == 30) {
//             console.log(`Ngày tiếp theo là: 1/${Number(arr[1])++}/${arr[2]}.`);
//         } else {
//             if (arr[2] % 400 === 0 || (arr[2] % 4 === 0 && arr[2] % 100 !== 0)) {
//                 if (arr[0] == 29) {
//                     console.log(`Ngày tiếp theo là: 1/${Number(arr[1]) + 1}/${arr[2]}.`);
//                 } else {
//                     console.log(`Ngày tiếp theo là: ${Number(arr[0])+1}/${arr[1]}/${arr[2]}.`);
//                 }
//             } else {
//                 if (arr[0] == 28) {
//                     console.log(`Ngày tiếp theo là: 1/${Number(arr[1])+1}/${arr[2]}.`);
//                 } else {
//                     console.log(`Ngày tiếp theo là: ${Number(arr[0])+1}/${arr[1]}/${arr[2]}.`);
//                 }
//             }
//         }
//     }
// }

// Bài 7:
// let bookStore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
// let cart = [];
// let ques3 = true;
// while (ques3 == true) {
//     idea = prompt("Mời bạn nhập vào tác vụ mình muốn\nC: Creat\nR: Read\nU: Update\nD: Delete");
//     while (idea != "C" && idea != "R" && idea != "U" && idea != "D") {
//         idea = prompt("Cú pháp không đúng. Xin mời nhập lại\nC: Creat\nR: Read\nU: Update\nD: Delete");
//     }
//     let mangRong = ["Đắc nhân tâm", 0];
//     cart.push(mangRong);
//     let len = bookStore.length;
//     for (let i = 0; i < len; i++) {
//         console.log(`${i + 1}.${bookStore[i]}`);
//     }
//     switch (idea) {
//         case "C": {
//             let ykien = "Y";
//             while (ykien === "Y") {
//                 let mua = prompt("Mời bạn nhập sản phẩm muốn mua:");
//                 let y = bookStore.indexOf(mua);
//                 while (y === -1) {
//                     mua = prompt("We don't have that item.\n Please choice again:");
//                     y = bookStore.indexOf(mua);
//                 }
//                 let z;
//                 let t;
//                 for (let i = 0; i < cart.length; i++) {
//                     z = cart[i][0].indexOf(mua);
//                     if (z == -1) {
//                         t = 0;
//                     } else {
//                         t = 1;
//                         break;
//                     }
//                 }
//                 if (t == 0) {
//                     let a = [];
//                     a.push(mua, 0);
//                     a[1]++;
//                     cart.push(a);
//                 } else {
//                     for (let i = 0; i < cart.length; i++) {
//                         if (cart[i][0] === mua) {
//                             cart[i][1]++;
//                         }
//                     }
//                 }
//                 console.log(cart);
//                 ykien = prompt("Bạn có muốn mua hàng tiếp không (Y/N):");
//                 while (ykien == null || ((ykien != "Y") == true && (ykien != "N") == true)) {
//                     ykien = prompt("Cú pháp bạn nhập không đúng. \n Mời bạn Y hoặc N:");
//                 }
//             }
//             break;
//         }
//         case "R": {
//             console.log(cart);
//             break;
//         }
//         case "U": {
//             let ykien = true;
//             while (ykien == true) {
//                 let que = prompt("Nhập mặt hàng bạn muốn update:");
//                 let sl = +prompt("Nhập số lượng bạn muốn update:");
//                 for (let index in cart) {
//                     if (cart[index][0] == que) {
//                         cart[index][1] = sl;
//                     }
//                 }
//                 ykien = confirm("Bạn có muốn update tiếp không?");
//             }
//             console.log(cart);
//             break;
//         }
//         case "D": {
//             let ykien = true;
//             while (ykien == true) {
//                 let que = prompt("Nhập mặt hàng bạn muốn xóa:");
//                 for (let index in cart) {
//                     if (cart[index][0] == que) {
//                         cart.splice(index, 1);
//                     }
//                 }
//                 ykien = confirm("Bạn có muốn xóa tiếp không?");
//             }
//             console.log(cart);
//             break;
//         }
//     }
//     ques3 = confirm("Bạn có muốn làm tác vụ khác không? (Y/N):");
//     if (ques3 == false) {
//         alert("Goodbye and see you again!");
//     }
// }
//......................................................................
// Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả. (1đ)
// ●	Đầu vào: str 
// ●	Đầu ra: đảo ngược chuỗi và in ra kết quả
// ●	Ví dụ:
// ○	Cho: str = "program"; in ra: "margorp"
// ○	Cho: str = "data"; in ra: "atad"
// ●	Lưu ý: không sử dụng hàm reverse()

// let str ="program";
// let newStr=""
// for(let i=str.length-1; i>=0; i--){
//     newStr=newStr+str[i];
// }
// console.log(newStr);
////........................................................................

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (1đ)
// ●	Đầu vào: str
// ●	Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// ●	Ví dụ
// ○	Cho "this is A Test"; In ra "This Is A Test"
// ○	Cho "hello rikkei academy"; In ra "Hello Rikkei Academy”

// let str ="hello rikkei academy"
// let newStr = "";
// newStr = newStr + str[0].toUpperCase();
// for(let i =1; i<str.length;i++){
//     if(str[i] ===" "){
//         newStr = newStr + str[i] + str[i+1].toUpperCase();
//         i++;
//     }
//     else{
//         newStr = newStr + str[i];
//     }
// }
// console.log(newStr);

// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (1đ)
// ●	Đầu vào: 1 mảng bất kỳ
// ●	Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// ●	Ví dụ
// ○	Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// ○	Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// let Arr=[1,2,3,3,4,5,4,4,4,5,5];
// for(let i=0; i<Arr.length; i++){
//     for(let j=i+1; j<Arr.length;j++){
//         if(Arr[i]===Arr[j]){
//             Arr.splice(j,1);
//             j=j-1;
//         }
//     }
// }
// console.log(Arr);

// Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần. (2đ)
// ●	Đầu vào: 1 mảng bất kỳ
// ●	Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ●	Ví dụ
// ○	Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// ●	Lưu ý: Không dùng hàm sort()

// let Arr=[5, 2, 3, 4, 1];
// for(let i =0; i<Arr.length;i++){
//     for(let j =i+1; j<Arr.length;j++){
//         if(Arr[i] > Arr[j]){
//             let a;
//             a=Arr[i];
//             Arr[i]=Arr[j];
//             Arr[j]=a;

//         }
//     }
// }
// console.log(Arr);

// Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên nhân viên). 
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

// let nameArr=["Tuan","Manh","Duc"]
// let check=true;
// while(check){
//     let request =prompt(`Moi nhap yeu cau "\n"C: Create "\n"R:Read "\n"U:Update "\n"D:Delete`)
//     if(request === "C" || request === "R" || request === "U" || request === "D"){
//         if(request === "C"){
//             let firstName=prompt("Moi ban nhap ten");
//             nameArr.push(firstName);
//             console.log(nameArr);
//         }
//         if(request === "R"){
//             for(let i=0; i<nameArr.length;i++){
//                 console.log(`name ${i}: ${nameArr[i]}`);
//             }
//         }
//         if(request === "U"){
//             let checkNum = true;
//             while(checkNum){
//                 let num = +prompt("Moi ban nhap vi tri can Update");
//                 if(Number.isInteger(num)===true && num<nameArr.length){
//                     let firstName=prompt("Moi ban nhap ten");
//                     nameArr[num]= firstName;
//                     console.log(nameArr);
//                     checkNum=false;
//                 }
//                 else{
//                     alert("Vi tri khong ton tai, moi ban nhap lai")
//                 }
//             }  
//         }
//         if(request ==="D"){
//             let num = +prompt("Moi ban nhap vi tri can xoa");
//             if(Number.isInteger(num)===true && num<nameArr.length){
//                 nameArr.splice(num,1);
//                 console.log(nameArr);
//                 checkNum=false;
//             }
//             else{
//                 alert("Vi tri khong ton tai, moi ban nhap lai")
//             }
//         }
//         check=false;
//     }
//     else{
//         alert("Ban da nhap sai. Moi ban nhap lai");
//     }
// }
////......................................................

// Bài 6 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (3đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// ●	Ví dụ
// ○	Ngày 30/4/2019 là ngày hợp lệ
// ○	Ngày 29/2/2019 là ngày không hợp lệ
// ●	Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// ●	Ví dụ
// ○	Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// ○	Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021


// let check = true;
// while (check) {
//     let inputDate = prompt("Moi ban nhap vao ngay thang nam phan cach nhau bang dau (/)");
//     let _count = 0;
//     for (let i = 0; i < inputDate.length; i++) {
//         if (inputDate[i] === "/") {
//             _count++;
//         }
//     }
//     if (_count === 2) {
//         let arrDate = inputDate.split("/");
//         let date = Number(arrDate[0]);
//         let month = Number(arrDate[1]);
//         let year = Number(arrDate[2]);
//         if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//             if (date >= 1 && date <= 31) {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay hop le`);
//                 if (month < 12 && date === 31) {
//                     console.log(`Ngay tiep theo la${1}/${month + 1}/${year}`);
//                 }
//                 else if (month === 12 && date === 31) {
//                     console.log(`Ngay tiep theo la${1}/${1}/${year + 1}`);
//                 }
//                 else {
//                     console.log(`Ngay tiep theo la${date + 1}/${month}/${year}`);
//                 }
//             }
//             else {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay khong hop le`);
//             }
//         }
//         else if (month === 4 || month === 6 || month === 9 || month === 11) {
//             if (date >= 1 && date <= 30) {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay hop le`);
//                 if (date === 30) {
//                     console.log(`Ngay tiep theo la${1}/${month + 1}/${year}`);
//                 }
//                 else {
//                     console.log(`Ngay tiep theo la${date + 1}/${month}/${year}`);
//                 }
//             }
//             else {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay khong hop le`);
//             }
//         }
//         else if (month === 2) {
//             if (date >= 1 && date <= 28) {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay hop le`);
//                 if (date === 28) {
//                     console.log(`Ngay tiep theo la${1}/${month + 1}/${year}`);
//                 }
//                 else {
//                     console.log(`Ngay tiep theo la${date + 1}/${month}/${year}`);
//                 }
//             }
//             else {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay khong hop le`);
//             }
//         }
//         else {
//             console.log(`Ngay ${date}/${month}/${year} la ngay khong hop le`);
//         }
//         check = false;
//     } else {
//         alert("Dinh dang ban nhap vao khong chinh xac. Moi ban nhap lai")
//     }
// }
/////..................................................................

// Bài 7 : Cho hai array:
// bookStore = [“Tôi thấy hoa vàng trên cỏ xanh”, “Đắc nhân tâm”]
// cart = []
// Viết một chương trình mô phỏng quá trình mua hàng của người dùng tại cửa hàng sách book store (Create/Read/Update/Delete).

// let bookStore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
// let cart = [];
// let checkRequest = true;
// let checkRequest2 = true;
// let index = 0;
// let check;
// let count = 1;
// let buy = true;
// let fname;
// let fcount;
// let nameBook;
// let countBook;
// while (buy) {
//     buy = confirm("Ban co muon mua sach khong?")
//     if (buy = true) {
//         while (checkRequest) {
//             let request = prompt(`Moi nhap yeu cau "\n"C: Mua sach "\n"R:Kiem tra gio hang "\n"U:Thay sach "\n"D:Bo sach ra khoi gio hang "\n"E: Thoát khỏi cửa hàng`)
//             if (request === "C" || request === "R" || request === "U" || request === "D") {
//                 if (request === "C") {
//                     while (checkRequest2) {
//                         let nameSach = prompt("Moi nhap ten sach");
//                         if (nameSach === "Tôi thấy hoa vàng trên cỏ xanh" || nameSach === "Đắc nhân tâm") {
//                             if (cart.length === 0) {
//                                 cart.push(`${nameSach},${count}`);
//                             }
//                             else {
//                                 nameBook = [];
//                                 countBook = [];
//                                 check = false;

//                                 for (let i = 0; i < cart.length; i++) {
//                                     fname = "";
//                                     fcount = "";

//                                     let beginName = cart[i];
//                                     let checkQoute = true;
//                                     for (let j = 0; j < beginName.length; j++) {
//                                         if (beginName[j] !== "," && checkQoute === true) {
//                                             fname = fname + beginName[j];

//                                         }
//                                         else {
//                                             checkQoute = false;
//                                             j = j + 1;
//                                             fcount = fcount + beginName[j];

//                                         }

//                                     }
//                                     nameBook.push(fname);
//                                     countBook.push(Number(fcount));
//                                 }

//                                 for (let i = 0; i < nameBook.length; i++) {
//                                     if (nameSach === nameBook[i]) {

//                                         check = true;
//                                         index = i;
//                                         break;
//                                     }
//                                 }
//                                 if (check === true) {
//                                     cart.splice(index, 1, `${nameSach},${countBook[index] + 1}`);

//                                 }
//                                 else {
//                                     cart.push(`${nameSach},${count}`);
//                                 }

//                             }
//                             let question = prompt("Do you want to buying more? (yes/no)")
//                             if (question !== "yes") {
//                                 buy = false;
//                                 checkRequest2 = false;
//                             }

//                         }
//                         else {
//                             console.log("We don't have that item");
//                         }
//                     }
//                 }
//                 if (request === "R") {
//                     console.log(cart);
//                     checkRequest = false;
//                 }
//                 if (request === "U") {
//                     let checkNum = true;
//                     while (checkNum) {
//                         let num = +prompt("Moi ban nhap vi tri can Update");
//                         if (cart.length === 0) {
//                             checkNum = false;
//                             alert("Ban chua co sach trong gio hang");
//                         }
//                         else {
//                             if (Number.isInteger(num) === true && num < cart.length) {
//                                 cart.splice(num, 1);
//                                 let checkname = true;
//                                 while (checkname) {
//                                     let firstName = prompt("Moi ban nhap ten");
//                                     if (firstName === "Tôi thấy hoa vàng trên cỏ xanh" || firstName === "Đắc nhân tâm") {
//                                         if (cart.length === 0) {
//                                             cart.push(`${firstName},${count}`);
//                                         }
//                                         else {
//                                             nameBook = [];
//                                             countBook = [];
//                                             check = false;

//                                             for (let i = 0; i < cart.length; i++) {
//                                                 fname = "";
//                                                 fcount = "";

//                                                 let beginName = cart[i];
//                                                 let checkQoute = true;
//                                                 for (let j = 0; j < beginName.length; j++) {
//                                                     if (beginName[j] !== "," && checkQoute === true) {
//                                                         fname = fname + beginName[j];

//                                                     }
//                                                     else {
//                                                         checkQoute = false;
//                                                         j = j + 1;
//                                                         fcount = fcount + beginName[j];

//                                                     }

//                                                 }
//                                                 nameBook.push(fname);
//                                                 countBook.push(Number(fcount));
//                                             }

//                                             for (let i = 0; i < nameBook.length; i++) {
//                                                 if (firstName === nameBook[i]) {

//                                                     check = true;
//                                                     index = i;
//                                                     break;
//                                                 }
//                                             }
//                                             if (check === true) {
//                                                 cart.splice(index, 1, `${firstName},${countBook[index] + 1}`);

//                                             }
//                                             else {
//                                                 cart.push(`${firstName},${count}`);
//                                             }

//                                         }
//                                         console.log(cart);
//                                         checkname = false;

//                                     }
//                                     else {
//                                         console.log("We don't have that item");
//                                     }
//                                 }
//                                 checkNum = false;
//                             }
//                             else {
//                                 alert("Vi tri khong ton tai, moi ban nhap lai")
//                             }
//                         }
//                     }
//                 }
//                 if (request === "D") {
//                     let checkNum = true;
//                     while (checkNum) {
//                         let num = +prompt("Moi ban nhap vi tri can Xoa");
//                         if (cart.length === 0) {
//                             checkNum = false;
//                             alert("Ban chua co sach trong gio hang");
//                         }
//                         else {
//                             if (Number.isInteger(num) === true && num < cart.length) {
//                                 cart.splice(num, 1);
//                                 console.log(cart);
//                                 checkNum = false;
//                             }
//                             else {
//                                 alert("Vi tri khong ton tai, moi ban nhap lai")
//                             }
//                         }
//                     }
//                 }
//                 if (request === "E") {
//                     checkRequest = false;
//                     buy = false;
//                 }
//             }
//             else {
//                 alert("Ban da nhap sai. Moi ban nhap lai");
//             }
//         }
//     }
//     else {
//         alert("Tam biet quy khach. Hen gap lai lan sau");
//     }
// }
// console.log(cart);