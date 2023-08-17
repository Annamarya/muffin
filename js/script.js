ymaps.ready(init);        
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [56.87259885790957,53.267021476112795],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });
     
        var coord = [56.87259885790957, 53.267021476112795];
        var myPlacemark = new ymaps.Placemark(coord);
        myMap.geoObjects.add(myPlacemark);
    }