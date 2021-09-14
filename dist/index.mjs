import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var ReactTinyLinkType;
(function (ReactTinyLinkType) {
    ReactTinyLinkType["TYPE_AMAZON"] = "TYPE_AMAZON";
    ReactTinyLinkType["TYPE_YOUTUBE"] = "TYPE_YOUTUBE";
    ReactTinyLinkType["TYPE_AUDIO"] = "TYPE_AUDIO";
    ReactTinyLinkType["TYPE_VIDEO"] = "TYPE_VIDEO";
    ReactTinyLinkType["TYPE_IMAGE"] = "TYPE_IMAGE";
    ReactTinyLinkType["TYPE_DEFAULT"] = "TYPE_DEFAULT";
    ReactTinyLinkType["TYPE_INSTAGRAM"] = "TYPE_INSTAGRAM";
    ReactTinyLinkType["TYPE_BOARDGAMEGEEK"] = "TYPE_BOARDGAMEGEEK";
    ReactTinyLinkType["TYPE_TWITTER"] = "TYPE_TWITTER";
})(ReactTinyLinkType || (ReactTinyLinkType = {}));

var REGEX_STRIP_WWW = /^www\./;
var media = {
    mobile: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    @media (max-width: 48em) {\n      ", ";\n    }\n  "], ["\n    @media (max-width: 48em) {\n      ", ";\n    }\n  "])), css.apply(void 0, args));
    },
    desktop: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n    @media (max-width: 48em) {\n      ", ";\n    }\n  "], ["\n    @media (max-width: 48em) {\n      ", ";\n    }\n  "])), css.apply(void 0, args));
    },
};
var getHostname = function (href) {
    var hostname = new URL(href).hostname;
    return hostname.replace(REGEX_STRIP_WWW, '');
};
var isLarge = function (cardSize) { return cardSize === 'large'; };
var isValidImageURL = function (src) {
    if (typeof src !== 'string')
        return false;
    return !!src.match(/\w+\.(a?png|gif|jpe?g|svg|webp)/gi);
};
var isValidVideoURL = function (src) {
    if (typeof src !== 'string')
        return false;
    return !!src.match(/\w+\.(mp4|ogg|webm)/gi);
};
var findFirstSecureUrl = function (records, condition) {
    var result = records.find(function (record) { return condition(record) && record.startsWith('https://'); });
    return result ? result : '';
};
/**
 * @returns {IReactTinyLinkData} with default values.
 *
 * @param url url to fetch
 * @param defaultMedia media assigned to both the image and the video
 */
function defaultData(url, defaultMedia) {
    return {
        title: url.substring(url.lastIndexOf('/') + 1),
        description: url.substring(url.lastIndexOf('/') + 1),
        image: defaultMedia,
        url: url,
        video: defaultMedia,
        type: ReactTinyLinkType.TYPE_DEFAULT,
    };
}
/** does nothing. Just here to have a constance reference */
function noop() {
    return;
}
/**
 * Wraps a promise to make it cancelable.
 *
 * from https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 * defined by @istarkov at:
 * https://github.com/facebook/react/issues/5465#issuecomment-157888325
 */
var makeCancelable = function (promise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
        promise.then(function (val) { return hasCanceled_ ? reject({ isCanceled: true }) : resolve(val); }, function (error) { return hasCanceled_ ? reject({ isCanceled: true }) : reject(error); });
    });
    return {
        promise: wrappedPromise,
        cancel: function () {
            hasCanceled_ = true;
        },
    };
};
var templateObject_1$2, templateObject_2$2;

