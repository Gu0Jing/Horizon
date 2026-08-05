(function () {
  'use strict';

  /** Replace ⭐️ N/10 with a colored badge in h2, h3, and li elements */
  function processScoreBadges() {
    var scoreRe = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var m = el.innerHTML.match(scoreRe);
      if (!m) return;
      var score = parseFloat(m[1]);
      var tier;
      if (score >= 9) tier = 'high';
      else if (score >= 7) tier = 'good';
      else if (score >= 5) tier = 'mid';
      else tier = 'low';
      el.innerHTML = el.innerHTML.replace(
        scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + m[1] + '</span>'
      );
    });
  }

  /** Add semantic classes to tag lines, source lines, and background paragraphs */
  function markSemanticElements() {
    var paragraphs = document.querySelectorAll('.main-content p');
    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();

      // Tag line: starts with Tags or 标签 (bold prefix rendered by Markdown)
      if (/^(Tags|标签)\s*:/.test(text)) {
        p.classList.add('tag-line');
        return;
      }

      // Source line: pattern like "source · site · date"
      if (/^(rss|reddit|github|hackernews|hn|telegram)\s*·/i.test(text)) {
        p.classList.add('source-line');
        return;
      }
    });
  }

  /** Set up EN/中文 language toggle as a page-level control */
  function setupLanguageToggle() {
    // Create toggle buttons
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';

    var btnEn = document.createElement('button');
    btnEn.textContent = 'EN';
    btnEn.type = 'button';

    var btnZh = document.createElement('button');
    btnZh.textContent = '中文';
    btnZh.type = 'button';

    toggle.appendChild(btnEn);
    toggle.appendChild(btnZh);

    // Insert at top of body
    document.body.insertBefore(toggle, document.body.firstChild);

    // Read saved preference, default to zh
    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) { /* noop */ }
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) {
      if (lang === 'en') {
        btnEn.classList.add('active');
        btnZh.classList.remove('active');
      } else {
        btnZh.classList.add('active');
        btnEn.classList.remove('active');
      }
    }

    // Index page: toggle lang-section visibility
    var zhSection = document.getElementById('lang-zh');
    var enSection = document.getElementById('lang-en');

    function showSection(lang) {
      if (!zhSection || !enSection) return;
      if (lang === 'en') {
        enSection.classList.remove('hidden');
        zhSection.classList.add('hidden');
      } else {
        zhSection.classList.remove('hidden');
        enSection.classList.add('hidden');
      }
    }

    // Article page: redirect to the other language version
    function switchArticleLang(lang) {
      var path = window.location.pathname;
      var target = null;
      if (lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-zh(\.html)?$/, '-en$1').replace(/-zh\/$/, '-en/');
      } else if (lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-en(\.html)?$/, '-zh$1').replace(/-en\/$/, '-zh/');
      }
      if (target) window.location.href = target;
    }

    function setLang(lang) {
      currentLang = lang;
      updateButtons(lang);
      try { localStorage.setItem('horizon-lang', lang); } catch (e) { /* noop */ }
      if (zhSection && enSection) {
        showSection(lang);
      } else {
        switchArticleLang(lang);
      }
    }

    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });

    // Initialize
    updateButtons(currentLang);
    if (zhSection && enSection) {
      showSection(currentLang);
    }
  }

  /** Build a sticky article directory for generated daily summary pages. */
  function setupArticleNavigation() {
    var main = document.querySelector('.main-content');
    var isSummaryPage = /^Horizon Summary:/.test(document.title) ||
      /\/summary-(?:zh|en)(?:\.html)?$/.test(window.location.pathname.replace(/\/$/, ''));
    if (!main || !isSummaryPage || main.classList.contains('hz-has-toc')) return;

    var headings = Array.prototype.slice.call(main.querySelectorAll('h2, h3'));
    if (headings.filter(function (heading) { return heading.tagName === 'H3'; }).length < 3) return;

    var isZh = /\(ZH\)/i.test(document.title) || document.documentElement.lang === 'zh';
    var labels = isZh
      ? { title: '目录', close: '关闭目录', open: '目录', top: '返回顶部' }
      : { title: 'Contents', close: 'Close contents', open: 'Contents', top: 'Back to top' };

    function headingTarget(heading, index) {
      var previous = heading.previousElementSibling;
      if (previous && previous.tagName === 'A' && previous.id) return previous.id;
      if (!heading.id) heading.id = 'hz-section-' + (index + 1);
      return heading.id;
    }

    function headingLabel(heading) {
      var titleLink = heading.querySelector('a');
      return (titleLink ? titleLink.textContent : heading.textContent).trim();
    }

    var aside = document.createElement('aside');
    aside.className = 'hz-article-toc';
    aside.id = 'hz-article-toc';
    aside.setAttribute('aria-label', labels.title);

    var header = document.createElement('div');
    header.className = 'hz-toc-header';

    var title = document.createElement('p');
    title.className = 'hz-toc-title';
    title.textContent = labels.title;

    var closeButton = document.createElement('button');
    closeButton.className = 'hz-toc-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', labels.close);
    closeButton.textContent = '\u00d7';

    header.appendChild(title);
    header.appendChild(closeButton);
    aside.appendChild(header);

    var list = document.createElement('ul');
    list.className = 'hz-toc-list';
    var currentSublist = null;
    var linksById = {};

    headings.forEach(function (heading, index) {
      var id = headingTarget(heading, index);
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.className = 'hz-toc-link';
      link.href = '#' + encodeURIComponent(id);
      link.textContent = headingLabel(heading);
      link.dataset.targetId = id;
      linksById[id] = link;

      if (heading.tagName === 'H2') {
        link.classList.add('hz-toc-section');
        item.appendChild(link);
        currentSublist = document.createElement('ul');
        item.appendChild(currentSublist);
        list.appendChild(item);
      } else {
        if (!currentSublist) currentSublist = list;
        item.appendChild(link);
        currentSublist.appendChild(item);
      }
    });

    aside.appendChild(list);

    var backToTop = document.createElement('a');
    backToTop.className = 'hz-toc-top';
    backToTop.href = '#';
    backToTop.textContent = labels.top;
    aside.appendChild(backToTop);

    var article = document.createElement('div');
    article.className = 'hz-article-body';
    while (main.firstChild) article.appendChild(main.firstChild);
    main.classList.add('hz-has-toc');
    main.appendChild(aside);
    main.appendChild(article);

    var backdrop = document.createElement('div');
    backdrop.className = 'hz-toc-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');

    var openButton = document.createElement('button');
    openButton.className = 'hz-toc-fab';
    openButton.type = 'button';
    openButton.setAttribute('aria-controls', aside.id);
    openButton.setAttribute('aria-expanded', 'false');
    openButton.textContent = '\u2630 ' + labels.open;

    document.body.appendChild(backdrop);
    document.body.appendChild(openButton);

    function setOpen(open) {
      aside.classList.toggle('is-open', open);
      backdrop.classList.toggle('is-open', open);
      document.body.classList.toggle('hz-toc-open', open);
      openButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    openButton.addEventListener('click', function () { setOpen(true); });
    closeButton.addEventListener('click', function () { setOpen(false); });
    backdrop.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });

    list.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    backToTop.addEventListener('click', function () { setOpen(false); });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          Object.keys(linksById).forEach(function (id) {
            linksById[id].classList.toggle('is-active', id === entry.target.dataset.hzTocId);
          });
        });
      }, { rootMargin: '-18% 0px -70% 0px', threshold: 0 });

      headings.forEach(function (heading, index) {
        heading.dataset.hzTocId = headingTarget(heading, index);
        observer.observe(heading);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    processScoreBadges();
    markSemanticElements();
    setupLanguageToggle();
    setupArticleNavigation();
  });
})();
