function makeBlock(block) {
    let parent = document.querySelector(block);
    return function (typeOfBlock) {
        let element = document.createElement(typeOfBlock);
        let button = document.createElement('button');
        let textInButton = document.createTextNode('DELETE');

        parent.appendChild(element);
        element.appendChild(button);
        button.appendChild(textInButton);

        element.style.display = "flex";
        element.style.flexWrap = "wrap";
        element.style.justifyContent = "space-evenly"

        button.onclick = function () {
            element.remove();
        }

        return function (numberOfElement) {
            for (let i = 1; i < numberOfElement; i++) {
                makeBlock(block)(typeOfBlock)
            }
        }
    }
}

makeBlock("body")("span")(5);
makeBlock("span:nth-child(4)")("span")(5);
makeBlock("span:nth-child(5)")("span")(5);
makeBlock("span:nth-child(6)")("span")(5);