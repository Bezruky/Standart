ymaps.ready(init)
function init() {
    const myMap = new ymaps.Map("map", {
        center: [coords[0], coords[1]],
        zoom: 10
    })
    const baloon = new ymaps.Placemark([coords[0], coords[1]], {
        balloonContentHeader: 'Информация:',
        balloonContentBody: `Адрес: ${street} <br>тел. ${phone}`,
        hintContent: 'Подробнее'
    })
    myMap.geoObjects.add(baloon)
}
