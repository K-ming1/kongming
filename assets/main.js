/* =========================================================
   空冥 · KONGMING
   软件数据 + 交互逻辑（无依赖，原生 JS）
   ---------------------------------------------------------
   想加软件？在 SOFTWARE 数组里复制一条改掉即可，
   字段说明见下面的注释，卡片会自动生成。
   ========================================================= */

(function () {
  "use strict";

  /* ---------- 数据 ----------
     name     软件名
     mark     卡片左上角的字母标记（2–3 个字符）
     cat      分类中文名
     catKey   分类标识：system | dev | design | office | security | media
     tagline  一句话介绍
     version  版本号
     size     安装包体积
     platform 支持平台
     download 官方下载页
     site     官方网站
     pick     是否编辑精选（小圆点）
  ------------------------------ */
  const SOFTWARE = [
    {
      name: "7-Zip",
      mark: "7z",
      cat: "系统工具",
      catKey: "system",
      tagline: "压缩解压的标准答案：开源、免费、没有广告。",
      version: "24.09",
      size: "1.6 MB",
      platform: "Windows",
      download: "https://www.7-zip.org/download.html",
      site: "https://www.7-zip.org",
      pick: true
    },
    {
      name: "Everything",
      mark: "Ev",
      cat: "系统工具",
      catKey: "system",
      tagline: "毫秒级的文件名搜索，装机必备的小工具。",
      version: "1.4.1",
      size: "1.8 MB",
      platform: "Windows",
      download: "https://www.voidtools.com/downloads/",
      site: "https://www.voidtools.com",
      pick: true
    },
    {
      name: "PowerToys",
      mark: "PT",
      cat: "系统工具",
      catKey: "system",
      tagline: "微软出品的系统增强合集，二十多个实用模块。",
      version: "0.87.1",
      size: "250 MB",
      platform: "Windows",
      download: "https://github.com/microsoft/PowerToys/releases",
      site: "https://learn.microsoft.com/windows/powertoys/",
      pick: false
    },
    {
      name: "Visual Studio Code",
      mark: "VS",
      cat: "开发工具",
      catKey: "dev",
      tagline: "轻量但强大的代码编辑器，插件生态极其庞大。",
      version: "1.96",
      size: "100 MB",
      platform: "全平台",
      download: "https://code.visualstudio.com/Download",
      site: "https://code.visualstudio.com",
      pick: true
    },
    {
      name: "Git",
      mark: "Git",
      cat: "开发工具",
      catKey: "dev",
      tagline: "版本控制的事实标准，命令行与图形工具兼备。",
      version: "2.47",
      size: "60 MB",
      platform: "全平台",
      download: "https://git-scm.com/downloads",
      site: "https://git-scm.com",
      pick: false
    },
    {
      name: "Figma",
      mark: "Fg",
      cat: "设计创意",
      catKey: "design",
      tagline: "浏览器里的界面设计工具，多人协作体验出色。",
      version: "在线",
      size: "在线",
      platform: "Web · 桌面",
      download: "https://www.figma.com/downloads/",
      site: "https://www.figma.com",
      pick: false
    },
    {
      name: "Krita",
      mark: "Kr",
      cat: "设计创意",
      catKey: "design",
      tagline: "专注数字绘画的开源软件，笔刷系统非常强大。",
      version: "5.2.6",
      size: "120 MB",
      platform: "全平台",
      download: "https://krita.org/en/download/",
      site: "https://krita.org",
      pick: false
    },
    {
      name: "Notion",
      mark: "No",
      cat: "效率办公",
      catKey: "office",
      tagline: "文档、笔记与数据库合一的工作空间。",
      version: "在线",
      size: "在线",
      platform: "全平台",
      download: "https://www.notion.com/desktop",
      site: "https://www.notion.com",
      pick: false
    },
    {
      name: "Obsidian",
      mark: "Ob",
      cat: "效率办公",
      catKey: "office",
      tagline: "本地优先的笔记工具，知识库始终归你所有。",
      version: "1.7.7",
      size: "90 MB",
      platform: "全平台",
      download: "https://obsidian.md/download",
      site: "https://obsidian.md",
      pick: true
    },
    {
      name: "Bitwarden",
      mark: "Bw",
      cat: "安全隐私",
      catKey: "security",
      tagline: "开源密码管理器，跨设备同步，免费版足够用。",
      version: "2024.12",
      size: "30 MB",
      platform: "全平台",
      download: "https://bitwarden.com/download/",
      site: "https://bitwarden.com",
      pick: false
    },
    {
      name: "WireGuard",
      mark: "WG",
      cat: "安全隐私",
      catKey: "security",
      tagline: "现代轻量的 VPN 协议，配置简单、连接迅速。",
      version: "0.5.3",
      size: "10 MB",
      platform: "全平台",
      download: "https://www.wireguard.com/install/",
      site: "https://www.wireguard.com",
      pick: false
    },
    {
      name: "OBS Studio",
      mark: "OBS",
      cat: "影音媒体",
      catKey: "media",
      tagline: "免费开源的录屏与直播软件，主播的标配。",
      version: "31.0",
      size: "130 MB",
      platform: "全平台",
      download: "https://obsproject.com/download",
      site: "https://obsproject.com",
      pick: true
    },
    {
      name: "VLC",
      mark: "VLC",
      cat: "影音媒体",
      catKey: "media",
      tagline: "几乎什么格式都能播放的万能播放器。",
      version: "3.0.21",
      size: "40 MB",
      platform: "全平台",
      download: "https://www.videolan.org/vlc/",
      site: "https://www.videolan.org",
      pick: false
    },
    {
      name: "Snipaste",
      mark: "Sn",
      cat: "系统工具",
      catKey: "system",
      tagline: "截图与贴图二合一，用一次就回不去的效率工具。",
      version: "2.10",
      size: "20 MB",
      platform: "Windows · macOS",
      download: "https://www.snipaste.com/download.html",
      site: "https://www.snipaste.com",
      pick: false
    }
  ];

  /* ---------- 元素 ---------- */
  const grid = document.getElementById("grid");
  const search = document.getElementById("search");
  const countEl = document.getElementById("resultCount");
  const emptyEl = document.getElementById("empty");
  const chips = Array.from(document.querySelectorAll(".chip"));
  const themeBtn = document.getElementById("themeBtn");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const panels = Array.from(document.querySelectorAll(".panel"));
  const softwareTab = document.getElementById("tab-software");
  const hubLayout = document.getElementById("hubLayout");
  const rail = document.getElementById("rail");

  const state = { cat: "all", q: "" };

  /* ---------- 模块切换 ---------- */
  function selectTab(tab) {
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
      t.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.id !== tab.dataset.panel;
    });

    /* 分类栏只属于软件库模块，切到空位时收起并把内容区放宽 */
    const hasRail = tab.dataset.panel === "panel-software";
    if (rail) rail.hidden = !hasRail;
    if (hubLayout) hubLayout.classList.toggle("no-rail", !hasRail);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      const index = tabs.indexOf(tab);
      let next = null;
      if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
      else if (event.key === "ArrowLeft") next = tabs[(index - 1 + tabs.length) % tabs.length];
      else if (event.key === "Home") next = tabs[0];
      else if (event.key === "End") next = tabs[tabs.length - 1];
      if (!next) return;
      event.preventDefault();
      next.focus();
      selectTab(next);
    });
  });

  /* ---------- 渲染 ---------- */
  const ICON_DOWNLOAD =
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0 4.2-4.2M12 15l-4.2-4.2M5 19.5h14"/></svg>';
  const ICON_EXTERNAL =
    '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 15 15 9M9.5 9H15v5.5"/></svg>';

  function escapeAttr(value) {
    return String(value).replace(/"/g, "&quot;");
  }

  function cardHTML(item, index) {
    return `
      <article class="card" style="--i:${index}">
        <div class="card-top">
          <span class="mark" aria-hidden="true">${item.mark}</span>
          <span class="card-cat">${item.cat}</span>
        </div>
        <h3 class="card-title">
          ${item.name}
          ${item.pick ? '<span class="pick" title="编辑精选" aria-label="编辑精选"></span>' : ""}
        </h3>
        <p class="card-desc">${item.tagline}</p>
        <div class="card-meta">
          <span>v${item.version}</span><i></i>
          <span>${item.size}</span><i></i>
          <span>${item.platform}</span>
        </div>
        <div class="card-actions">
          <a class="btn-dl" href="${escapeAttr(item.download)}" target="_blank" rel="noopener noreferrer"
             aria-label="下载 ${item.name}（前往官方网站）">下载 ${ICON_DOWNLOAD}</a>
          <a class="btn-site" href="${escapeAttr(item.site)}" target="_blank" rel="noopener noreferrer"
             aria-label="访问 ${item.name} 官网">官网 ${ICON_EXTERNAL}</a>
        </div>
      </article>`;
  }

  function matches(item) {
    const byCat = state.cat === "all" || item.catKey === state.cat;
    if (!byCat) return false;
    if (!state.q) return true;
    const haystack = `${item.name} ${item.tagline} ${item.platform} ${item.cat}`.toLowerCase();
    return state.q
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every((word) => haystack.includes(word));
  }

  let revealObserver = null;

  function setupReveal(cards) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) {
      cards.forEach((card) => card.classList.add("is-in"));
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    cards.forEach((card) => revealObserver.observe(card));
  }

  function render() {
    const list = SOFTWARE.filter(matches);
    grid.innerHTML = list.map(cardHTML).join("");
    setupReveal(Array.from(grid.children));

    const total = SOFTWARE.length;
    countEl.textContent =
      !state.q && state.cat === "all" ? `共 ${total} 款软件` : `找到 ${list.length} 款软件`;

    const isEmpty = list.length === 0;
    emptyEl.hidden = !isEmpty;
    grid.hidden = isEmpty;

    if (isEmpty) {
      const label = state.q ? `与「${state.q}」相关的` : "这个分类下的";
      emptyEl.innerHTML =
        `没有找到${label}软件。` +
        '<button class="link-btn" id="resetBtn" type="button">清除筛选条件</button>';
      document.getElementById("resetBtn").addEventListener("click", resetFilters);
    } else {
      emptyEl.innerHTML = "";
    }
  }

  function resetFilters() {
    state.cat = "all";
    state.q = "";
    search.value = "";
    chips.forEach((chip) => {
      const active = chip.dataset.cat === "all";
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    render();
    search.focus();
  }

  /* ---------- 筛选事件 ---------- */
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.cat = chip.dataset.cat;
      chips.forEach((c) => {
        const active = c === chip;
        c.classList.toggle("is-active", active);
        c.setAttribute("aria-pressed", String(active));
      });
      render();
    });
  });

  let searchTimer = null;
  search.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.q = search.value.trim();
      render();
    }, 70);
  });

  /* ---------- 键盘 ---------- */
  document.addEventListener("keydown", (event) => {
    const tag = document.activeElement && document.activeElement.tagName;
    const typing = tag === "INPUT" || tag === "TEXTAREA";

    if (event.key === "/" && !typing) {
      event.preventDefault();
      if (softwareTab) selectTab(softwareTab);
      search.focus();
      return;
    }
    if (event.key === "Escape" && document.activeElement === search && search.value) {
      search.value = "";
      state.q = "";
      render();
    }
  });

  /* ---------- 主题 ---------- */
  function syncTheme() {
    const isDark = document.documentElement.dataset.theme === "dark";
    if (metaTheme) metaTheme.setAttribute("content", isDark ? "#0B0C0D" : "#F6F5F2");
    if (themeBtn) {
      const label = isDark ? "切换到浅色主题" : "切换到深色主题";
      themeBtn.setAttribute("aria-label", label);
      themeBtn.setAttribute("title", label);
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("km-theme", next);
      } catch (e) {}
      syncTheme();
    });
    syncTheme();
  }

  /* ---------- 其它 ---------- */
  const totalEl = document.getElementById("statTotal");
  if (totalEl) totalEl.textContent = String(SOFTWARE.length);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  render();
})();
