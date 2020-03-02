(function(window) {
	function defineLetters() {
		var Letters = {};
		Letters.init = function(options) {
			const wrapper = document.querySelector(options.grab);
			var text = wrapper.innerHTML.split('');
			var counter = 0;
			function checkPosition(counter) {
				try {
					return options.lettersOver.includes(counter);
				} catch {
					return counter % 2 === 1;
				}
			}

			var spanedText = text.map(e => {
				counter += 1;
				return `<span class="letter-wrapper">${e}<span 
                class="letter${
					checkPosition(counter) ? '-up' : '-down'
				}">${e}</span></span>`;
			});

			wrapper.innerHTML =
				'<div class="letters-container"><div class="line"></div>' +
				spanedText.join('') +
				'</div>';
		};
		return Letters;
	}

	if (typeof Letters === 'undefined') {
		window.Letters = defineLetters();
	}
})(window);
