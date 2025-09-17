// boolean.js
// 거짓으로 평가되는 값
// false, null, undefined, NaN, 0, ""
// 위 제외 모든 값 참으로 평가됨 [], {} 포함
let a = ""
console.log(Boolean(a))
a = []
console.log(Boolean(a))
// 비교연산자
// == 일치연산, === 데이터타입까지 일치
let b = 10;
let c = "10";
let result = b == c;
console.log(result) // 값만 비교 => true
result = b === c;
console.log(result) // 값+데이터타입 비교 => false
b += 5;
result = b != c;
console.log(result) // 값만 비교 => false(같으면 거짓)
result = b !== c;
console.log(result); // 값+데이터타입 비교 => true
c = 2; // b 15, c 2
result = b < c;
console.log(result)
c += 20
result = b > c;
console.log(result);
result = b <= c;
console.log(result)
result = b >= c;
console.log(result)
console.log('-----------------------------------')
// 논리연산자 &&, ||, !
console.log("A" && null)
console.log("A" && "B")
console.log(0 && "B")
console.log(0 || "B")
console.log("A" || "B")
console.log("" || {})
console.log(!"A")
let d;
result = !d
console.log(result)
let e = []
result = !e
e += ['사과']
console.log(result)
//----------------------------
console.log('조건문--------------')
// if(조건식){조건식이 참일 때 실행문}
let x = []
let y = 0
if(x){console.log('x는 참이다1');}
if(y){console.log('y는 참이다');}
if(x != true){console.log('x는 참이다2')}
if(x && y){console.log('x, y는 참이다');}
if(x || y){console.log('x만 참이다');}
x = 7;
y = 2;
if(x>y && x==y){alert('참일때 실행되는 문구1')}
// if(x>y || x==y){alert('참일때 실행되는 문구2')}
if(!x){console.log('참일때 실행되는 문구3')}
if(y || !x){console.log('참일때 실행되는 문구4')}
if(!y || x){console.log('참일때 실행되는 문구5')}

// 에버랜드 놀이기구 탑승조건 확인 JS
// 나이 입력 후 버튼 클릭 시 10살 이하면 '탑승불가' 메시지 출력
const ageInput = document.querySelector('.everland #age')
const ageBtn = document.querySelector('.everland #age_btn')
const ageResult = document.querySelector('.everland .result')
console.log(ageInput,ageBtn,ageResult)

// console.log(ageInput.value)
// 이벤트 함수 밖에 작성하는건 초기값 확인용
// 나이 입력 후 버튼 클릭 시 콘솔에 입력한 나이값 표시
// *버튼 클릭 시 특정동작(입력한 나이값 가져오기)이 일어나야 한다.
ageBtn.addEventListener('click',()=>{
    console.log(ageInput.value)
    // ageInput변수의 value값이 숫자 10 이하면(조건문) 
    // ageResult변수에 '탑승불가' 문자데이터 출력(조건문 참일때)
    // if(조건식){조건식 결과가 참일때 실행결과}
    // if(ageResult변수의 value값이 숫자 10 이하){'탑승불가' 문자데이터}
    if(ageInput.value <= 10){
        ageResult.textContent = '탑승불가'
        // ageInput.value = ''
        ageInputReset()
    }
    // 10살보다 크면 '탑승가능' 메시지 출력
    if(ageInput.value > 10){
        ageResult.textContent = '탑승가능'
        // ageInput.value = ''
        ageInputReset()
    }
    //값 입력안하고 클릭 시 '값을 입력하세요' 메시지 출력
    if(ageInput.value == ''){
        ageResult.textContent = '값을 입력하세요'
    }
})
function ageInputReset(){
    return ageInput.value = '';
}

// 인쇄 알고리즘
// 인쇄하기 버튼 클릭 시 '인쇄 하시겠습니까?' 물어보고 확인 누르면 인쇄창 실행
// '인쇄 하시겠습니까?' 물어보고(BOM 내장함수 활용 confirm())
const printBtn = document.querySelector('#print_btn')
console.log(printBtn)

printBtn.addEventListener('click',printFunc)
function printFunc(){
    let confirmResult = confirm('인쇄 하시겠습니까?')
    console.log(confirmResult)
    if(confirmResult){print()}
    return //함수종료위치
}

// 참과 거짓에 따른 결과출력 조건문
// if(조건식){참일때실행}else{거짓일때실행}
// 관리자 로그인
// 관리자(admin) 로그인 사용자 아이디 admin 일 경우 '관리자님 어서오세요' 아니면 '관리자페이지 접근불가'
/* const userId = prompt('아이디')
if(userId != 'admin'){
    alert('관리자페이지 접근불가')
}else{
    alert('관리자님 어서오세요')
} */

// 로그인 조건문
// 아이디(미입력) 비밀번호(입력) 로그인 클릭 시 - 아이디입력경고 메시지 출력
// 아이디(입력) 비밀번호(미입력) 로그인 클릭 시 - 비밀번호입력경고 메시지 출력
// 아이디(입력) 비밀번호(입력) 로그인 클릭 시 - (맞는 정보 기준) index.html 이동
// 아이디(입력) 비밀번호(입력) 로그인 클릭 시 - (틀린 정보 기준) 정보오류 메시지 출력
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const loginErrorMsg = document.querySelector('#loginfrm .error')
console.log(userId, userPw, loginBtn, loginErrorMsg)

// 회원정보 저장 DB
// 관리자 이름 : 봄, 나이 : 30
// 일반회원 이름 : 여름, 나이 : 20
const userDB = [{
    name:'봄',
    age:30,
    pst:'관리자',
    id:'admin',
    pw:'admin1234'
},{
    name:'여름',
    age:20,
    pst:'일반회원',
    id:'summer',
    pw:'summer1234'
}]
console.log(userDB[0].id)
//로그인 클릭 이벤트
loginBtn.addEventListener('click',()=>{
    // 아이디 미입력 기준 에러 메시지 출력
    if(userId.value == ''){
        loginErrorMsg.textContent = '아이디를 입력하세요'
    }else if(userPw.value == ''){
        // 비번 미입력 기준 에러메시지 출력
        // if의 조건이 거짓이고 else if 조건이 참일 때 실행
        loginErrorMsg.textContent = '비밀번호를 입력하세요'
    }else if(userId.value == userDB[0].id){
        //입력한 id가 관리자의 저장된 id 동일 시 index 이동
        if(userPw.value == userDB[0].pw){
            // location.href = '../index.html';
            // isLogin = true;
            // console.log('로그인 성공', isLogin)
            // ★로컬 환경에서 확인가능한 브라우저 데이터 저장법
            localStorage.setItem('isLogin2', 'true')
            // localStorage.setItem('속성', '값')
            // localStorage.getItem('가져오는 속성')
        }
    }else {
        // 모든 조건이 거짓일 때(입력한 id, pw가 저장된 정보와 다를 때)
        loginErrorMsg.innerHTML = '아이디 또는 비밀번호가 잘못되었습니다.<br>다시 한번 확인해주세요'
    }
})
//boolean_common.js 변수 확인
console.log(isLogin)