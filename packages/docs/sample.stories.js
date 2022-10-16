var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import Sample from '@react-component-boilerplate/component';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Sample',
    component: Sample,
};
var Template = function (args) { return React.createElement(Sample, __assign({}, args)); };
var defaultHeaders = [{
        key: 'ms',
        title: 'microsoft'
    }, {
        key: 'amzn',
        title: 'amazon'
    }, {
        key: 'goog',
        title: 'google'
    }];
var data2 = [
    {
        name: 'john',
        age: 34,
    },
    {
        name: 'jason',
        age: 40,
    },
];
export var NoData = Template.bind({});
NoData.args = {
    headers: defaultHeaders,
    data: []
};
export var ExistData = Template.bind({});
ExistData.args = {
    headers: defaultHeaders,
    data: [{
            ms: 200,
            amzn: 2400,
            goog: 2000
        }, {
            ms: 350,
            amzn: 3800,
            goog: 2700
        }]
};
