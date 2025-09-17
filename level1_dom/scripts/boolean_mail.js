// boolean_mail.js
// console.log(isLogin)
window.addEventListener('load',()=>{
    let loginStatus = localStorage.getItem('isLogin2') //true
    console.log(loginStatus == 'true')
    // console.log(typeof(loginStatus))

    //dom 변수
    const mailLogin = document.querySelector('#login')
    const mailLogout = document.querySelector('#logout')

    if(loginStatus == 'true'){
        console.log('로그인 화면')
        mailLogin.style.display = 'block';
        mailLogout.style.display = 'none';
    }else {
        console.log('로그아웃 화면')
        mailLogin.style.display = 'none';
        mailLogout.style.display = 'block';
    }
})