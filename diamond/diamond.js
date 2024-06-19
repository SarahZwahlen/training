"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDiamond = void 0;
var FirstAlphabetASCIIValue = 65;
var printDiamond = function (letter) {
    if (letter.length !== 1) {
        return 'La chaine est trop longue';
    }
    createDiamond(letter).forEach(function (line) { return console.log(line); });
};
exports.printDiamond = printDiamond;
var createDiamond = function (letter) {
    var diamondHalfHeight = getAlphabetIndex(letter);
    var diamondUpperHalf = [];
    for (var i = 1; i <= diamondHalfHeight; i++) {
        diamondUpperHalf.push(createLine(getLetterfromIndex(i), getAlphabetIndex(letter)));
    }
    var diamondLowerHalf = __spreadArray([], diamondUpperHalf, true).reverse();
    diamondLowerHalf.shift();
    return __spreadArray(__spreadArray([], diamondUpperHalf, true), diamondLowerHalf, true);
};
var createLine = function (letter, alphaIndexRef) {
    var rightPart = [];
    for (var i = 1; i <= alphaIndexRef; i++) {
        rightPart.push(' ');
    }
    var letterIndex = getAlphabetIndex(letter);
    rightPart[letterIndex - 1] = letter;
    var leftPart = __spreadArray([], rightPart, true).reverse();
    leftPart.pop();
    return __spreadArray(__spreadArray([], leftPart, true), rightPart, true).join('');
};
var getASCIIValue = function (letter) {
    return letter.toLocaleUpperCase().charCodeAt(0);
};
var getAlphabetIndex = function (letter) {
    return getASCIIValue(letter) - FirstAlphabetASCIIValue + 1;
};
var getLetterfromIndex = function (index) {
    return String.fromCharCode(FirstAlphabetASCIIValue + index - 1);
};
(0, exports.printDiamond)('Z');
