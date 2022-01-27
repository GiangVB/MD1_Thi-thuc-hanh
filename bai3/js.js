let button = document.getElementById('checkVowels');

button.onclick = function(){
    let str = document.getElementById('string').value;

    if (str == ""){
        alert("Vui lòng nhập dữ liệu");
    }
    else {
        countVowel(str);
    }
};

function countVowel(str) {
    const vowels = "aeiou";
    let count = 0;
    for (let i = 0 ; i < str.length; i++) {
        if (vowels.includes(str.charAt(i).toLowerCase())) {
            count++;
        }
    }
    if (count == 0){
        alert("Không có ký tự nguyên âm nào");
    }
    else if (count > 0){
        alert("Có " + count + " ký tự nguyên âm")
    }
}