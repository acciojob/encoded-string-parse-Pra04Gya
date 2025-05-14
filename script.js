const parseCode = (str) => {
    function parseCode(str) {
  const [firstName, lastName, id] = str.split(/0+/); 
  return { firstName, lastName, id };
}
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
