class Game
{
    constructor()
    {

    }

    getState()
    {
     var pc = database.ref('Gamestate');
     pc.on("value", (data)=>{
         gameState = data.val();

     });

    }

    updateState(count)
    {
      database.ref('/').update({
         gameState : count,
      })
    }
    
    start()
    {
        if(gameState === 0)
        {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}