// Media Style
var smallMediaStyle = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  height: 127px;\n"], ["\n  height: 127px;\n"])));
var largeMediaStyle = css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  height: ", ";\n"], ["\n  height: ", ";\n"
    // Content Style
])), function (_a) {
    var isShownGraphic = _a.isShownGraphic;
    return (isShownGraphic ? '382px;' : 'auto');
});
// Content Style
var largeContentStyle = css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  flex: 0 0 125px;\n"], ["\n  flex: 0 0 125px;\n"])));
var smallDescriptionStyle = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  p {\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    -webkit-line-clamp: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n  }\n  ", ";\n"], ["\n  p {\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    -webkit-line-clamp: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n  }\n  ",
    ";\n"])), function (_a) {
    var maxLine = _a.maxLine;
    return (maxLine ? maxLine : 2);
}, media.mobile(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    > p {\n      \n  -webkit-line-clamp: ", ";\n \n    }\n  "], ["\n    > p {\n      \n  -webkit-line-clamp: ", ";\n \n    }\n  "])), function (_a) {
    var minLine = _a.minLine;
    return (minLine ? minLine : 1);
}));
var largeDescriptionStyle = css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  p {\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    -webkit-line-clamp: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n  }\n  ", ";\n"], ["\n  p {\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    -webkit-line-clamp: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n  }\n  ",
    ";\n"
    // Styled Components for cards
])), function (_a) {
    var maxLine = _a.maxLine;
    return (maxLine ? maxLine : 2);
}, media.mobile(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    > p {\n      -webkit-line-clamp: ", ";\n    }\n  "], ["\n    > p {\n      -webkit-line-clamp: ", ";\n    }\n  "])), function (_a) {
    var minLine = _a.minLine;
    return (minLine ? minLine : 1);
}));
// Styled Components for cards
var Media = styled('div')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: block;\n    height: auto;\n    position: relative;\n    background: ", ";\n    \n    flex: ", "\n    overflow: hidden;\n    transition: flex-basis 0.25s ease-in-out 0s;\n"], ["\n    display: block;\n    height: auto;\n    position: relative;\n    background: ",
    ";\n    \n    flex: ", "\n    overflow: hidden;\n    transition: flex-basis 0.25s ease-in-out 0s;\n"])), function (_a) {
    var src = _a.src, placeholderBg = _a.placeholderBg, type = _a.type;
    return src
        ? "url(" + src + ") center center / " + (type === ReactTinyLinkType.TYPE_AUDIO ? "contain" : "cover") + " no-repeat rgb(225, 232, 237)"
        : placeholderBg;
}, function (_a) {
    var cardSize = _a.cardSize;
    return (isLarge(cardSize) ? '1 1 0%;' : '0 0 125px;');
});
Media.defaultProps = {
    placeholderBg: "rgb(225, 232, 235)",
};
var Video = styled('video')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\nwidth:100%;\ndisplay: block;\nheight: 100%;\n    position: relative;\n    flex: ", "\n    overflow: hidden;\nobject-fit:cover\n"], ["\nwidth:100%;\ndisplay: block;\nheight: 100%;\n    position: relative;\n    flex: ", "\n    overflow: hidden;\nobject-fit:cover\n"])), function (_a) {
    var cardSize = _a.cardSize;
    return (isLarge(cardSize) ? '1 1 0%;' : '0 0 125px;');
});
var ContentWrapper = styled('div')(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ", ";\n"], ["\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ", ";\n"])), function (_a) {
    var cardSize = _a.cardSize;
    return isLarge(cardSize) && largeContentStyle;
});
var Header = styled('header')(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  text-align: left;\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  flex-grow: 1.2;\n\n  ", ";\n"], ["\n  text-align: left;\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  flex-grow: 1.2;\n\n  ", ";\n"])), function (_a) {
    var cardSize = _a.cardSize;
    return (!isLarge(cardSize) ? smallDescriptionStyle : largeDescriptionStyle);
});
var Content = styled('div')(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  text-align: left;\n  font-size: 14px;\n  flex-grow: 1;\n  margin: auto 0;\n  line-height: 18px;\n\n  ", ";\n"], ["\n  text-align: left;\n  font-size: 14px;\n  flex-grow: 1;\n  margin: auto 0;\n  line-height: 18px;\n\n  ", ";\n"])), function (_a) {
    var cardSize = _a.cardSize;
    return (!isLarge(cardSize) ? smallDescriptionStyle : largeDescriptionStyle);
});
var Footer = styled('footer')(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  text-align: left;\n  font-size: 12px;\n  margin: 0;\n  flex-grow: 0;\n"], ["\n  text-align: left;\n  font-size: 12px;\n  margin: 0;\n  flex-grow: 0;\n"])));
var Card = styled('a')(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  max-width: ", ";\n  background-color: rgb(255, 255, 255);\n  color: rgb(24, 25, 25);\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  display: flex;\n  opacity: 1;\n  position: relative;\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n  flex-direction: ", "\n    ", ";\n\n  transition-property: background, border-color, height;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(225, 232, 237);\n  overflow: hidden;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgb(245, 248, 250);\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);\n  &:hover {\n    background: rgb(245, 248, 250);\n  }\n"], ["\n  max-width: ", ";\n  background-color: rgb(255, 255, 255);\n  color: rgb(24, 25, 25);\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  display: flex;\n  opacity: 1;\n  position: relative;\n  transition-duration: 0.35s;\n  transition-timing-function: ease-in-out;\n  flex-direction: ", "\n    ", ";\n\n  transition-property: background, border-color, height;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(225, 232, 237);\n  overflow: hidden;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgb(245, 248, 250);\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);\n  &:hover {\n    background: rgb(245, 248, 250);\n  }\n"])), function (_a) {
    var width = _a.width;
    return (width ? width : "100vw");
}, function (_a) {
    var cardSize = _a.cardSize;
    return (isLarge(cardSize) ? 'column' : 'row');
}, function (_a) {
    var cardSize = _a.cardSize;
    return (isLarge(cardSize) ? largeMediaStyle : smallMediaStyle);
});
Card.defaultProps = {
    rel: 'noopener noreferrer',
    target: '_blank',
};
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;

