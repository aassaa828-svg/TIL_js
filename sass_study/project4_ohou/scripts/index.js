// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정

// 동적 요소 계획하기
// 1. 상품이미지에 마우스 이벤트 시 큰 상품이미지 변경
// 2. 😀저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
// 3. 리뷰 클릭 시 스크롤 이동
// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 5. 주문 목록 초기 숨기기
// 6. 사이즈selcet 초기 비활성화(색상 선택 시 활성화)
// 7. 색상->사이즈 모두 선택 시 주문 목록 출력(선택한 값이 출력, 주문금액 변경)
// 8. 주문목록 'X'를 클릭 시 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+주문금액 표시
// 10. 주문목록 - 클릭 시 주문수량 + 주문금액 감소(1 이라면 경고창 출력)
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
// 12. 😀(상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
// ---------------------------------------------------------------------------
// 1. 상품이미지에 마우스 이벤트 시 큰 상품 이미지 변경
// 변수 -> 초기값 -> 이벤트, 함수
const thumnailA = document.querySelectorAll('.thumnail a')
const thumnailOverView = document.querySelector('.overview img')
console.log(thumnailA, thumnailOverView);//a*2, img

// 초기값(첫번째 썸네일 a가 보이고 있단 뜻으로 테두리가 있음)
thumnailA[0].style.border = '3px solid #0aa5ff'

// 두번째 썸네일에 마우스 올리면 큰 이미지가 두번째 썸네일 이미지로 변경
// 콘솔 테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
// 콘솔 테스트 권장 2) 큰 이미지 경로 출력하기
console.log(
    thumnailA[1].children[0].src, 
    thumnailOverView.src
)

//이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정
thumnailA[0].children[0].style.transition = '0.3s'
thumnailA[1].children[0].style.transition = '0.3s'

//이벤트 함수 시작(첫번째 썸네일)
thumnailA[0].addEventListener('mouseover',()=>{
    // 테두리 활성화/비활성화
    thumnailA[0].style.border = '3px solid #0aa5ff'
    thumnailA[1].style.border = '0'
    // 이미지 확대
    thumnailA[0].children[0].style.transform = 'scale(1.2)'
    thumnailA[1].children[0].style.transform = 'scale(1)'
    // 이미지 변경
    thumnailOverView.src = thumnailA[0].children[0].src
})

//이벤트 함수 시작(두번째 썸네일)
thumnailA[1].addEventListener('mouseover',()=>{
    // 테두리 활성화/비활성화
    thumnailA[1].style.border = '3px solid #0aa5ff'
    thumnailA[0].style.border = '0'
    // 이미지 확대
    thumnailA[1].children[0].style.transform = 'scale(1.2)'
    thumnailA[0].children[0].style.transform = 'scale(1)'
    // 이미지 변경
    thumnailOverView.src = thumnailA[1].children[0].src
})

// 로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin', 'ture');

// 2. 😀저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
const bookMark = document.querySelector('.product_info .scrap')
console.log(bookMark)
let loginStatus = '';// 상태 가져오기 변수 생성

bookMark.addEventListener('click',()=>{
    // 위 변수 이용한 조건 분기
    loginStatus = localStorage.getItem('isLogin')
    if(loginStatus == 'ture'){
        // 로그인 시 wish.html 이동
        location.href='./wish.html'
    }else{
        // 로그아웃 시 login.html 이동
        location.href='./login.html'
    }
})

// 3. 리뷰 클릭 시 스크롤 이동
const reviewBtn = document.querySelectorAll('.review_link')
const productInfoWrap = document.querySelector('main > .product_info')
const reviewWrap = document.querySelector('.review_wrap')
const productInfoBtn = document.querySelector('.sticky_menu .product_link')
console.log(reviewBtn, reviewWrap, productInfoWrap, productInfoBtn)

