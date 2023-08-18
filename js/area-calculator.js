function getInput(allah){
    const inputFild = document.getElementById(allah)
    const fildTextInput =  inputFild.value
    const textToNumber = parseFloat(fildTextInput)
    return textToNumber;
}
function setElementInnerText(elememtId , area){
    const elememt = document.getElementById(elememtId)
    elememt.innerText = area
}
function caculeteTraingleArea(){
    const base = getInput('base-input')
    const height = getInput('hight-input')
    const area = 0.5 * base * height
    setElementInnerText('total-area', area)
}
function caculeteRectangleArea(){
    const width = getInput('width-input')
    const lenth = getInput('lenth-input')
    rectangleTotal = width * lenth;
   setElementInnerText('rectangletotal', rectangleTotal)
}
function caculeteParallelogramArea(){
    const base = getInput('parallelogram-base');
    const height = getInput('parallelogram-hight')
    const area = base * height;
    setElementInnerText('parallelogram-total-area', area)
}
function caculeteEllipseArea(){
    const base = getInput('Ellipse-base')
    const height = getInput('Ellipse-hight')
    const area = 3.1416 * base * height;
    setElementInnerText('Ellipse-total-area', area);
}
function caculeteRhombusArea(){
    const d1 = getInput('Rhombus-base')
    const d2 = getInput('Rhombus-hight')
    const total = 0.5 * d1 * d2;
    setElementInnerText('Rhombus-total-area', total)
}
function caculetePentagonArea(){
    const p = getInput('Pentagon-base')
    const b = getInput('Pentagon-hight')
    const total = 0.5 * p * b;
    setElementInnerText('Pentagon-total-area', total)
}
