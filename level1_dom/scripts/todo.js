const listInput = document.querySelector('#list')
const listAddBtn = document.querySelector('#list_add')
const listWrapUl = document.querySelector('#list_wrap')

listAddBtn.addEventListener('click',()=>{
    //입력안하면 '할일을 입력하세요' 메세지 출력(삼항조건) 아니면 함수 실행
    listInput.value == ''? alert('할일을 입력하세요') : toDoFunc();
})

listInput.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
    listInput.value == ''? alert('할일을 입력하세요') : toDoFunc()
    }
})

function toDoFunc(){
    listWrapUl.innerHTML += `<li><span>${listInput.value}</span><button type="button" class="close">X</button></li>`
    listInput.value = '';
    const toDoClose = document.querySelectorAll('li .close');
    console.log(toDoClose);
    //부모 parentNode
    //삭제내장함수 remove()
    for(let i of toDoClose){
        i.addEventListener('click',()=>{
            i.parentNode.remove()
        })
    }
    return console.log('할일출력 테스트');
}