// Key Frames
var shimmerKeyFrame = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   0%{\n        background-position: 100% 80%;\n    }\n    100%{\n        background-position: 0 80%;\n    }\n"], ["\n   0%{\n        background-position: 100% 80%;\n    }\n    100%{\n        background-position: 0 80%;\n    }\n"])));
var loadingStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation-duration: 1.4s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-name: ", ";\n  background: darkgray;\n  background: linear-gradient(90deg, #cacaca 25%, #e4e4e4 37%, #f7f6f6 63%);\n  background-size: 800px 100%;\n  color: transparent;\n  -webkit-line-clamp: 1;\n  border-radius: 10px;\n  width: ", ";\n"], ["\n  animation-duration: 1.4s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-name: ", ";\n  background: darkgray;\n  background: linear-gradient(90deg, #cacaca 25%, #e4e4e4 37%, #f7f6f6 63%);\n  background-size: 800px 100%;\n  color: transparent;\n  -webkit-line-clamp: 1;\n  border-radius: 10px;\n  width: ", ";\n"])), shimmerKeyFrame, function (_a) {
    var loadingWidth = _a.loadingWidth;
    return (loadingWidth ? 100 / loadingWidth + "%" : "100%");
});
var UnstyledDescription = function (_a) {
    _a.loading; _a.loadingWidth; _a.maxLine; _a.minLine; var className = _a.className, props = __rest(_a, ["loading", "loadingWidth", "maxLine", "minLine", "className"]);
    return (React.createElement("p", __assign({}, props, { className: className }), props.children));
};
var Description = styled(UnstyledDescription)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &&& {\n    text-align: inherit;\n    font-weight: inherit;\n    font-family: inherit;\n    color: inherit;\n    margin: 0;\n    ", "\n  }\n"], ["\n  &&& {\n    text-align: inherit;\n    font-weight: inherit;\n    font-family: inherit;\n    color: inherit;\n    margin: 0;\n    ", "\n  }\n"])), function (_a) {
    var loading = _a.loading;
    return loading && loadingStyle;
});
var templateObject_1, templateObject_2, templateObject_3;

var REGEX_AMAZON_URL = /https?:\/\/(.*amazon\..*\/.*|.*amzn\..*\/.*|.*a\.co\/.*)/i;
var isAmazonUrl = function (url) { return REGEX_AMAZON_URL.test(url); };
var REGEX_YOUTUBE = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
var isYoutubeUrl = function (url) { return !!url.toString().match(REGEX_YOUTUBE); };
var REGEX_INSTAGRAM = /(https?:\/\/www\.)?instagram\.com(\/p\/\w+\/?)/gi;
var isInstagramUrl = function (url) { return !!url.toString().match(REGEX_INSTAGRAM); };
var REGEX_BOARDGAMEGEEK = /(https?:\/\/www\.)?boardgamegeek\.com(\/boardgame\/\w+\/\w+\/?)/gi;
var isBoardGameGeekUrl = function (url) { return !!url.toString().match(REGEX_BOARDGAMEGEEK); };
var REGEX_TWITTER = /(https?:\/\/(www)?\.?)?twitter\.com\/.+/gi;
var isTwitterUrl = function (url) { return !!url.toString().match(REGEX_TWITTER); };
var isEmpty = function (value) {
    var isEmptyObject = function (a) {
        if (typeof a.length === 'undefined') {
            // it's an Object, not an Array
            var hasNonempty = Object.keys(a).some(function nonEmpty(element) {
                return !isEmpty(a[element]);
            });
            return hasNonempty ? false : isEmptyObject(Object.keys(a));
        }
        return !a.some(function nonEmpty(element) {
            // check if array is really not empty as JS thinks
            return !isEmpty(element); // at least one element should be non-empty
        });
    };
    return (value == false ||
        typeof value === 'undefined' ||
        value == null ||
        (typeof value === 'object' && isEmptyObject(value)));
};
var isAudio = function (mimeType) { return mimeType.startsWith('audio/'); };
var isVideo = function (mimeType) { return mimeType.startsWith('video/'); };
var isImage = function (mimeType) { return mimeType.startsWith('image/'); };
// Basic Scrap Helpers
var getTitleOfDoc = function (htmlDoc) {
    var titleEl = htmlDoc.querySelector('title');
    if (!titleEl) {
        return null;
    }
    return titleEl.innerText;
};
var getAttrOfDocElement = function (htmlDoc, query, attr) {
    var el = htmlDoc.querySelector(query);
    if (!el) {
        return null;
    }
    return el.getAttribute(attr);
};
var getYoutTubeVideoId = function (url) {
    var parsed = url.match(/^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/);
    if (parsed && parsed[3]) {
        return parsed[3];
    }
    else {
        return null;
    }
};
var fixRelativeUrls = function (baseUrl, itemUrl) {
    var normalizedUrl = itemUrl.toLocaleLowerCase();
    if (normalizedUrl.startsWith('http://') || normalizedUrl.startsWith('https://')) {
        return itemUrl;
    }
    return new URL(itemUrl, baseUrl).href;
};
var getBaseUrl = function (htmlDoc, url) { return getAttrOfDocElement(htmlDoc, 'base', 'href') || new URL(url).origin; };

