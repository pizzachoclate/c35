class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(130,0)

        var input=createInput("Name")
        var Button=createButton("Play")
        var Gretting=createElement("h3")
        input.position(130,160)
        Button.position(250,200)

        Button.mousePressed(function (){
            input.hide()
            Button.hide()
            var Name=input.value()
            playerCount++
            player.update(Name)
            player.updateCount(playerCount)

            Gretting.html("Hello"+Name)
            Gretting.position(130,160)
        }
        )

        
    }
}