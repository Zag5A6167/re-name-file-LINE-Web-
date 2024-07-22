const fileName = document.getElementById('fileName')
const displayName = document.getElementById('displayName')
const btnHref = document.getElementById('btnHref')
const stickerType = document.getElementById('stickerType')

stickerType.addEventListener('change',function(event){
    fileName.disabled = false
})
fileName.addEventListener('change',function(event){
    const selectedFiles = event.target.files
    
    if(selectedFiles.length > 0){
        let count = 0
        displayName.textContent = ''
        for(let i = 0;i<selectedFiles.length;i++){
            const selectedFile = selectedFiles[i]
            const newDiv = document.createElement('div')
            newDiv.id = 'inside'
            newDiv.textContent = selectedFile.name
            displayName.appendChild(newDiv)   
        }
    }else{
        console.log("No file")
    }
})