var _this$9 = undefined;
var ScrapVideo = (function (url, defaultMedia) { return __awaiter(_this$9, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                title: url.substring(url.lastIndexOf('/') + 1),
                description: url,
                image: [],
                video: [url, defaultMedia].filter(function (i) { return !isEmpty(i); }),
                url: url,
                type: ReactTinyLinkType.TYPE_VIDEO,
            }];
    });
}); });

var _this$8 = undefined;
var ScrapAudio = (function (url, defaultMedia) { return __awaiter(_this$8, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                title: url.substring(url.lastIndexOf('/') + 1),
                description: url.substring(url.lastIndexOf('/') + 1),
                url: url,
                image: [defaultMedia].filter(function (i) { return !isEmpty(i); }),
                video: [],
                type: ReactTinyLinkType.TYPE_AUDIO,
            }];
    });
}); });

var _this$7 = undefined;
var ScrapImage = (function (url, defaultMedia) { return __awaiter(_this$7, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, ({
                title: url.substring(url.lastIndexOf('/') + 1),
                description: url.substring(url.lastIndexOf('/') + 1),
                url: url,
                video: [],
                image: [url, defaultMedia].filter(function (i) { return !isEmpty(i); }),
                type: ReactTinyLinkType.TYPE_IMAGE,
            })];
    });
}); });

var _this$6 = undefined;
var titleRegex = /"title":"(.+?)"/g;
var ScrapYoutube = (function (url, htmlDoc, defaultMedia) { return __awaiter(_this$6, void 0, void 0, function () {
    var id, image, title;
    return __generator(this, function (_a) {
        id = getYoutTubeVideoId(url);
        image = [
            "https://img.youtube.com/vi/" + id + "/0.jpg",
            "https://img.youtube.com/vi/" + id + "/1.jpg",
            "https://img.youtube.com/vi/" + id + "/2.jpg",
            "https://img.youtube.com/vi/" + id + "/3.jpg",
        ];
        try {
            title = JSON.parse("{" + htmlDoc
                .querySelector('html')
                .innerHTML.toString()
                .match(titleRegex)[0] + "}").title;
            return [2 /*return*/, {
                    title: title,
                    url: url,
                    description: url,
                    type: ReactTinyLinkType.TYPE_YOUTUBE,
                    video: [],
                    image: image.filter(function (i) { return !isEmpty(i); }),
                }];
        }
        catch (error) {
            return [2 /*return*/, {
                    title: htmlDoc.querySelector('title').innerText,
                    url: url,
                    description: url,
                    type: ReactTinyLinkType.TYPE_YOUTUBE,
                    video: [],
                    image: !defaultMedia ? image.filter(function (i) { return !isEmpty(i); }) : image.concat([defaultMedia]).filter(function (i) { return !isEmpty(i); }),
                }];
        }
        return [2 /*return*/];
    });
}); });

