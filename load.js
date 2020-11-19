function loadIframe () {
	let player = document.querySelector('.video-player');

	const [ url ] = window.location.href.split('/').slice(-1);

	if (url !== 'directory' && window.location.href.split('/').length < 5) {
		// let iframeUrl = `https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.twitch.tv%2F%3Fchannel%3D${url}%26muted%3Dfalse%26parent%3Dcdn.embedly.com&type=text%2Fhtml&card=1&schema=twitch`;

		iframeUrl = `'https://player.twitch.tv/?channel=${url}&parent=www.twitch.tv' data-a-target='video-player'`;

		let newPlayer = `<iframe class='video-player' src=${iframeUrl} data-a-player-type='site' data-test-selector='video-player__video-layout'></iframe>`;

		if (player.tagName !== 'IFRAME') {
			console.log('Switched Player');
			player.outerHTML = newPlayer;
			player.style = 'width: 100%; height: 100%';
		}
	}
}

console.log('ran');

setTimeout(loadIframe, 7000);
