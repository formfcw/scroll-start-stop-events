const eventScrollstart = new Event('scrollstart');
const eventScrollstop = new Event('scrollstop');

export default function (element = window, stopDelay = 200, isScrolling = 'isScrolling') {
	function eventHandler() {
		if (!element[isScrolling]) {
			element.dispatchEvent(eventScrollstart);
			element[isScrolling] = true;
		}

		clearTimeout(element.scrollstopTimeoutId);
		element.scrollstopTimeoutId = setTimeout(function () {
			element.dispatchEvent(eventScrollstop);
			element[isScrolling] = false;
		}, stopDelay);
	}

	element.removeEventListener('scroll', eventHandler);
	element.addEventListener('scroll', eventHandler);
}