var _this$5 = undefined;
var ScrapAmazon = (function (url, htmlDoc, defaultMedia) { return __awaiter(_this$5, void 0, void 0, function () {
    var baseUrl, image;
    return __generator(this, function (_a) {
        baseUrl = getBaseUrl(htmlDoc, url);
        image = [
            getAttrOfDocElement(htmlDoc, '.a-dynamic-image', 'data-old-hires'),
            getAttrOfDocElement(htmlDoc, '.a-dynamic-image', 'src'),
        ];
        return [2 /*return*/, {
                title: getTitleOfDoc(htmlDoc),
                content: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
                url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
                image: !defaultMedia
                    ? image.filter(function (i) { return !isEmpty(i); }).map(function (i) { return fixRelativeUrls(baseUrl, i); })
                    : image.concat([defaultMedia]).filter(function (i) { return !isEmpty(i); }),
                description: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
                video: [],
                type: ReactTinyLinkType.TYPE_AMAZON,
                publisher: ['Amazon'],
            }];
    });
}); });

var _this$4 = undefined;
var ScrapDefault = (function (url, htmlDoc, defaultMedia) { return __awaiter(_this$4, void 0, void 0, function () {
    var baseUrl, image;
    return __generator(this, function (_a) {
        baseUrl = getBaseUrl(htmlDoc, url);
        image = [
            getAttrOfDocElement(htmlDoc, 'meta[property="og:logo"]', 'content'),
            getAttrOfDocElement(htmlDoc, 'meta[itemprop="logo"]', 'content'),
            getAttrOfDocElement(htmlDoc, 'img[itemprop="logo"]', 'src'),
            getAttrOfDocElement(htmlDoc, "meta[property='og:image']", 'content'),
            getAttrOfDocElement(htmlDoc, 'img[class*="logo" i]', 'src'),
            getAttrOfDocElement(htmlDoc, 'img[src*="logo" i]', 'src'),
            getAttrOfDocElement(htmlDoc, 'meta[property="og:image:secure_url"]', 'content'),
            getAttrOfDocElement(htmlDoc, 'meta[property="og:image:url"]', 'content'),
            getAttrOfDocElement(htmlDoc, 'meta[property="og:image"]', 'content'),
            getAttrOfDocElement(htmlDoc, 'meta[name="twitter:image:src"]', 'content'),
            getAttrOfDocElement(htmlDoc, 'meta[name="twitter:image"]', 'content'),
            getAttrOfDocElement(htmlDoc, 'meta[itemprop="image"]', 'content'),
        ]
            .filter(function (i) { return !isEmpty(i); })
            .map(function (i) { return fixRelativeUrls(baseUrl, i); });
        return [2 /*return*/, {
                title: getTitleOfDoc(htmlDoc),
                content: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
                url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
                description: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
                video: [],
                image: !defaultMedia
                    ? image.filter(function (i) { return !isEmpty(i); }).map(function (i) { return fixRelativeUrls(baseUrl, i); })
                    : image.concat([defaultMedia]).filter(function (i) { return !isEmpty(i); }),
                type: ReactTinyLinkType.TYPE_DEFAULT,
            }];
    });
}); });

var _this$3 = undefined;
var ScrapInstagram = (function (url, data, defaultMedia) { return __awaiter(_this$3, void 0, void 0, function () {
    var scrappedData;
    return __generator(this, function (_a) {
        scrappedData = JSON.parse(data);
        return [2 /*return*/, {
                title: scrappedData.graphql.shortcode_media.accessibility_caption,
                content: url,
                url: url,
                description: scrappedData.title,
                video: null,
                image: !defaultMedia
                    ? [scrappedData.graphql.shortcode_media.display_url]
                    : [scrappedData.graphql.shortcode_media.display_url, defaultMedia].filter(function (i) { return !isEmpty(i); }),
                type: ReactTinyLinkType.TYPE_IMAGE,
            }];
    });
}); });

var _this$2 = undefined;
var ScrapBoardGameGeek = (function (url, htmlDoc, defaultMedia) { return __awaiter(_this$2, void 0, void 0, function () {
    var baseUrl, image;
    return __generator(this, function (_a) {
        baseUrl = getAttrOfDocElement(htmlDoc, 'base', 'href');
        if (!baseUrl) {
            baseUrl = url;
        }
        image = [
            getAttrOfDocElement(htmlDoc, 'meta[name="twitter:image:src"]', 'content')
        ];
        return [2 /*return*/, {
                title: getTitleOfDoc(htmlDoc),
                content: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
                url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
                image: !defaultMedia
                    ? image.filter(function (i) { return !isEmpty(i); }).map(function (i) { return fixRelativeUrls(baseUrl, i); })
                    : image.concat([defaultMedia]).filter(function (i) { return !isEmpty(i); }),
                description: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
                video: [],
                type: ReactTinyLinkType.TYPE_BOARDGAMEGEEK,
                publisher: ['BoardGameGeek'],
            }];
    });
}); });

