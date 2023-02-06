document.querySelectorAll(".div").forEach(item => {
    item.addEventListener('click', function (element) {
        item.style.backgroundColor = "black"


        document.addEventListener('keydown', function (event) {
            if (event.key === 'a') {
                document.querySelector(".uno").style.backgroundColor = "red"
                document.querySelector(".dos").style.backgroundColor = "red"
                document.querySelector(".tres").style.backgroundColor = "red"
                document.querySelector(".cuatro").style.backgroundColor = "red"

            } else if (event.key === 's') {
                document.querySelector(".uno").style.backgroundColor = "green"
                document.querySelector(".dos").style.backgroundColor = "green"
                document.querySelector(".tres").style.backgroundColor = "green"
                document.querySelector(".cuatro").style.backgroundColor = "green"
            }
            else if (event.key === 'd') {
                document.querySelector(".uno").style.backgroundColor = "blue"
                document.querySelector(".dos").style.backgroundColor = "blue"
                document.querySelector(".tres").style.backgroundColor = "blue"
                document.querySelector(".cuatro").style.backgroundColor = "blue"
            }
        })
    })
})
