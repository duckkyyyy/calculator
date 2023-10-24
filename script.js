const zodiacSign = [
    'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'scorpio',
    'sagittarius',
    'capricorn',
    'aquarius',
    'pisces'
]

const zodiac1 = document.getElementById('zodiac1');
const zodiac2 = document.getElementById('zodiac2');

const date1 = document.getElementById('date1');
const date2 = document.getElementById('date2');

const button = document.getElementById('button');
const zodiacResult = document.getElementById('zodiac-result');
const dateResult = document.getElementById('date-result');

let count = 0;
const finalResult = document.getElementById('final-result');
const resultBlock = document.querySelector('.results')


function findZodiacCompatibility(){
    const zodiac1Input = zodiac1.value;
    const zodiac2Input = zodiac2.value;
    const zodiacEl1 = zodiacSign.indexOf(zodiac1Input);
    const zodiacEl2 = zodiacSign.indexOf(zodiac2Input);
    const subtruct = Math.abs(zodiacEl1 - zodiacEl2);

    if (subtruct === 1 || subtruct === 11){
        count += 2;
        zodiacResult.innerHTML = `Тип пары: «Лучший друг и лучший враг» — несовместимость
        <br>
        Описание: самая популярная пара знаков среди всех остальных. Быстро заводят дружбу, но серьезным отношениям мешает конфликт стихий. Частые проблемы: зависть, соперничество, разница интересов и целей в жизни.`;
        
    }
    else if (subtruct === 2 || subtruct === 10){
        count += 6;
        zodiacResult.innerHTML = `Тип пары: «Старший брат и младший брат» — совместимость
        <br>
        Описание: пара знаков позитивно сочетающихся стихий. Здесь важно понимание своих ролей каждым из партнеров. "Старший брат" обычно превосходит "младшего" в возрасте, опыте или характере.`;
    }
    else if (subtruct === 3 || subtruct === 9){
        count += 3;
        zodiacResult.innerHTML = `Тип пары: «Покровитель и советник» — несовместимость
        <br>
        Описание: пара знаков стихий, находящихся в конфликте, но умеющих при желании находить точки соприкосновения. Увы, только в деловой, но не в семейной сфере. Для них лучше выбрать общий бизнес, чем дом.`;
    }
    else if (subtruct === 4 || subtruct === 8){
        count += 7;
        zodiacResult.innerHTML = `Тип пары: «Ребенок и родитель | Ученик и учитель» — совместимость
        <br>
        Описание: прекрасная пара знаков одной стихии. "Родитель" должен проявить всю свою мудрость, заботу и терпение - от него здесь зависит больше. "Ребенку" достаточно быть не слишком капризным и своенравным.`;
    }
    else if (subtruct === 5 || subtruct === 7){
        count += 3;
        zodiacResult.innerHTML = `Тип пары: «Удав и кролик» — несовместимость
        <br>
        Описание: пара, о которой пишут любовные романы. Без хэппи-энда. Сначала буря чувств, и эмоций. В конце - скука и усталость "удава", разбитое сердце "кролика". Советуем избегать, особенно, если "кролик" - это ваш знак.`;
    }
    else if (subtruct === 6){
        count += 5;
        zodiacResult.innerHTML = `Тип пары: «Противоположности притягиваются» — совместимость
        <br>
        Описание: как полюса магнита эти знаки такие разные, но и так же сильно их притяжение. Данные отношения настоятельно рекомендуются только опытным и мудрым партнерам. Молодежь делает много ошибок такой паре и редко в состоянии раскрыть весь ее потенциал.`;
    }
    else if (subtruct === 0){
        count += 4;
        zodiacResult.innerHTML = `«Тип пары: Я и мое зеркало» — несовместимость
        <br>
        Описание: часто встречающаяся пара у юных партнеров. Нет ничего проще, чем завязать отношения, с таким же как ты. Но и нет впоследствии ничего более унылого и раздражающего, чем видеть свои же недостатки рядом.`;
    }
}

