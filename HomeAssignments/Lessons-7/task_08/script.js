function renderBanner(img_src, title, a_href) {
	let renderHTML = `
		<div>
			<h1>${title}</h1>
			<a href="${a_href}">
				<img src="${img_src}" alt="Banner" style="width = 100px">
			</a>
		</div>
	`;

	return renderHTML
}


function doMyHomeWork() {
	let img = prompt("Ведіть зображення", "https://img.wallpapic.com.ua/i6626-629-713/thumb/simpsoni-meduzi-tvarini-kistka-shpalery.jpg");
	let title = prompt("Ведіть напис", "ДЗ по функціях тут");
	let link = prompt("Ведіть посилання", "https://docs.google.com/document/d/1xp-HdQofZx_nJK3KhwAZb_tgLx2vJVoQ/edit");

	document.write(renderBanner(img, title, link))
}

if (confirm('Почати тестування?')) {
	doMyHomeWork()
}
