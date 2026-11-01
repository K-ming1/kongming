/* =========================================================
   PureLand · 净土
   世界上最后一方净土 — 软件数据 + 交互逻辑（无依赖，原生 JS）
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
      name: "BandZip",
      mark: "BZ",
      cat: "系统工具",
      catKey: "system",
      tagline: "压缩解压的省心选择，界面简单、上手快。",
      version: "7.47",
      size: "10.75 MB",
      platform: "Windows",
      download: "https://www.bandisoft.com/bandizip/",
      site: "https://www.bandisoft.com/bandizip/",
      pick: true
    },
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
    },
    {
      name: "Photoshop",
      mark: "Ps",
      cat: "设计创意",
      catKey: "design",
      tagline: "图像处理的行业标准，修图、合成、调色都靠它。",
      version: "2025",
      size: "—",
      platform: "Windows · macOS",
      download: "https://www.adobe.com/downloads.html",
      site: "https://www.adobe.com/products/photoshop.html",
      pick: true
    },
    {
      name: "Premiere Pro",
      mark: "Pr",
      cat: "设计创意",
      catKey: "design",
      tagline: "视频剪辑主力，和 Adobe 全家桶配合最顺。",
      version: "2025",
      size: "—",
      platform: "Windows · macOS",
      download: "https://www.adobe.com/downloads.html",
      site: "https://www.adobe.com/products/premiere.html",
      pick: false
    },
    {
      name: "After Effects",
      mark: "Ae",
      cat: "设计创意",
      catKey: "design",
      tagline: "动效与合成的老大哥，模板生态庞大。",
      version: "2025",
      size: "—",
      platform: "Windows · macOS",
      download: "https://www.adobe.com/downloads.html",
      site: "https://www.adobe.com/products/aftereffects.html",
      pick: false
    },
    {
      name: "Illustrator",
      mark: "Ai",
      cat: "设计创意",
      catKey: "design",
      tagline: "矢量绘图与排版，logo、插画都用它。",
      version: "2025",
      size: "—",
      platform: "Windows · macOS",
      download: "https://www.adobe.com/downloads.html",
      site: "https://www.adobe.com/products/illustrator.html",
      pick: false
    },
    {
      name: "DaVinci Resolve",
      mark: "DV",
      cat: "设计创意",
      catKey: "design",
      tagline: "剪辑调色一体化，免费版功能就很全。",
      version: "20",
      size: "—",
      platform: "全平台",
      download: "https://www.blackmagicdesign.com/products/davinciresolve",
      site: "https://www.blackmagicdesign.com/products/davinciresolve",
      pick: false
    },
    {
      name: "Studio One",
      mark: "S1",
      cat: "影音媒体",
      catKey: "media",
      tagline: "音乐制作宿主，录音、编曲、混音一站完成。",
      version: "7",
      size: "—",
      platform: "Windows · macOS",
      download: "https://www.presonus.com/products/studio-one",
      site: "https://www.presonus.com/products/studio-one",
      pick: false
    },
    {
      name: "小红花音效助手",
      mark: "花",
      cat: "影音媒体",
      catKey: "media",
      tagline: "直播常用的音效播放器，主播人手一个。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://yx.xddck.com/",
      site: "https://yx.xddck.com/",
      pick: false
    },
    {
      name: "Sunwoo 录屏大师",
      mark: "Sw",
      cat: "影音媒体",
      catKey: "media",
      tagline: "高帧率录屏，原画质不卡顿。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://www.sunwoosoft.com/sunwoo-cap",
      site: "https://www.sunwoosoft.com/",
      pick: false
    },
    {
      name: "PotPlayer",
      mark: "Ptn",
      cat: "影音媒体",
      catKey: "media",
      tagline: "本地播放器，字幕、倍速、截图都顺手。",
      version: "1.7",
      size: "—",
      platform: "Windows",
      download: "https://potplayer.daum.net/",
      site: "https://potplayer.daum.net/",
      pick: false
    },
    {
      name: "CleverPDF",
      mark: "CP",
      cat: "效率办公",
      catKey: "office",
      tagline: "PDF 转换与处理，浏览器里就能用。",
      version: "在线",
      size: "在线",
      platform: "Web",
      download: "https://www.cleverpdf.com/cn",
      site: "https://www.cleverpdf.com/cn",
      pick: false
    },
    {
      name: "Parsec",
      mark: "Pc",
      cat: "效率办公",
      catKey: "office",
      tagline: "低延迟远程串流，异地也能流畅打游戏。",
      version: "最新",
      size: "—",
      platform: "全平台",
      download: "https://parsec.app/",
      site: "https://parsec.app/",
      pick: false
    },
    {
      name: "RustDesk",
      mark: "Rs",
      cat: "效率办公",
      catKey: "office",
      tagline: "开源自建的远程桌面，数据走自己的服务器。",
      version: "1.3",
      size: "—",
      platform: "全平台",
      download: "https://rustdesk.com/zh/",
      site: "https://rustdesk.com/zh/",
      pick: false
    },
    {
      name: "OfficeBox",
      mark: "OB",
      cat: "效率办公",
      catKey: "office",
      tagline: "Office 安装与组件管理合集。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://www.bing.com/search?q=OfficeBox+%E5%8A%9E%E5%85%AC%E8%BD%AF%E4%BB%B6",
      site: "https://www.bing.com/search?q=OfficeBox+%E5%8A%9E%E5%85%AC%E8%BD%AF%E4%BB%B6",
      pick: false
    },
    {
      name: "IDM",
      mark: "IDM",
      cat: "系统工具",
      catKey: "system",
      tagline: "多线程下载，浏览器接管一把好手。",
      version: "6.42",
      size: "—",
      platform: "Windows",
      download: "https://www.internetdownloadmanager.com/",
      site: "https://www.internetdownloadmanager.com/",
      pick: false
    },
    {
      name: "Geek Uninstaller",
      mark: "Geek",
      cat: "系统工具",
      catKey: "system",
      tagline: "卸载残留清理，绿色单文件。",
      version: "1.5",
      size: "—",
      platform: "Windows",
      download: "https://geekuninstaller.com/",
      site: "https://geekuninstaller.com/",
      pick: false
    },
    {
      name: "DirectX 修复工具",
      mark: "DX",
      cat: "系统工具",
      catKey: "system",
      tagline: "DirectX 运行库缺失修复，报错先跑它。",
      version: "4.3",
      size: "—",
      platform: "Windows",
      download: "https://www.microsoft.com/zh-cn/download/details.aspx?id=35",
      site: "https://www.microsoft.com/zh-cn/download/details.aspx?id=35",
      pick: false
    },
    {
      name: "Cloudflare WARP",
      mark: "WF",
      cat: "安全隐私",
      catKey: "security",
      tagline: "免费的加密 DNS 与网络加速，装上就生效。",
      version: "2025",
      size: "—",
      platform: "全平台",
      download: "https://1.1.1.1/",
      site: "https://1.1.1.1/",
      pick: false
    },
    {
      name: "Steam",
      mark: "Stm",
      cat: "游戏加速",
      catKey: "game",
      tagline: "最大的 PC 游戏平台，库和创意工坊都在这。",
      version: "在线",
      size: "在线",
      platform: "全平台",
      download: "https://store.steampowered.com/about/",
      site: "https://store.steampowered.com/",
      pick: false
    },
    {
      name: "Epic Games",
      mark: "Epi",
      cat: "游戏加速",
      catKey: "game",
      tagline: "每周送免费游戏的商店，虚幻引擎同门。",
      version: "在线",
      size: "在线",
      platform: "全平台",
      download: "https://store.epicgames.com/download",
      site: "https://store.epicgames.com/",
      pick: false
    },
    {
      name: "Nexus Mods",
      mark: "Nx",
      cat: "游戏加速",
      catKey: "game",
      tagline: "MOD 资源与管理器，装机必装的改造站。",
      version: "在线",
      size: "在线",
      platform: "Windows",
      download: "https://www.nexusmods.com/",
      site: "https://www.nexusmods.com/",
      pick: false
    },
    {
      name: "Oopz",
      mark: "Opz",
      cat: "游戏加速",
      catKey: "game",
      tagline: "开黑语音，频道式管理，比传统语音轻。",
      version: "在线",
      size: "在线",
      platform: "全平台",
      download: "https://oopz.cn/",
      site: "https://oopz.cn/",
      pick: false
    },
    {
      name: "OpenSpeedy",
      mark: "OSp",
      cat: "游戏加速",
      catKey: "game",
      tagline: "游戏变速工具，单机和模拟器都能调。",
      version: "1.0",
      size: "—",
      platform: "Windows",
      download: "https://store.steampowered.com/app/5010920/OpenSpeedy/",
      site: "https://github.com/OpenSpeedy/OpenSpeedy",
      pick: false
    },
    {
      name: "HypoMux",
      mark: "HM",
      cat: "游戏加速",
      catKey: "game",
      tagline: "线路优化型加速器，游戏和应用都能用。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://hypomux.com/",
      site: "https://hypomux.com/",
      pick: false
    },
    {
      name: "外星仔加速器",
      mark: "外",
      cat: "游戏加速",
      catKey: "game",
      tagline: "主打主机与联机游戏的加速器。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://www.bing.com/search?q=%E5%A4%96%E6%98%9F%E4%BB%94%E5%8A%A0%E9%80%9F%E5%99%A8+%E5%AE%98%E7%BD%91",
      site: "https://www.bing.com/search?q=%E5%A4%96%E6%98%9F%E4%BB%94%E5%8A%A0%E9%80%9F%E5%99%A8+%E5%AE%98%E7%BD%91",
      pick: false
    },
    {
      name: "UU加速器",
      mark: "UU",
      cat: "游戏加速",
      catKey: "game",
      tagline: "网易出品，主机和 PC 游戏都支持。",
      version: "最新",
      size: "—",
      platform: "全平台",
      download: "https://uu.163.com/",
      site: "https://uu.163.com/",
      pick: true
    },
    {
      name: "雷神加速器",
      mark: "雷",
      cat: "游戏加速",
      catKey: "game",
      tagline: "老牌加速器，按小时计费很灵活。",
      version: "最新",
      size: "—",
      platform: "全平台",
      download: "https://www.leigod.com/",
      site: "https://www.leigod.com/",
      pick: false
    },
    {
      name: "奇游加速器",
      mark: "奇",
      cat: "游戏加速",
      catKey: "game",
      tagline: "电竞向加速，节点覆盖广。",
      version: "最新",
      size: "—",
      platform: "全平台",
      download: "https://www.qiyou.cn/",
      site: "https://www.qiyou.cn/",
      pick: false
    },
    {
      name: "biubiu加速器",
      mark: "biu",
      cat: "游戏加速",
      catKey: "game",
      tagline: "手机和 PC 都能用，免费时长给得多。",
      version: "最新",
      size: "—",
      platform: "全平台",
      download: "https://www.biubiu001.com/",
      site: "https://www.biubiu001.com/",
      pick: false
    },
    {
      name: "迅游加速器",
      mark: "迅",
      cat: "游戏加速",
      catKey: "game",
      tagline: "国内最早一批游戏加速器。",
      version: "最新",
      size: "—",
      platform: "全平台",
      download: "https://www.xunyou.com/",
      site: "https://www.xunyou.com/",
      pick: false
    },
    {
      name: "轻蜂加速器",
      mark: "轻",
      cat: "游戏加速",
      catKey: "game",
      tagline: "轻量客户端，主打低占用。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://qfacc.cn/",
      site: "https://qfacc.cn/",
      pick: false
    },
    {
      name: "AK加速器",
      mark: "AK",
      cat: "游戏加速",
      catKey: "game",
      tagline: "免费时长友好，支持多平台。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://ak.akspeedy.com/",
      site: "https://ak.akspeedy.com/",
      pick: false
    },
    {
      name: "移动加速器",
      mark: "移",
      cat: "游戏加速",
      catKey: "game",
      tagline: "中国移动出品，宽带用户可以直接试。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://aifast.komect.com/",
      site: "https://aifast.komect.com/",
      pick: false
    },
    {
      name: "奇妙加速器",
      mark: "妙",
      cat: "游戏加速",
      catKey: "game",
      tagline: "新晋加速器，价格便宜。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://jiasu.qimiao.com/",
      site: "https://jiasu.qimiao.com/",
      pick: false
    },
    {
      name: "蒲公英联机版",
      mark: "蒲",
      cat: "游戏加速",
      catKey: "game",
      tagline: "异地组网联机，和朋友开一局。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://pgy.oray.com/",
      site: "https://pgy.oray.com/",
      pick: false
    },
    {
      name: "外星仔联机助手",
      mark: "联",
      cat: "游戏加速",
      catKey: "game",
      tagline: "和外星仔加速器配套的联机工具。",
      version: "最新",
      size: "—",
      platform: "Windows",
      download: "https://lianji.et001.com/",
      site: "https://lianji.et001.com/",
      pick: false
    },
    {
      name: "Watt Toolkit",
      mark: "WT",
      cat: "游戏加速",
      catKey: "game",
      tagline: "原名 Steam++，社区加速与工具箱。",
      version: "3.0",
      size: "—",
      platform: "全平台",
      download: "https://steampp.net/",
      site: "https://steampp.net/",
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

  function metaSpans(item) {
    const version = /^[\d.]/.test(item.version) ? `v${item.version}` : item.version;
    return [version, item.size, item.platform]
      .filter((value) => value && value !== "—")
      .map((value) => `<span>${value}</span>`)
      .join("<i></i>");
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
        <div class="card-meta">${metaSpans(item)}</div>
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

  const moduleCountEl = document.querySelector("#tab-software .tab-meta");
  if (moduleCountEl) moduleCountEl.textContent = String(SOFTWARE.length);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  render();
})();
