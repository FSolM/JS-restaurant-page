const injectFooter = (target) => {
  let parent = target;
  let child = document.createElement('div');
  child.classList.add('col-12');
  child.appendChild(document.createTextNode('Powered by '));
  parent.appendChild(child);
  parent = child;
  child = document.createElement('a');
  child.href = 'https://github.com/FSolM/Tejuino';
  child.appendChild(document.createTextNode('Tejuino'));
  parent.appendChild(child);
};

export default injectFooter;