var _this$1 = undefined;
var ScrapTwitter = (function (url, data, htmlDoc, defaultMedia) { return __awaiter(_this$1, void 0, void 0, function () {
    var scrappedData, htmlElement, baseUrl, image, video;
    return __generator(this, function (_a) {
        scrappedData = JSON.parse(data);
        htmlElement = document.createElement("html");
        htmlElement.innerHTML = scrappedData.html;
        baseUrl = getBaseUrl(htmlDoc, url);
        image = [
            getAttrOfDocElement(htmlDoc, "meta[property='og:image']", 'content'),
            getAttrOfDocElement(htmlDoc, "meta[property='og:image:user_generated']", 'content'),
            'https://help.twitter.com/content/dam/help-twitter/twitter-logo.png',
        ]
            .filter(function (i) { return !isEmpty(i); })
            .map(function (i) { return fixRelativeUrls(baseUrl, i); });
        video = [
            getAttrOfDocElement(htmlDoc, "meta[property='og:video:url']", 'content'),
            getAttrOfDocElement(htmlDoc, "meta[property='og:video:secure_url']", 'content'),
        ]
            .filter(function (i) { return !isEmpty(i); })
            .map(function (i) { return fixRelativeUrls(baseUrl, i); });
        return [2 /*return*/, {
                title: htmlElement.querySelector('p').textContent,
                description: scrappedData.author_name,
                url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
                video: video,
                image: !defaultMedia ? image : image.concat([defaultMedia]).filter(function (i) { return !isEmpty(i); }),
                type: ReactTinyLinkType.TYPE_TWITTER,
                publisher: ['Twitter'],
            }];
    });
}); });

var _this = undefined;
var ScraperWraper = (function (url, httpClient, defaultMedia) { return __awaiter(_this, void 0, void 0, function () {
    var response, mimeType, data, htmlDoc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!isEmpty(url)) return [3 /*break*/, 20];
                return [4 /*yield*/, httpClient];
            case 1:
                response = _a.sent();
                mimeType = response.headers.get('content-type');
                return [4 /*yield*/, response.text()];
            case 2:
                data = _a.sent();
                htmlDoc = new DOMParser().parseFromString(data, 'text/html');
                if (!isVideo(mimeType)) return [3 /*break*/, 4];
                return [4 /*yield*/, ScrapVideo(url, defaultMedia)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4:
                if (!isAudio(mimeType)) return [3 /*break*/, 6];
                return [4 /*yield*/, ScrapAudio(url, defaultMedia)];
            case 5: return [2 /*return*/, _a.sent()];
            case 6:
                if (!isImage(mimeType)) return [3 /*break*/, 8];
                return [4 /*yield*/, ScrapImage(url, defaultMedia)];
            case 7: return [2 /*return*/, _a.sent()];
            case 8:
                if (!isInstagramUrl(url)) return [3 /*break*/, 10];
                return [4 /*yield*/, ScrapInstagram(url, data, defaultMedia)];
            case 9: return [2 /*return*/, _a.sent()];
            case 10:
                if (!isYoutubeUrl(url)) return [3 /*break*/, 12];
                return [4 /*yield*/, ScrapYoutube(url, htmlDoc, defaultMedia)];
            case 11: return [2 /*return*/, _a.sent()];
            case 12:
                if (!isAmazonUrl(url)) return [3 /*break*/, 14];
                return [4 /*yield*/, ScrapAmazon(url, htmlDoc, defaultMedia)];
            case 13: return [2 /*return*/, _a.sent()];
            case 14:
                if (!isBoardGameGeekUrl(url)) return [3 /*break*/, 16];
                return [4 /*yield*/, ScrapBoardGameGeek(url, htmlDoc, defaultMedia)];
            case 15: return [2 /*return*/, _a.sent()];
            case 16:
                if (!isTwitterUrl(url)) return [3 /*break*/, 18];
                return [4 /*yield*/, ScrapTwitter(url, data, htmlDoc, defaultMedia)];
            case 17: return [2 /*return*/, _a.sent()];
            case 18: return [4 /*yield*/, ScrapDefault(url, htmlDoc, defaultMedia)];
            case 19: return [2 /*return*/, _a.sent()];
            case 20: return [2 /*return*/];
        }
    });
}); });

