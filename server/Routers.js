'use strict';
//это массив имеющихся у грузопереврзчика маршрутов, совпадение с которыми мы проверяем
//грузоперевозчик может их менять, добавлять\удалять новые
const ROUTER = [
    [   'Grodno','Minsk', 'Fanipol', 'Dzerzhinsk',
        'Stolbtsy', 'Mir', 'Baranovichi', 'Ivatsevichi',
        'Bereza', 'Kobrin', 'Brest', 'Biala Podlaska', 'Siedlce',
        'Warsaw', 'Lodz', 'Wroclaw', 'Legnica', 'Görlitz', 'Bautzen',
        'Dresden', 'Leipzig', 'Dortmund', 'Dusseldorf', 'Eindhoven', 'Rotterdam',
    ],
    [
        'Paris', 'Reims', 'Kuven', 'Namur', 'Brussels', 'Liege', 'Koln', 'Bayreuth',
        'Karlovy Vary', 'Prague', 'Brno', 'Zakopane', 'Krakow', 'Tarnow', 'Lviv',
        'Chervonograd', 'Novovolynsk', 'Kovel', 'Brest', 'Kobrin', 'Ivanovo', 'Pinsk',
        'Mozyr', 'Rechitsa', 'Gomel', 'Klintsy', 'Bryansk', 'Kaluga', 'Obninsk',
        'Naro-Fominsk', 'Moscow', 'Grodno',
    ],
    [
        'Grodno', 'Bialystok', 'Warsaw', 'Krakow', 'Trencin', 'Bratislava', 
        'Wiener Neustadt', 'Leoben', 'Liezen', 'Schladming', 'Salzburg', 'Innsbrug', 
        'Bolzano', 'Trento', 'Verona', 'Brescia', 'Milan', 'Genoa', 
    ],
]
module.exports = ROUTER;