reviewBtn[0].addEventListener('click',(e)=>{e.preventDefault(); contentsPstFunc(reviewWrap);})
reviewBtn[1].addEventListener('click',(e)=>{e.preventDefault(); contentsPstFunc(reviewWrap);})
productInfoBtn.addEventListener('click',(e)=>{e.preventDefault(); contentsPstFunc(productInfoWrap);})

function contentsPstFunc(target){
    return window.scrollTo(0, target.offsetTop);
}
/* productInfoBtn.addEventListener('click',(e)=>{
    e.preventDefault() //a 새로고침 막기
    // 스크롤 이동 window 함수 scrollTo(x, y)
    console.log(productInfoWrap.offsetTop)//리뷰위치의 위쪽 좌표값 확인
    window.scrollTo(0, productInfoWrap.offsetTop);
}) */

// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
const priceInfoIcon = document.querySelector('.price_info .info_icon')
const priceInfo = document.querySelector('.price_info .info')
console.log(priceInfo, priceInfoIcon)

priceInfoIcon.addEventListener('mouseover',()=>{
    priceInfoIcon.style.cursor = 'pointer'
})

// 가격 정보 (i) 클릭 시 정보 팝업 출력
// 초기 : 숨김(false)
// 클릭 : 보이기(true) -> false -> true -> false -> true...

let infoBoolean = false; // 초기 : 숨김(false)

priceInfoIcon.addEventListener('click',()=>{
    //infoBoolean의 상태를 클릭할 때 마다 값(infoBoolean) 반전
    infoBoolean = !infoBoolean//★★★★★
    console.log(infoBoolean)
    if(infoBoolean){//() 조건이 참일 때 자동실행
        priceInfo.style.display = 'block';
    }else{
        priceInfo.style.display = 'none';
    }
    // priceInfo.style.display = 'block';
})

// 5. 주문 목록 초기 숨기기 .order_list
// 6. 사이즈 select 초기 비활성화 (색상 선택 시 활성화) #size_select
const orderList = document.querySelector('.order_list')
const sizeSelect = document.querySelector('#size_select')
const colorSelect = document.querySelector('#color_select')
const orderListText = document.querySelectorAll('.info > span')
const orderPrice = document.querySelector('.price > em')
console.log(orderList, sizeSelect, colorSelect, orderListText, orderPrice)

// 초기값
orderList.style.display = 'none';
sizeSelect.disabled = true

// 6-2. (색상 선택 시 활성화)
// 7. 색상->사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌 것) - 콘솔 '선택완료'
// 주문 목록 출력(선택한 값이 출력, 주문금액 변경)
colorSelect.addEventListener('change',()=>{
    console.log(colorSelect.selectedIndex)
    console.log(colorSelect.options[0])
    if(colorSelect.selectedIndex != 0){
        sizeSelect.disabled = false //활성화
        //사이즈 이벤트 작성위치
        sizeSelect.addEventListener('change',()=>{
            //사이즈 옵션 인덱스 0이 아닌 것 선택 시 콘솔 선택완료
            if(sizeSelect.selectedIndex != 0){
                console.log('선택완료')
                orderList.style.display = 'block';
                //선택한 옵션 안에 글자 가져오는 속성 text
                console.log(orderList.children[0].children[0])
                console.log(orderList.children[0].children[1])
                //선택 옵션(color) 출력하기
                let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
                let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text;
                // let orderColorReplace = orderColor.replace(찾는값, 변경값)
                // 정규표현식 시작과 끝 표시 /검사내용/
                // 괄호찾기 \찾는문자 \(.*\)
                // 모든 내용 .* 
                let orderColorReplace = orderColor.replace(/\(.*\)/,'')
                let orderSizeReplace = orderSize.replace(/\(.*\)/,'')
                orderList.children[0].children[0].textContent = orderColorReplace
                orderList.children[0].children[1].textContent = orderSizeReplace
                orderPrice.textContent = (productOptDB[0].price).toLocaleString('ko-kr')
            }
        })
    }else{
        sizeSelect.disabled = true //비활성화
    }
})
/*     console.log(colorSelect.selectedIndex)
    console.log(colorSelect.options[0])
    // sizeSelect.disabled = false;
    // 색상 select에서 첫번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을 때 사이즈 select 활성화하기
    if(colorSelect.selectedIndex != 0){
        sizeSelect.disabled = false //활성화
    }else{ //사용자가 선택한 opt 0일때
        sizeSelect.disabled = true //비활성화
    } */

