export function scrollToTop() {
	/**
	 * We have to wait a little bit because of 
	 * some stange behaviour in the react-router 
	 * whch stops all scrolls for some time.
	**/

	setTimeout(() => {
		window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
	}, 1);
}

export const scrollWithOffset = (element: HTMLElement) => {
    const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
    const yOffset = -150; 

    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}