function findDateCompatibility(){
    const dateValue1 = date1.valueAsNumber;
    const dateEl1 = new Date(dateValue1);
    const dateYear1 = dateEl1.getFullYear();
    const dateMonth1 = dateEl1.getMonth() + 1;
    const dateDay1 = dateEl1.getDate();

    const newYear1 = dateYear1.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);
    const newMonth1 = dateMonth1.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);
    const newDay1 = dateDay1.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);

    const sum1 = newYear1 + newMonth1 + newDay1;
    const newSum1 = sum1.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);
    

    const dateValue2 = date2.valueAsNumber;
    const dateEl2 = new Date(dateValue2);
    const dateYear2 = dateEl2.getFullYear();
    const dateMonth2 = dateEl2.getMonth() + 1;
    const dateDay2 = dateEl2.getDate();

    const newYear2 = dateYear2.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);
    const newMonth2 = dateMonth2.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);
    const newDay2 = dateDay2.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);

    const sum2 = newYear2 + newMonth2 + newDay2;
    const newSum2 = sum2.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);

    const sum = sum1 + sum2;
    const finalSum = sum.toString().split('').map(Number).reduce(function(acc, value){
        return acc += value;
    }, 0);

    if (finalSum === 1) {
        count += 3;
        dateResult.innerHTML = `Главное для такого союза – действовать вместе. Здесь выявляется внутренний потенциал друг друга. Такие отношения помогают общему развитию. Нельзя забывать, единица – это число лидера, поэтому могут быть недоразумения из-за деления власти в отношениях. Могут появиться ссоры и выяснения отношений, поэтому одному из партнёров просто необходимо научиться подчиняться другому, тогда и семейная жизнь, и бизнес будут более гармоничными.
       `
    }
    else if(finalSum === 2) {
        count += 2;
        dateResult.innerHTML = `Такая пара держится на материальной основе. Людям очень нравится общаться друг с другом, но они в основном это делают из-за прибыли, потому что вместе им везёт. Нельзя отрицать и того, что со временем может получиться семья с хорошим достатком. Здесь тоже всё будет стабильно. Но даже если Вы просто ведёте бизнес, Ваша фирма будет процветать. Надо помнить, что двойка является земной цифрой, поэтому ей не свойственны яркие чувства. Могут даже появиться конфликты на почве денег. Такой союз не любит перемен и романтики.
        `
    }
    else if(finalSum === 3) {
        count += 1;
        dateResult.innerHTML = `Основные составляющие этого союза – умение общаться и быть непостоянными. Скучно здесь не будет. Хочется заметить, что уместнее в данном случае будут дружеские отношения, так как в семье с этой цифрой возникает холодность. Даются друг другу обещания и не выполняются. Могут быть измены с обеих сторон. Это, пожалуй, самое сложное число для совместимости.
       `
    }
    else if(finalSum === 4) {
        count += 9;
        dateResult.innerHTML = `Организованность, размеренность, постоянство, комфорт – составляющие данного союза. Семья будет излучать тепло и благополучие. Теплота в отношениях делает их искренними. Чрезмерная энергия может мешать деловой жизни пары. Здесь главное – это духовное обогащение, получение новых впечатлений, но неспособность увеличения капитала.
        `
    }
    else if(finalSum === 5) {
        count += 6;
        dateResult.innerHTML = `Один из самых сексуальных союзов, где кипят страсти. Партнёры доставляют друг другу много приятных моментов. Всё основано только на любви. Но это пара эгоистов. Надо научиться не только слушать, но и слышать друг друга, тогда всё будет хорошо и в семье появятся счастливые дети. Избыток энергии может быть направлен на любую отрасль в бизнесе и достаточно успешно
        `
    }
    else if (finalSum === 6) {
        count += 8;
        dateResult.innerHTML = `Взаимопомощь и партнёрство – вот главные звенья этой пары. Это тоже земное число, поэтому и отношения бывают длительными. Для ведения бизнеса просто идеальный вариант. В семье – спокойствие, дружба, очень редко – выяснение отношений. Чувства могут угаснуть, а поддержка друг друга останется
       `
    }
    else if(finalSum === 7) {
        count += 7;
        dateResult.innerHTML = `Основа этого союза – гармония. Партнёры умеют договариваться. Нельзя не заметить, что здесь могут забывать о выполнении договорных обязательств. Хотя скандалы практически не наблюдаются, помогает чувство такта, которое не доводит до разрыва отношения. Такие союзы довольно успешны. Совместно решаются все проблемы, как семейные, так и материальные.
       `
    }
    else if(finalSum === 8) {
        count += 5;
        dateResult.innerHTML = `В этой паре наблюдается некоторая странность, даже можно сказать – нестандартность. Людей сильно тянет друг к другу. Один партнёр, благодаря такому влечению, может подталкивать другого, тем самым помогая ему реализоваться в бизнесе. Но здесь может появиться внутреннее неудовлетворение, если первый поймёт, что его в чём-либо использует из чувства корысти второй. Если возникнет ссора, она может перерасти в грандиозный скандал. Надо научиться поднимать самооценку. В паре возможна ревность. Необходимо быть гибкими в данном союзе, тогда всё получится.
        `
    }
    else if(finalSum === 9) {
        count += 4;
        dateResult.innerHTML = `Самая философская пара. Если в материальном плане здесь всё будет благополучно – перед нами идеальная пара. Ну а при слабом финансовом положении отношения дают трещину. Поэтому здесь лучше дружить, а не создавать семейный союз, так как быт может поглотить обоих и развести в разные стороны. Если же всё-таки брак имеет место, то обязательно кто-то из партнёров должен брать на себя многие бытовые проблемы. Тогда союз будет гармоничным.
        `
    }
}

function findFullCompatibility(){
    const finalResultEl = Math.round((count*100)/16);
    
    if (finalResultEl <=25){
        finalResult.innerHTML = `Совместимость 25%`
    }
    else if (finalResultEl >=25 && finalResultEl <=50){
        finalResult.innerHTML = `Совместимость 50%`
    }
    else if (finalResultEl >=50 && finalResultEl <=75){
        finalResult.innerHTML = `Совместимость 75%`
    }
    else if (finalResultEl >=75 && finalResultEl <=100){
        finalResult.innerHTML = `Совместимость 100%`
    }
}

button.addEventListener('click', function(){
    findZodiacCompatibility();
    findDateCompatibility();
    findFullCompatibility();
    resultBlock.removeAttribute("hidden")
})