// DB 불러오기 테스트
// 1. JS에서 HTML 함수로 생성 createElement()
const colorOpt1 = document.createElement('option')
console.log(colorOpt1)
const colorOpt2 = document.createElement('option')
console.log(colorOpt1)
// 2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]}(${(productOptDB[0].price).toLocaleString('ko-kr')}원)`//블랙(39900원)
colorOpt2.textContent = `${productOptDB[0].color[1]}(${(productOptDB[0].price).toLocaleString('ko-kr')}원)`//라즈베리(39900원)
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1)
colorSelect.appendChild(colorOpt2)
// * 생성한 태그가 li면 ul or ol의 마지막 자식 위치로 삽입
// * 생성된 태그가 option면 select의 마지막 자식 위치로 삽입

// 8. 주문목록 'x' 클릭 주문목록 삭제,주문금액 초기화
const closeBtn = document.querySelector('.order_list .close')
console.log(closeBtn)

closeBtn.addEventListener('click',function(){
    this.parentNode.style.display = 'none';
    orderPrice.textContent = 0;
    colorSelect.selectedIndex = colorSelect.options[0]
    sizeSelect.selectedIndex = sizeSelect.options[0]
})

// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+주문금액 표시
// 필요목록 : +버튼, 재고수량(productOptDB[0].stock), 주문수량, 주문금액(orderPrice), 증가 숫자 데이터
const plusBtn = document.querySelector('#plus_btn')
const minusBtn = document.querySelector('#minus_btn')
const orderListPrice = document.querySelector('.num_price .price')
const orderNum = document.querySelector('#order_num')
console.log(plusBtn, minusBtn, orderListPrice, orderNum)
let num = 1; //초기주문수량

// 초기값 : 주문 수량칸에 값 1 적용하기
orderNum.value = num; 

// + 버튼 클릭 시 주문수량이 1씩 증가하고 주문수량에 따라 가격(productOptDB[0].price) 증가하기
plusBtn.addEventListener('click',()=>{
    if(orderNum.value < productOptDB[0].stock){
        num++;
        minusPlusFunc()
        return
    }else{
        alert('최대 구매 수량입니다.')
    }
})

// 10. 주문목록 - 클릭 시 주문수량 + 주문금액 감소(1 이라면 경고창 출력)
minusBtn.addEventListener('click',()=>{
    if(orderNum.value > 1){
        num--;
        minusPlusFunc() //함수호출
        return
    }else{
        alert('최소 구매 수량입니다.')
    }
})

function minusPlusFunc(){ //함수생성
    orderNum.value = num
    let totalPrice = (num * productOptDB[0].price).toLocaleString('ko-kr')
    orderListPrice.textContent = totalPrice+'원'
    orderPrice.textContent = totalPrice
}

// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
// 12. 😀(상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
cartBtn = document.querySelector('#cart_btn')
buyBtn = document.querySelector('#buy_btn')
console.log(cartBtn, buyBtn)

// loginStatus = localStorage.getItem('isLogin') 로그인 상태 불러오기

cartBtn.addEventListener('click',()=>{
    cartBuyFunc('./cart.html')
})
buyBtn.addEventListener('click',()=>{
    cartBuyFunc('./buy.html')
})

function cartBuyFunc(url){
    if(colorSelect.selectedIndex == 0 || sizeSelect.selectedIndex == 0){
        alert ('상품을 선택하세요')
    }else{
        // 장바구니 페이지 이동(로그인 유(장바구니) 무(로그인)에 따라
        loginStatus = localStorage.getItem('isLogin')
        if(loginStatus == 'ture'){
            location.href = url
        }else{location.href = './login.html'}
    }
}