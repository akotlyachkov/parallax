function LightParallax(options) {
    options = options || {};
    let ratio = options.ratio || 15,
        className = options.className || '';

    if(!className) throw 'Нужно указать класс элемента, на который накладывается эффект параллакса';

    document.addEventListener('mousemove', function (e) {
        let w = window.innerWidth,
            h = window.innerHeight,
            offsetX = 0.5 - e.pageX / w,
            offsetY = 0.5 - e.pageY / h,
            image = document.getElementsByClassName(className)[0],
            translateM = `translate(${offsetX * ratio}px, ${offsetY * ratio}px)`;

        image.style.webkitTransform = translateM;
        image.style.MozTransform = translateM;
        image.style.transform = translateM;
    });
}

LightParallax({
    ratio: 20,
    className: 'bg'
});