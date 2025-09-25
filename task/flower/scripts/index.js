// index.js
// jquery ver
// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
const $resultFlower = $('.result_flower')
const $shareBtn = $('#share_btn')
$resultFlower.hide()
$shareBtn.hide()
// '만나기'버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
const $resultBtn = $('#result_btn')
const $year = $('#year')
const $month = $('#month')
const $day = $('#day')
// 탄생화
let $flower = $('.result_flower h2 > em')
let $flowerLang  = $('.result_flower p > span')
let $flowerImg = $('.flower > img')
// console.log($flower, $flowerLang)
$resultBtn.click(function(){
    //조건 ? 참 : 거짓;
    console.log($year.val())
    const ymd = $year.val() && $month.val() && $day.val() 
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요.')
    function flowerFunc(){
        const $userMonth = $month.val();
        if($userMonth == birthday_flower[$userMonth-1].month){
            $resultFlower.show()
            $resultBtn.hide()
            $shareBtn.show()
            $flower.text(birthday_flower[$userMonth-1].flower)
            $flowerLang.text(birthday_flower[$userMonth-1].content)
            $flowerImg.attr('src',birthday_flower[$userMonth-1].src)
        }else{alert('생년월일을 다시 확인해주세요.')}
    }
})
console.log($flowerImg)
console.log(birthday_flower[0].month)
console.log(birthday_flower[0].flower)
console.log(birthday_flower[0].content)