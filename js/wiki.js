// generate table of contents
const headings = document.querySelectorAll('summary');
const tocList = document.getElementById('toc-list');

headings.forEach((h, i) => {
    if (!h.id) h.id = h.textContent;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.addEventListener('click', (e) => {
        document.getElementById(h.id).parentElement.open = true;
    });
    li.appendChild(a);
    tocList.appendChild(li);
});