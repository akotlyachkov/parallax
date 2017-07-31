/*function LightParallax(options) {
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
}*/


function LightParallax() {
    let instance, ratio, className;

    LightParallax = function LightParallax() {
        return instance;
    };

    LightParallax.prototype = this;

    instance = new LightParallax();

    instance.constructor = LightParallax;

    this.init = function (options) {
        options = options || {};
        ratio = options.ratio || 15;
        className = options.className || '';
        if (!className) throw 'Нужно указать класс элемента, на который накладывается эффект параллакса';
        document.addEventListener('mousemove', handler);
    };

    this.remove = function () {
        document.removeEventListener('mousemove', handler);
    };

    function handler(e) {
        console.log('параллакс');
        let image = document.getElementsByClassName(className)[0];
        if (image) {
            let w = window.innerWidth,
                h = window.innerHeight,
                offsetX = 0.5 - e.pageX / w,
                offsetY = 0.5 - e.pageY / h,
                translateM = `translate(${offsetX * ratio}px, ${offsetY * ratio}px)`;

            image.style.webkitTransform = translateM;
            image.style.MozTransform = translateM;
            image.style.transform = translateM;
        }
    }

    return instance;
}


let initBtn = document.getElementsByClassName('init')[0];
initBtn.addEventListener('click', function () {

    new LightParallax().init({
        ratio: 20,
        className: 'bg'
    });
});

let removeBtn = document.getElementsByClassName('remove')[0];
removeBtn.addEventListener('click', function () {
    new LightParallax().remove();
});