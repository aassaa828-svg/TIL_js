document.getElementById("calc_btn").addEventListener("click", function (){
let userHeight = document.getElementById("height").value;
let userWeight = document.getElementById("weight").value;
let result = document.getElementById("result");

if (userHeight == "" || userWeight == "") {
    result.textContent = "키와 몸무게를 모두 입력해주세요!";
    return;
}

userHeight = Number(userHeight);
userWeight = Number(userWeight);

// 적정체중 계산
let normal_w = (userHeight - 100) * 0.9;

let goals = "";
if (userWeight > normal_w) {
    let over = userWeight - normal_w;
    goals = "적정체중은 " + normal_w + "kg이며 " + over + "kg 초과되셨습니다.";
} else if (userWeight < normal_w) {
    let under = normal_w - userWeight;
    goals = "적정체중은 " + normal_w + "kg이며 " + under + "kg 미달입니다.";
} else {
    goals = "적정체중은 " + normal_w + "kg이며 딱 맞으시네요!";
}

result.textContent = goals;
});