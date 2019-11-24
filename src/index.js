import $ from 'jquery'
import './css/baseCss.scss'

$(function () {
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', 'lightblue')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info)