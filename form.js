class Form
{
    constructor()
    {
     this.input = createInput("name");
     this.button = createButton("play");
    }

    display()
    {
     this.input.position(100, 100);
     this.button.position(300, 100);

     this.button.mousePressed(()=>
     {
         this.input.hide();
         this.button.hide()
         playerCount += 1;
         player.index = playerCount;
         player.updateCount(playerCount);
         player.name = this.input.value();
         console.log(player.index);
     })
    }
}