var ImageWrapper = function (_a) {
    var data = _a.data, secureImageUrl = _a.secureImageUrl, loadSecureUrl = _a.loadSecureUrl;
    if (loadSecureUrl && !secureImageUrl)
        return null;
    var imageUrl = data.image && ((loadSecureUrl && secureImageUrl) ? secureImageUrl : data.image[0]);
    if (!imageUrl) {
        return null;
    }
    return React.createElement("img", { style: { display: "none" }, src: imageUrl, onError: function (e) {
            e.target.parentElement.style.filter = '';
        }, onLoad: function (e) {
            e.target.parentElement.style.filter = '';
        } });
};
var VideoWrapper = function (_a) {
    var data = _a.data, secureVideoUrl = _a.secureVideoUrl, loadSecureUrl = _a.loadSecureUrl, autoPlay = _a.autoPlay;
    if (loadSecureUrl && !secureVideoUrl)
        return null;
    var videoUrl = data.video && ((loadSecureUrl && secureVideoUrl) ? secureVideoUrl : data.video[0]);
    if (!videoUrl) {
        return null;
    }
    return React.createElement(Video, { muted: true, onCanPlayThrough: function (e) {
            var video = e.target;
            setTimeout(function () {
                video.pause();
            }, 1000);
        }, autoPlay: autoPlay, controls: true },
        React.createElement("source", { src: videoUrl + "#t=0.1" }));
};
var CardMedia = function (_a) {
    var data = _a.data, cardSize = _a.cardSize, autoPlay = _a.autoPlay, loadSecureUrl = _a.loadSecureUrl;
    var secureImageUrl = data.image && findFirstSecureUrl(data.image, isValidImageURL);
    var secureVideoUrl = data.video && findFirstSecureUrl(data.video, isValidVideoURL);
    return (React.createElement(React.Fragment, null,
        data.type !== ReactTinyLinkType.TYPE_VIDEO && (React.createElement(Media, { className: "react_tinylink_card_media", cardSize: cardSize, src: data.image && (secureImageUrl ? secureImageUrl : data.image[0]), type: data.type, style: { WebkitFilter: 'blur(10px)', filter: 'blur(10px)' } },
            React.createElement(ImageWrapper, { data: data, secureImageUrl: secureImageUrl, loadSecureUrl: loadSecureUrl }))),
        data.type && data.type === ReactTinyLinkType.TYPE_VIDEO && (React.createElement(Media, { className: "react_tinylink_card_media", cardSize: cardSize, src: data.video && (secureVideoUrl ? secureVideoUrl : data.video[0]), type: data.type },
            React.createElement(VideoWrapper, { data: data, secureVideoUrl: secureVideoUrl, autoPlay: autoPlay, loadSecureUrl: loadSecureUrl })))));
};

