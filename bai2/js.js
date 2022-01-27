let arr = [11,1,5,19,92];

let button = document.getElementById('checkIndex');

button.onclick = function(){
    let a = document.getElementById('a').value;

    if (a == ""){
        alert("Vui lòng nhập dữ liệu");
    }
    else {
        checkIndex(a,arr);
    }
};

function checkIndex (a,arr) {
    let i = 0;
    let count = 0;
    for ( i; i < arr.length; i++) {
        if (a == arr[i]) {
            alert("Phần tử " + a + " nằm ở vị trí " + i);
            count ++;
        }
    }
    if (count == 0) {
        alert("Không tìm thấy phần tử " + a + " trong mảng");
    }
}