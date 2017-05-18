var main = function() {
  document.getElementsByClassName("skillsbox")[0].onmouseover = function() {
      var teller = 0;
      while (teller < document.getElementsByClassName("bar").length){
        document.getElementsByClassName("bar")[teller].style.width = document.getElementsByClassName("skill")[teller].getAttribute("data-percent");
        teller++;
    }
  }

  setInterval(slider, 3000);

  function slider(){
    //Array aanmaken met alle image-elementen in
    var albumLijst = document.getElementsByClassName("portfoliofoto");
    //Lege array maken waar de source attributen van de image-elementen in opslaan
    var mijnArray = [];

    //While aanmaken die alle src attributen van de image-elementen gaat opslaan in de lege array
    var teller = 0;
    while (teller < albumLijst.length){
      mijnArray[teller] = albumLijst[teller].getAttribute("src");
      teller++;
    }

    //Eerste element verwijderen dmv shift en opslaan in een variabele om achteraan te plaatsen dmv push
    var eersteElement = mijnArray.shift();
    mijnArray.push(eersteElement);

    /*While aanmaken die de src attributen, opgeslagen in de eerst nog lege array, in de nieuwe volgorde opslaan
    in de src attributen van de image-elementen. Dus met andere woorden de scr-attributen veranderen*/
    var teller1 = 0;
    while (teller1 < mijnArray.length){
      albumLijst[teller1].setAttribute("src", mijnArray[teller1]);
      teller1++;
    }
  }

}

window.onload = function() {
  main();
}

window.onscroll = function() {
  if (document.body.scrollTop === 0) {
    document.getElementsByTagName("header")[0].classList.remove("shrinked");
  } else {
    document.getElementsByTagName("header")[0].classList.add("shrinked");
  }
};