var cache = new Map();
function useScraper(_a) {
    var _this = this;
    var url = _a.url, _b = _a.proxyUrl, proxyUrl = _b === void 0 ? 'https://cors-anywhere.herokuapp.com' : _b, _c = _a.defaultMedias, defaultMedias = _c === void 0 ? [] : _c, defaultValue = _a.defaultValue, noCache = _a.noCache, onError = _a.onError, onSuccess = _a.onSuccess, requestHeaders = _a.requestHeaders;
    // Setup the state
    var _d = useState({
        response: defaultValue,
        loading: true,
        error: undefined,
    }), state = _d[0], setState = _d[1];
    /** Does the fetch on mount. Ensure the cleanup in case of premature unmounting */
    useEffect(function () {
        // Permit to control if should set the state. Avoiding a memory leak
        var isMounted = true;
        // Wraps the `ScraperWraper` to manage the hook's state
        var doFetch = function () { return __awaiter(_this, void 0, void 0, function () {
            var finalStateUpdate, headers, urlToCall, modifiedInstaUrl, modifiedInstaUrl, data, client, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        finalStateUpdate = { loading: false, error: undefined };
                        headers = requestHeaders;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        urlToCall = proxyUrl ? proxyUrl + "/" + url : url;
                        if (isInstagramUrl(url)) {
                            modifiedInstaUrl = url + "?__a=1&max_id=endcursor";
                            urlToCall = modifiedInstaUrl;
                        }
                        else if (isTwitterUrl(url)) {
                            modifiedInstaUrl = "https://publish.twitter.com/oembed?url=" + url;
                            urlToCall = proxyUrl ? proxyUrl + "/" + modifiedInstaUrl : modifiedInstaUrl;
                        }
                        data = void 0;
                        if (!(!noCache && cache.has(urlToCall))) return [3 /*break*/, 2];
                        data = cache.get(urlToCall);
                        return [3 /*break*/, 4];
                    case 2:
                        client = fetch(urlToCall, { headers: headers });
                        return [4 /*yield*/, ScraperWraper(url, client, defaultMedias)];
                    case 3:
                        data = _a.sent();
                        cache.set(urlToCall, data);
                        _a.label = 4;
                    case 4:
                        finalStateUpdate.response = data;
                        onSuccess && isMounted && onSuccess(data);
                        return [2 /*return*/, data];
                    case 5:
                        err_1 = _a.sent();
                        finalStateUpdate.error = err_1;
                        onError && isMounted && onError(err_1);
                        return [2 /*return*/, err_1];
                    case 6:
                        isMounted && setState(function (old) { return (__assign({}, old, finalStateUpdate)); });
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        // Makes the request and wraps it so we can cancel it if needed
        var cancelable = makeCancelable(doFetch());
        // avoid throw errors on promise cancel, other errors should be catched inside doFetch function
        cancelable.promise.catch(function () { });
        // Returns a cleanup function which permits to avoid potential
        // memory leaks and unnecessary network when the component is
        // unmount.
        return function () {
            isMounted = false; // Avoid all the state management
            cancelable.cancel(); // Cancel the request
        };
    }, [url, proxyUrl, noCache]); // Put no dependecy, does the fetch only once on mount
    return [state.response, state.loading, state.error];
}
/** headers passed to the fetch request */

var useScrapper = useScraper;
var ScrapperWraper = ScraperWraper;
var ReactTinyLink = function (_a) {
    var _b = _a.cardSize, cardSize = _b === void 0 ? 'small' : _b, _c = _a.maxLine, maxLine = _c === void 0 ? 2 : _c, _d = _a.minLine, minLine = _d === void 0 ? 1 : _d, _e = _a.header, header = _e === void 0 ? null : _e, _f = _a.description, description = _f === void 0 ? null : _f, _g = _a.url, url = _g === void 0 ? '' : _g, _h = _a.width, width = _h === void 0 ? '640px' : _h, _j = _a.noCache, noCache = _j === void 0 ? false : _j, _k = _a.proxyUrl, proxyUrl = _k === void 0 ? 'https://cors-anywhere.herokuapp.com' : _k, _l = _a.showGraphic, showGraphic = _l === void 0 ? true : _l, _m = _a.autoPlay, autoPlay = _m === void 0 ? false : _m, _o = _a.defaultMedia, defaultMedia = _o === void 0 ? '' : _o, _p = _a.loadSecureUrl, loadSecureUrl = _p === void 0 ? false : _p, _q = _a.onError, onError = _q === void 0 ? noop : _q, // Permit to keep a constant reference
    _r = _a.onSuccess, // Permit to keep a constant reference
    onSuccess = _r === void 0 ? noop : _r, _s = _a.onClick, onClick = _s === void 0 ? null : _s, _t = _a.requestHeaders, requestHeaders = _t === void 0 ? { 'x-requested-with': '' } : _t;
    var defaultMedias = defaultMedia ? [defaultMedia] : [];
    var _u = useScraper({
        url: url,
        proxyUrl: proxyUrl,
        requestHeaders: requestHeaders,
        defaultMedias: defaultMedias,
        defaultValue: defaultData(url, defaultMedias),
        noCache: noCache,
        onError: onError,
        onSuccess: onSuccess,
    }), data = _u[0], loading = _u[1];
    return (React.createElement(Card, { onClick: function (e) {
            if (!onClick)
                return;
            e.preventDefault();
            onClick(e, data);
        }, className: "react_tinylink_card", cardSize: cardSize, href: url, width: width, isShownGraphic: showGraphic },
        showGraphic && (React.createElement(CardMedia, { autoPlay: autoPlay, cardSize: cardSize, data: data, loadSecureUrl: loadSecureUrl })),
        React.createElement(ContentWrapper, { className: "react_tinylink_card_content_wrapper", cardSize: cardSize },
            React.createElement(Header, { maxLine: maxLine, minLine: minLine, className: "react_tinylink_card_content_header" },
                React.createElement(Description, { loading: loading, loadingWidth: 2, maxLine: maxLine, minLine: minLine, className: "react_tinylink_card_content_header_description" }, header ? header : data.title ? data.title : url)),
            React.createElement(Content, { maxLine: maxLine, minLine: minLine, className: "react_tinylink_card_content", cardSize: cardSize },
                React.createElement(Description, { loading: loading, loadingWidth: 1, className: "react_tinylink_card_content_description" }, description ? description : data.description ? data.description : url)),
            React.createElement(Footer, { className: "react_tinylink_footer" },
                React.createElement(Description, { loading: loading, loadingWidth: 1, className: "react_tinylink_card_footer_description" }, getHostname(url))))));
};

export { ReactTinyLink, ScrapperWraper, useScrapper };
//# sourceMappingURL=index.mjs.map
