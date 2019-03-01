document.addEventListener('DOMContentLoaded', ()=>{
  // // TODO: addEventListener keyup look for spacebar code
  // addeventlistener keyup look for spacebar code
  // if spacebar, run resetGame()
  // resetGame = () => clearAllTiles, reset tracker, enable all tiles
  const allTiles = document.querySelectorAll('button');
  let tracker = 0;
  const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];
  allTiles.forEach(tile=>{
    tile.addEventListener('click', ()=>{
      if (tile.innerText === '' && tracker%2 === 0) {
        tile.innerText = 'X';
        tracker++;
        // console.log(tracker);
      } else if (tile.innerText === '' && tracker%2 === 1) {
        tile.innerText = 'O';
        tracker++;
        // console.log(tracker);
      } else {
        window.alert(`This box has already been marked with a ${tile.innerText}`);
      }
      winner.forEach((combo, i) => {
        let a = combo[0];
        let b = combo[1];
        let c = combo[2];

        if (allTiles[a].innerText === allTiles[b].innerText
          && allTiles[a].innerText === allTiles[c].innerText
          && allTiles[a].innerText !== '') {
          window.alert(`The winner is ${allTiles[a].innerText}.`);
          console.log(`${allTiles[a].innerText} won.`);
          allTiles.forEach(buttonDisable => {
            buttonDisable.disabled = true;
          })
        }
        else if (tracker === 9 && i === winner.length) {
          window.alert(`Looks like there's a draw.`);
          console.log(`There's a draw.`);
        }
      });
    })
  });
});
