// Отримання випадкового цілого числа у заданому інтервалі, включно
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function renderBanner(img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9) {
	let numberImg = getRandomIntInclusive(1, 9);
	let img_src
		switch (numberImg) {
		case 1: img_src = img_1
			break;
		case 2: img_src = img_2
			break;
		case 3: img_src = img_3
			break;
		case 4: img_src = img_4
			break;
		case 5: img_src = img_5
			break;
		case 6: img_src = img_6
			break;
		case 7: img_src = img_7
			break;
		case 8: img_src = img_8
			break;
		case 9: img_src = img_9
			break;
		default: img_src = img_9
			break;
	}
	let renderHTML = `
		<div>
			<img src="${img_src}" alt="Banner" style="width = 100px">
		</div>
	`;

	document.write(renderHTML)
}


function doMyHomeWork() {
	let img_1 = "https://img.wallpapic.com.ua/i1274-129-733/thumb/diki-tvarini-dikobraz-golkosherstovi-snig-shpalery.jpg"
	let img_2 = "https://img.wallpapic.com.ua/i0334-149-233/thumb/lev-diki-tvarini-skeli-shpalery.jpg"
	let img_3 = "https://img.wallpapic.com.ua/i1067-721-735/thumb/diki-tvarini-homyak-mili-shpalery.jpg"
	let img_4 = "https://img.wallpapic.com.ua/i4134-445-039/thumb/diki-tvarini-oposum-virginskij-zvichajnij-shpalery.jpg"
	let img_5 = "https://img.wallpapic.com.ua/i9695-649-923/thumb/diki-tvarini-oposum-zvichajnij-shpalery.jpg"
	let img_6 = "https://img.wallpapic.com.ua/i7115-149-033/thumb/izhachok-tvarini-derevyani-diki-shpalery.jpg"
	let img_7 = "https://img.wallpapic.com.ua/i3533-241-035/thumb/enot-tvarini-diki-lis-shpalery.jpg"
	let img_8 = "https://img.wallpapic.com.ua/i797-741-035/thumb/enot-tvarini-primat-zoopark-shpalery.jpg"
	let img_9 = "https://img.wallpapic.com.ua/i1046-445-039/thumb/enot-tvarini-diki-shpalery.jpg"
	renderBanner(img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9)
}


if (confirm('Почати тестування?')) {
	doMyHomeWork()
}