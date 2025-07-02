


var data =document.getElementById('data');
document.getElementById('quotes');
var q=['If you tell the truth, you dont have to remember anything.','Live as if you were to die tomorrow. Learn as if you were to live forever','Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .','To live is the rarest thing in the world. Most people exist, that is all.','A friend is someone who knows all about you and still loves you.','A friend is someone who knows all about you and still loves you.'];
console.log(q.length);
function getRandomFromArray(q) {
  const index = Math.floor(Math.random() * q.length);
  return q[index];
}
var random = getRandomFromArray(q);
   

data.innerHTML=
`  <div class=" container text-center my-5">
        <h1 class="fs-70px">Quote of the Day</h1>
        <h1>Press the button below to recieve a random quote!</h1>
        <button type="reset" onclick="getRandomFromArray(q)" class="btn-hover btn w-25 h-80px btn-primary rounded-0 border-2 border-black">New Quote</button>
        <div class="w-100 text-center" >`+ random +`</div>
    </div>`

    console.log('Hello')