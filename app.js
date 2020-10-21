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
		trueorfalseSpan.textContent = '大丈夫'
	}else{
		trueorfalseSpan.textContent = 'やり直し'
	}
}

