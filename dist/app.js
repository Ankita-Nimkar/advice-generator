

// const thought = async () => {
//     try {
//         const res =await axios.get('https://type.fit/api/quotes')
//         console.log(res)
// thoughtArr=[]
//         for (let i = 0; i < 1643; i++) {
//             thoughtText = res.data[i].text
// thoughtArr.push(thoughtText)
       
//         } thoughtNo = Math.floor((Math.random() * 1643) + 0); 
//         document.body.append(thoughtArr[thoughtNo])
//     }

//     catch (err){
//         console.log(err)
//     }


let divContainer=document.querySelector('.container')
const button=document.querySelector('.newQuote')
const thoughtContainer=document.querySelector('.thoughtContainer')


     const thought = async () => {
      
          const res = await fetch('https://type.fit/api/quotes')
        
            const data = await res.json()
            
              thoughtArr=[]
                      for (let i = 0; i < 1643; i++) {
                          thoughtText = data[i].text
              thoughtArr.push(thoughtText)
                    
                      } 
                      
                      thoughtNo = Math.floor((Math.random() * 1643) + 0); 
                 aThought=thoughtArr[thoughtNo]
                
                   thoughtContainer.append(aThought)
                   
                   thoughtContainer.style.transition = "all 1s"
                   var x = Math. floor(Math. random() * 250);
var y = Math. floor(Math. random() * 250);
var z = Math. floor(Math. random() * 250);
var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                   
                   document.body.style.backgroundColor=bgColor
                   document.body.style.transition = "all 1s"
                   divContainer.style.color=bgColor
                   
                   divContainer.style.fontSize='1.6em'
                   
                   
                  button.style.backgroundColor=bgColor
                  button.style.transition = "all 1s"
                  
            
                 }
                 
                 thought()
 
     button.addEventListener('click',()=>{
  
        thoughtContainer.textContent=''
       
       
        thought()
     
     },)
     
 


         