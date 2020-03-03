(function(window) {
	function defineLetters() {
		var Letters = {};
		Letters.init = function(options) {
			function wrapLetters(wrapper) {
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
					'<div class="letters-container"><div class="line"></div><div class="line2"></div>' +
					spanedText.join('') +
					'</div>';
			}

			if (typeof options === 'undefined') {
				const elements = document.querySelectorAll('[data-LettersJS]');

				elements.forEach(function(e) {
					wrapLetters(e);
				});
			} else {
				wrapLetters(document.querySelector(options.selector));
			}
		};
		return Letters;
	}

	if (typeof Letters === 'undefined') {
		window.Letters = defineLetters();
	}
})(window);
