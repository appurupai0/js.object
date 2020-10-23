console.log('---------------関数---------------');
// 関数の書き方
// function 関数名(){
	// 処理
// }

function myalert(){
	// alert('自作関数からHello')
	// アラートを表示後も自由に処理を追加できる
	let hantei = confirm('このボタンを押してもいいですか？');
	console.log(hantei);

	// 問題
	// OKボタンが押されたら、「大丈夫」、
	// キャンセルが押されたら「やり直し」
	// とコンソールに表ししましょう

	if(hantei === true){
		console.log('大丈夫');
	}else{
		console.log('やり直し');
	}

	// 文字の替え方
	let messageSpan = document.getElementById('message');
	messageSpan.textContent = '変わりました';
	messageSpan.style.color = 'blue';

	// 今日の宿題
	// OKボタンが押されたら、「大丈夫」、
	// キャンセルが押されたら「やり直し」
	// とid="message"のspanタグの部分に表示しましょう

	let trueorfalseSpan = document.getElementById('trueorfalse');
	if(hantei === true){
		trueorfalseSpan.textContent = '大丈夫';
		trueorfalseSpan.style.color = 'green';
		trueorfalseSpan.style.fontSize = '18px';
	}else{
		trueorfalseSpan.textContent = 'やり直し';
		trueorfalseSpan.style.color = 'red';
		trueorfalseSpan.style.fontSize = '24px';
	}
}



console.log('---------------関数（引数付き）---------------');
// 関数とは複数の処理を一つにまとめて名前を付けたもの
// 引数とは処理を行うために必要な情報

// 関数の書き方
// function 関数名(引数1, 引数2, ...){
	// 処理
// }

// alert(表示したい文字)　この場合、表示した文字、　の部分が引数に当たる
function myalert2(displayMessage){
	alert(displayMessage);
}

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printHoge
// 処理内容：「Hoge」　とコンソールに表示する
 function printHoge(){
 	console.log('Hoge');
 }

 // 作った関数を実行 (コンソールだけの表示は function を抜かした、関数名();で表示可能）よく見ると、htmlのonclickの後に書かれてあるものと同じ
 printHoge();


// 引数ありバージョン
 // function printHoge(print){
 // 	console.log(print);
 // }

 // printHoge('Hoge');

// 関数名：printNum
// 引数：1つの数値
// 処理内容：引数で受け取った数値をコンソールに表示する
 function printNum(number){
 	console.log(number);
 }

 printNum(4);


 // 以下の関数を作成して、作成した関数を実行してください。

 
// function printKuku(num){この中に繰り返したいfor文や指定を入れる}

  // function printKuku(num){
  // 	console.log(num * i);
  // }

  // printKuku(1);

  // for(let = i; i <= 9; i++){
  // 	console.log(i);
  // }

function printKuku(num){
	 let kotae = num * 1;
		 console.log(kotae);
		 kotae = num * 2;
		 console.log(kotae);
		 kotae = num * 3;
		 console.log(kotae);
		 kotae = num * 4;
		 console.log(kotae);
		 kotae = num * 5;
		 console.log(kotae);
		 kotae = num * 6;
		 console.log(kotae);
		 kotae = num * 7;
		 console.log(kotae);
		 kotae = num * 8;
		 console.log(kotae);
		 kotae = num * 9;
		 console.log(kotae);
	// for(let i = 1; i <= 9; i++){
	// 	console.log( num * i)
	// }
}

printKuku(6);

// 関数名：printKakezan
// 引数：2つの数値
// 処理内容：引数で受け取った2つの数値の掛け算の答えをコンソールに表示する

function printKakezan(a,b){
	let kotae = a * b;
	console.log(`${a}×${b}=${kotae}`);
}

printKakezan(77,8);

// 関数名：printIsEven
// 引数：1つの数値
// 処理内容：引数で受け取った数値が偶数の場合は「偶数です」と出力し、
// 奇数の場合は「奇数です」と出力する　　出力する＝コンソール表示する

function printIsEven(num){
	if(num % 2 === 0){
		console.log(`${num}は偶数です`);
	}else{
		console.log(`${num}は奇数です`);
	}
}

printIsEven(876545663);


function printMessage(message,num){
	for(let i=1; i <= num; i++){
		console.log(message);
	}
}

printMessage('どら焼き',5);


// 練習問題


// 関数名：printMaxNum
// 引数1：1つの数値
// 引数2：1つの数値
// 処理内容：引数で受け取った2つの数値のうち、最も大きな数値を出力する。
function printMaxNum(a,b){
	if(a > b){
		console.log(a);
	}else if(a < b){
		console.log(b);
	}else{
		console.log('同じ値')
	}
}

printMaxNum(4,1);



// 関数名：getSquared
// 引数1：1つの数値
// 処理内容：引数で受け取った数値の2乗を計算し返す
function getSquared(num){
	return num * num;
}

let result = getSquared(11);
console.log(result);


// 関数名：createSelfIntroductionText
// 引数1：1つの文字列
// 処理内容：「私の名前は○○です」という文字の〇〇を引数で受け取った文字列にし返す
function createSelfIntroductionText(moji){
	return "私の名前は" + (moji) + "です";
}

var name = createSelfIntroductionText('野比のび太');
console.log(name);



// 関数名：isEvenNumber
// 引数1：1つの数値
// 処理内容：引数で渡された値が偶数の場合は true、そうでない場合は false を返す。
function isEvenNumber(num){
	if(num % 2 === 0){
		return true;
	}else{
		return false;
	}
}

var anccer = isEvenNumber(11);
console.log(anccer);


// 関数名：isSeedKun
// 引数1：任意の文字列
// 処理内容：引数で渡された文字列が「SeedKun」の場合は true、そうでない場合は false を返す。
function isSeedKun(mojiretu){
	if(mojiretu == 'SeedKun'){
		return true;
	}else{
		return false;
	}
}

var kotae = isSeedKun('SeedKun');
console.log(kotae);