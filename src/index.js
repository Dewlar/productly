import {Article} from "./js/Article";

const db = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/card_1.jpeg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: false,
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/card_2.jpeg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: false,
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/card_3.jpeg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: false,
    },
    {
        id: 4,
        title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
        urlToImage: './src/img/strategies/card_4.jpeg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: true,
    },
    {
        id: 5,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/card_5.jpeg',
        tags: ['Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: false,
    },
    {
        id: 6,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/card_1.jpeg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: false,
    },
    {
        id: 7,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/card_2.jpeg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: false,
    },
    {
        id: 8,
        title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
        urlToImage: './src/img/strategies/card_4.jpeg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: true,
    },
    {
        id: 9,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/card_3.jpeg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2023',
        wide: false,
    },
];

window.onload = function () {
    // render Articles
    if (db) {
        // todo: the method with wide elements needs to be improved
        wideElementPositionChanger(db);
        renderArticlesToDom(db);
    }
    // tags
    addTagsClickHandler(db);
}

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag);
            }
        }
    });
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const selectClickTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
        strategy.style.removeProperty('order');
    })
}

const filterStrategyBySelectedTag = (selectedTag) => {
    let visibleCardCounter = 0;
    let lastVisibleCardPosition = 0;
    let wideCounter = 0;
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach((strategy, i) => {

        !strategy.classList.contains('stub') && strategy.classList.add('strategy_hidden');

        strategy.style.order = (i).toString();

        strategy.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerText === selectedTag.innerText) {
                strategy.classList.remove('strategy_hidden');
                visibleCardCounter++;

                if (strategy.classList.contains('strategy_wide')) {
                    if ((visibleCardCounter + wideCounter) % 3 === 0) {
                        strategies[i].style.order = lastVisibleCardPosition.toString();
                        strategies[lastVisibleCardPosition].style.order = i.toString();
                    }
                    wideCounter++;
                } else {
                    lastVisibleCardPosition = i;
                }
            }
        })
    })
}

const renderArticlesToDom = (data) => {
    let strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach(article => {
        strategiesWrapper.append(article.generateArticle());
    });
    strategiesWrapper.insertAdjacentHTML('beforeend', `<article class="stub strategy"></article>`);
}

const getStrategiesWrapper = () => {
    const strategiesContainer = document.querySelector('.strategy-wrapper');
    strategiesContainer.innerHTML = '';
    return strategiesContainer;
}

const generateArticles = (data) => {
    let articles = [];
    data.forEach(article => {
        articles.push(new Article(article));
    })
    return articles;
}

const wideElementPositionChanger = (data) => {
    let wideCounter = 0;
    data.forEach((strategy, i) => {
        strategy.wide
        && ((i + 1 + wideCounter++) % 3 === 0)
        && data.splice(i - 1, 2, data[i], data[i - 1]);
    })

    return data;
}
