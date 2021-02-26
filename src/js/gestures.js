delete Hammer.defaults.cssProps.userSelect

const body = document.getElementById('body')

const HammerJs = new Hammer(body)

HammerJs.on('panleft panright', (ev) => {
    if (ev.pointerType === 'touch') {
        if (ev.type === 'panleft' && ev.distance > 100) {
            formElement.classList.add('active')
        }
        if (ev.type === 'panright' && ev.distance < 100) {
            formElement.classList.remove('active')
        }
    }
})
