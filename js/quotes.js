const quotes = ["Dwell on the beauty of life. Watch the stars, and see yourself funning width them",
"Waste no more time arguing about what a good man should be. Be one.",
"The happiness of your life depends upon the quality of your thoughts",
"Everything we hear is an opinion, not a fact. Everything we see is a perspective., not th truth",
"If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment",
"It is not death that a man should fear, but he should fear never beginning to live.",
"Very little is needed to make a happy life; it is all within yourself in your way of thinking.",
"The ves revenge is not to be like your enemy. ",
"He who laughs at himself never runs out of things to laugh at.",
"Small-minded people blame others. Average people blame themselves. The Wise see all blame ass foolishness."]

const quote = document.querySelector('.quote span');
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
// Math.random : 랜덤의 숫자를 제공, 여기에 *10을 곱하면 10내에서 랜덤 숫자를 제공 받을 수 있음. 하지만 소숫점으로 들어오기 때문에 자연수로 만들어줘야함. / Math.round 는 반올림을 해서 자연수로 만들어줌 / ceil 은 올림을 해서 자연수로 만들어줌. / floor 버림을 해서 자연수로 만드어줌

quote.innerText = todaysQuote;