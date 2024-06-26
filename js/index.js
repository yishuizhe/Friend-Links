const links = [{
		name: "fliggy的个人小窝",
		url: "https://www.fliggy.top/",
		description: "蟹堡王团队创始人,比基尼海滩摊主。",
		avatar: "https://www.fliggy.top/usr/themes/handsome/assets/img/avatar.jpg"
	},
	{
		name: "懵仙兔兔",
		url: "https://2dph.com",
		description: "永远相信，美好的事情即将发生。",
		avatar: "https://2dph.com/logo.png"
	},
	{
		name: "Py-Blog",
		url: "https://www.018z.com/",
		description: "总有人间一两风，填我十万八千梦。",
		avatar: "https://www.018z.com/static/upload/1699953130000.jpg"
	},
	{
		name: "国光 - 分享与收获",
		url: "https://www.sqlsec.com/",
		description: "逆水行舟，不进则退。",
		avatar: "https://html.sqlsec.com/hexo/avatar.png"
	},
	// {
	// 	name: "网站2",
	// 	url: "https://example2.com",
	// 	description: "这是网站2的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站3",
	// 	url: "https://example3.com",
	// 	description: "这是网站3的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站1",
	// 	url: "https://example1.com",
	// 	description: "这是网站1的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站2",
	// 	url: "https://example2.com",
	// 	description: "这是网站2的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站3",
	// 	url: "https://example3.com",
	// 	description: "这是网站3的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站1",
	// 	url: "https://example1.com",
	// 	description: "这是网站1的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站2",
	// 	url: "https://example2.com",
	// 	description: "这是网站2的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站3",
	// 	url: "https://example3.com",
	// 	description: "这是网站3的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站1",
	// 	url: "https://example1.com",
	// 	description: "这是网站1的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站2",
	// 	url: "https://example2.com",
	// 	description: "这是网站2的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站3",
	// 	url: "https://example3.com",
	// 	description: "这是网站3的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站1",
	// 	url: "https://example1.com",
	// 	description: "这是网站1的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站2",
	// 	url: "https://example2.com",
	// 	description: "这是网站2的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站3",
	// 	url: "https://example3.com",
	// 	description: "这是网站3的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站1",
	// 	url: "https://example1.com",
	// 	description: "这是网站1的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站2",
	// 	url: "https://example2.com",
	// 	description: "这是网站2的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站3",
	// 	url: "https://example3.com",
	// 	description: "这是网站3的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站1",
	// 	url: "https://example1.com",
	// 	description: "这是网站1的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站2",
	// 	url: "https://example2.com",
	// 	description: "这是网站2的描述",
	// 	avatar: "博主头像路径"
	// },
	// {
	// 	name: "网站3",
	// 	url: "https://example3.com",
	// 	description: "这是网站3的描述",
	// 	avatar: "博主头像路径"
	// }
];

const linkList = document.querySelector('.link-list .links');
const pagination = document.querySelector('.pagination');
const linksPerPage = 18;
const totalPages = Math.ceil(links.length / linksPerPage);
jinrishici.load(function(result) {
	var sentence = document.querySelector("#poem_sentence")
	var info = document.querySelector("#poem_info")
	sentence.innerHTML = result.data.content
	info.innerHTML = result.data.origin.author
});

function displayLinks(pageNumber) {
    linkList.innerHTML = '';
    const startIndex = (pageNumber - 1) * linksPerPage;
    const endIndex = Math.min(startIndex + linksPerPage, links.length);
    for (let i = startIndex; i < endIndex; i++) {
        const link = links[i];
        const linkBox = document.createElement('div');
        linkBox.classList.add('link-box');

        // 创建一个包含所有内容的容器 div
        const contentDiv = document.createElement('div');

        linkBox.appendChild(contentDiv);

        contentDiv.innerHTML = `
            <img src="${link.avatar}" alt="博主头像" width="50" height="50">
            <div class="link-text">
                <div><p>${link.name}</p></div>
                <div class="link-description">${link.description}</div>
            </div>
        `;

        // 为容器 div 添加点击事件，实现点击整个 div 跳转
        contentDiv.addEventListener('click', () => {
            window.location.href = link.url;
        });

        linkList.appendChild(linkBox);
    }
}

function updatePagination(currentPage) {
	pagination.innerHTML = '';
	for (let i = 1; i <= totalPages; i++) {
		const button = document.createElement('button');
		button.textContent = i;
		button.addEventListener('click', () => {
			displayLinks(i);
			updatePagination(i);
		});
		if (i === currentPage) {
			button.disabled = true;
		}
		pagination.appendChild(button);
	}
}

// 初始显示第一页
displayLinks(1);
updatePagination(1);