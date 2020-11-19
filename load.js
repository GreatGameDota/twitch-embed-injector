function loadIframe () {
	let player = document.querySelector('.video-player');

	const [ url ] = window.location.href.split('/').slice(-1);

	if (url !== 'directory' && window.location.href.split('/').length < 5) {
		let newPlayer =
			"<iframe class='video-player' src='https://player.twitch.tv/?channel=" +
			url +
      "&parent=www.twitch.tv' data-a-target='video-player' data-a-player-type='site' data-test-selector='video-player__video-layout'></iframe>";
		if (player.tagName !== 'IFRAME') {
			console.log('Switched Player');
			player.outerHTML = newPlayer;
		}
	}
}

console.log('ran');

setTimeout(loadIframe, 7000);
