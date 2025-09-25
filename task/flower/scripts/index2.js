const resultFlower = document.querySelector('.result_flower')
const shareBtn = document.querySelector('#share_btn')
const resultBtn = document.querySelector('#result_btn')
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const day = document.querySelector('#day')

const back = document.querySelector('a') 

let flower = document.querySelector('.result_flower h2 > em')
let flowerLang = document.querySelector('.result_flower p > span')
let flowerImg = document.querySelector('.flower > img')

// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
resultFlower.style.display = 'none'
shareBtn.style.display = 'none'
back.style.display = 'none'

// '만나기'버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
resultBtn.addEventListener('click',()=>{
    const ymd = year.value && month.value && day.value
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요.')
    function flowerFunc(){
        if(month.value > 0 && month.value < 13){
            const userMonth = month.value;
            if(userMonth == birthday_flower[userMonth-1].month){
                resultFlower.style.display = 'block'
                resultBtn.style.display = 'none'
                shareBtn.style.display = 'block'
                back.style.display = 'block'
                flower.textContent = birthday_flower[userMonth-1].flower
                flowerLang.textContent = birthday_flower[userMonth-1].content
                flowerImg.src = birthday_flower[userMonth-1].src
            }
        }else{
            alert('생년월일을 다시 확인해주세요.')}
    }
})
