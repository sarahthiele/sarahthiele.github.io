/* nav.js — injects nav + footer, marks active link */
(function () {
  const path = location.pathname.replace(/\/$/, '') || '/index';
  const links = [
    { href: 'index.html',    label: 'Home'     },
    { href: 'about.html',    label: 'About'    },
    { href: 'research.html', label: 'Research' },
    { href: 'cv.html',       label: 'CV'       },
    { href: 'contact.html',  label: 'Contact'  },
  ];

  const navHTML = `
<nav>
  <div class="inner">
    <a class="brand" href="index.html">Sarah Thiele</a>
    <ul>
      ${links.map(l => {
        const active = path.endsWith(l.href.replace('.html','')) ? ' class="active"' : '';
        return `<li><a href="${l.href}"${active}>${l.label}</a></li>`;
      }).join('')}
    </ul>
  </div>
</nav>`;

  const footerHTML = `
<footer>
  <div class="inner">
    <span>© 2025 Sarah Thiele</span>
    <span class="social-links">
      <a href="https://github.com/sarahthiele" target="_blank" rel="noopener">GitHub</a>
      <a href="http://www.linkedin.com/in/sarah-thiele-a543a9128" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://twitter.com/SuborbitalSar" target="_blank" rel="noopener">Twitter</a>
    </span>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
