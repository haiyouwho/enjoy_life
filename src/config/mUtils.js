let sMoveBaseUrl = 'http://api.douban.com/v2/'
let sMoveInHot = 'movie/in_theaters'
let sMoveDetailUrl = 'movie/subject/'
let sComingSoonUrl = 'movie/coming_soon'
let sSearchByName = 'movie/search?q='
let sSearchByType = 'movie/search?tag='


function getScreenHeight() {
    var sH = window.screen.height;
    return sH;
}

function setGlobalfontSize(size) {
    var oHtml = document.querySelector('html');
    var width = oHtml.getBoundingClientRect().width;
    oHtml.style.fontSize = width / size + 'px';
}

function getUrlData(obj, url, callback) {
    obj.jsonp(url, null, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            callback(data);
        }
    });
}

export {
    getScreenHeight,
    setGlobalfontSize,
    sMoveBaseUrl,
    sMoveInHot,
    sMoveDetailUrl,
    sComingSoonUrl,
    sSearchByName,
    sSearchByType,
    getUrlData
}

/**
 * 获取localStorage
 */
// export const getStore = name => {
//     if (!name) return;
//     return window.localStorage.getItem(name);
// }