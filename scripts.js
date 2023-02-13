let pageNumber = document.getElementById('page-number')
let loadNext = document.getElementById('load_next')
let loadPrev = document.getElementById('load_prev')
let issue = document.getElementById('issue')
let list = document.getElementById('list')
let page = document.getElementById('myFrame')
let count = 0
let html = ''
let pageNum = 0





window.addEventListener('load', function() {

  pageNum = pageNum + 1
  pageNumber.textContent = `Page Number ${pageNum}`
  fetch(`https://api.github.com/repositories/1296269/issues?page=$%${pageNum}BpageNumberHere%7D&per_page=5`)
  .then((response)=>response.json())
  .then((data)=> {
    for(let i=0;i<data.length;i++){
      list.innerHTML = list.innerHTML + `<li>${data[i].title}</li>`
    }
  })
  .catch(error => console.log(error))

});





loadNext.addEventListener('click',function(){

  list.innerHTML = ''
  pageNum = pageNum + 1
  pageNumber.textContent = `Page Number ${pageNum}`
  fetch(`https://api.github.com/repositories/1296269/issues?page=$%${pageNum}BpageNumberHere%7D&per_page=5`)
  .then((response)=>response.json())
  .then((data)=> {
    for(let i=0;i<data.length;i++){
      list.innerHTML = list.innerHTML + `<li>${data[i].title}</li>`
    }
  })
  .catch(error => console.log(error))
})

loadPrev.addEventListener('click',function(){
  if(pageNum > 1){
    list.innerHTML = ''
  pageNum = pageNum - 1
  pageNumber.textContent = `Page Number ${pageNum}`
  fetch(`https://api.github.com/repositories/1296269/issues?page=$%${pageNum}BpageNumberHere%7D&per_page=5`)
  .then((response)=>response.json())
  .then((data)=> {
    for(let i=0;i<data.length;i++){
      list.innerHTML = list.innerHTML + `<li>${data[i].title}</li>`
    }
  })
  .catch(error => console.log(error))
  }
})
// issueList()