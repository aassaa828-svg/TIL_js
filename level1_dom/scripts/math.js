console.log(Math);
console.log(Math.PI);
// Math.floor, round, random
let num1 = Math.floor(3.7)
console.log(num1)
num1 = Math.floor(3.2)
console.log(num1)
console.log('------------------------')
let num2 = Math.round(3.7)
console.log(num2)

// 화면에 접속했을 때 광고 2개가 랜덤 표시
const abDB = [{
    name:'제주도 여행', //alt
    src:'https://i.pinimg.com/1200x/2b/63/80/2b6380d6e393f7bc1cc39e186ba22921.jpg',
    link:'https://naver.com'
},
{
    name:'일본 여행',
    src:'https://i.pinimg.com/736x/ec/1f/7b/ec1f7b8356bbb1f4b33bba059b93329d.jpg',
    link:'https://google.com'
}]

const adSection = document.querySelector('.ad')
const adRandom = Math.floor(Math.random() * 2)

adSection.children[0].children[0].style.width = '300px'

window.addEventListener('load',()=>{
    adSection.children[0].href = abDB[adRandom].link 
    adSection.children[0].children[0].src = abDB[adRandom].src
    adSection.children[0].children[0].alt = abDB[adRandom].name
})

// 더치페이 계산기
// 계산하기 클릭 시 총 금액과 인원 수에 따라 계산결과 출력하기
// 금액이 소수점일 경우 소수점 값에 따라 반올림하기

const calc = document.querySelector('.calc')
const totalBtn = document.querySelector('#total_btn')
const result = document.querySelector('.result em')
const price = document.querySelector ('#price')
const person = document.querySelector ('#person')

totalBtn.addEventListener('click',()=>{
    const totalPrice = (Math.round(price.value/person.value)).toLocaleString('ko-kr')
    result.textContent = totalPrice
})

// DB
const shopDB = [{
    shop:'쿠팡',
    id:'하루견과',
    price:1000,
},{
    shop:'네이버 스마트스토어',
    id:'하루견과',
    price:2000,
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:3000,
}]

//변수
const minPriceBtn = document.querySelector('#min_price_btn')
const minPriceP = document.querySelector('.min_price')

const pp = [1000,2000,3000,4000] // test
//클릭 이벤트
minPriceBtn.addEventListener('click',()=>{
    // 1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출하기
    const priceMap = shopDB.map( i => i.price )
    console.log(priceMap)
    // 2. 추출한 가격에서 최저가 찾기
    console.log('최저가 : ',Math.min(...priceMap))
    
    const minPrice = Math.min(...priceMap)
    minPriceP.textContent =  `최저가 : ${minPrice}원`
    // 스프레드연산자 (...배열명) 여러 배열값을 한번에 처리하는 배열처리법
    console.log(Math.min(...pp)) //최저가
    console.log(Math.max(...pp)) //최고가
})

console.log('-----------------------------')

const shopDB2 = [{
    shop:'쿠팡',
    name:'고구마',
    price:5000,
    delivery:2500,
},{
    shop:'이마트몰',
    name:'고구마',
    price:2900,
    delivery:0,
},{
    shop:'네이버',
    name:'고구마',
    price:4000,
    delivery:1000,
}]

const minPriceBtn2 = document.querySelector('.min2 > .price_btn')
const deliveryBtn = document.querySelector('.delivery_btn')
const minResult = document.querySelector('.result1')
const freeDelivery = document.querySelector('.result2')
const priceMap2 = shopDB2.map(i=>i.price)
const deliveryPrice = shopDB2.map(i => i.delivery)
const shopListUl = document.querySelector('#shop_list')

console.log(...priceMap2)
console.log(minPriceBtn2, minResult)

//최저가찾기 버튼 클릭 시 최저가 표시
minPriceBtn2.addEventListener('click',()=>{
    minResult.textContent = `최저가 : ${Math.min(...priceMap2)}원`

    // 최저가 -> 최고가 오름차순 정렬하기 JS
    // 매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price
    // 매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a, b) => a.price - b.price)
    console.log(sort)

    // 반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    // for~in, for~of, forEach
    for(let i of sort){
        const li = document.createElement('li')
        li.innerHTML = `<a href="#">${i.shop}</a>`
        li.innerHTML += ` <span>${i.price}원</span>`
        li.innerHTML += ` <em>배송비 : ${i.delivery}원</em>`
        console.log(li, i.shop)
        shopListUl.appendChild(li)
        //createElement로 생성한 JS태그는 appendChild함수로 대입한다
    }
})
//배송비 무료 찾기
deliveryBtn.addEventListener('click',()=>{
    freeDelivery.textContent = `배송비 무료 : ${Math.min(...deliveryPrice)}원`
})

//최고가
const highest = document.querySelector('.min_sort > h2')
minPriceBtn.addEventListener('click',()=>{
    highest.textContent += ` : ${Math.max(...priceMap2)}원`
})
const listDl = document.querySelector('#list')
window.addEventListener('load',()=>{
    const shopSort = [...shopDB].sort((a, b)=> b.price - a.price)
    console.log(shopSort)
    for(let i of shopSort){
        const dt = document.createElement('dt')
        dt.textContent = i.shop
        listDl.appendChild(dt)
        const dd = document.createElement('dd')
        dd.textContent = i.id
        listDl.appendChild(dd)

    }
})