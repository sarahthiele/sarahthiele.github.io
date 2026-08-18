/* nav.js — injects nav + footer, marks active link */
(function () {
  const path = location.pathname.replace(/\/$/, '') || '/index';
  const links = [
    { href: 'index.html',    label: 'Home'     },
    { href: 'research.html', label: 'Research' },
    { href: 'about.html',    label: 'About'    },
    { href: 'contact.html',  label: 'Contact'  },
  ];

  const navHTML = `
<nav>
  <div class="inner">
    <a class="brand" href="index.html"><img src="saturn-icon.png" alt="" width="22" height="22" />Sarah Thiele</a>
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
    <span>© 2026 Sarah Thiele</span>
    <span class="social-links">
      <a href="https://github.com/sarahthiele" target="_blank" rel="noopener">GitHub</a>
      <a href="http://www.linkedin.com/in/sarah-thiele-a543a9128" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://orcid.org/0000-0001-7442-6926" target="_blank" rel="noopener">ORCID</a>
    </span>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
