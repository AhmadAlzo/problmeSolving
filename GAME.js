const datas =`Hearts	Lion	Apple	TRUE
Diamonds	Fox	Bananas	FALSE
Spades	Parrot	Mango	TRUE
Clubs	Seal	Papaya	TRUE
Joker	Snake	Watermelon	FALSE
Hearts	Fox	Mango	FALSE
Diamonds	Seal	Papaya	FALSE
Spades	Lion	Watermelon	TRUE
Clubs	Parrot	Apple	FALSE
Joker	Snake	Bananas	TRUE
Hearts	Seal	Watermelon	TRUE
Diamonds	Lion	Papaya	FALSE
Spades	Parrot	Bananas	FALSE
Clubs	Fox	Mango	TRUE
Joker	Snake	Apple	FALSE
Hearts	Parrot	Papaya	TRUE
Diamonds	Lion	Watermelon	FALSE
Spades	Seal	Mango	TRUE
Clubs	Fox	Apple	FALSE
Joker	Snake	Bananas	FALSE
Hearts	Lion	Bananas	TRUE
Diamonds	Fox	Watermelon	FALSE
Spades	Seal	Apple	TRUE
Clubs	Parrot	Mango	FALSE
Joker	Snake	Papaya	FALSE
Hearts	Parrot	Watermelon	TRUE
Diamonds	Seal	Bananas	FALSE
Spades	Lion	Papaya	TRUE
Clubs	Fox	Apple	FALSE
Joker	Snake	Mango	FALSE
Hearts	Seal	Bananas	TRUE
Diamonds	Parrot	Apple	FALSE
Spades	Lion	Watermelon	TRUE
Clubs	Fox	Papaya	FALSE
Joker	Snake	Mango	FALSE
Hearts	Parrot	Bananas	TRUE
Diamonds	Lion	Apple	FALSE
Spades	Seal	Watermelon	TRUE
Clubs	Fox	Papaya	FALSE
Joker	Snake	Mango	FALSE
Hearts	Lion	Watermelon	TRUE
Diamonds	Fox	Bananas	FALSE
Spades	Seal	Papaya	TRUE
Clubs	Parrot	Mango	FALSE
Joker	Snake	Apple	FALSE
Hearts	Fox	Watermelon	TRUE
Diamonds	Seal	Bananas	FALSE
Spades	Lion	Papaya	TRUE
Clubs	Parrot	Apple	FALSE
Joker	Snake	Mango	FALSE
Hearts	Seal	Watermelon	TRUE
Diamonds	Lion	Papaya	FALSE
Spades	Parrot	Bananas	FALSE
Clubs	Fox	Mango	TRUE
Joker	Snake	Apple	FALSE
Hearts	Parrot	Papaya	TRUE
Diamonds	Seal	Watermelon	FALSE
Spades	Lion	Bananas	TRUE
Clubs	Fox	Apple	FALSE
Joker	Snake	Mango	FALSE
Hearts	Seal	Bananas	TRUE
Diamonds	Parrot	Apple	FALSE
Spades	Lion	Watermelon	TRUE
Clubs	Fox	Papaya	FALSE
Joker	Snake	Mango	FALSE
Hearts	Parrot	Bananas	TRUE
Diamonds	Lion	Apple	FALSE
Spades	Seal	Watermelon	TRUE
Clubs	Fox	Papaya	FALSE
Joker	Snake	Mango	FALSE
Hearts	Lion	Watermelon	TRUE
Diamonds	Fox	Bananas	FALSE
Spades	Seal	Papaya	TRUE
Clubs	Parrot	Mango	FALSE
Joker	Snake	Apple	FALSE
Hearts	Fox	Watermelon	TRUE
Diamonds	Seal	Bananas	FALSE`



function prodacte (arr){
  let data = datas.split("\n").map(e=>e.split("\t").filter(e=>e!=" "||e!=""))
  let spec = [['Diamonds', 'Hearts', 'Spades', 'Clubs', 'Joker'],['Lion', 'Fox','Parrot', 'Seal','Snake'],['Apple', 'Bananas', 'Mango', 'Watermelon', 'Papaya'],["TRUE","FALSE"]]
  data = data.map(e=>e.map((j,i)=>spec[i].indexOf(j)))
  return JSON.stringify(data)
} 