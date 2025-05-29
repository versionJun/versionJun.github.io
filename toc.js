// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="Tutorial.html">Tutorial</a></li><li class="chapter-item expanded affix "><li class="part-title">Software</li><li class="chapter-item expanded "><a href="Software/Windows/Windows.html"><strong aria-hidden="true">1.</strong> Windows</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Software/Windows/Nodejs.html"><strong aria-hidden="true">1.1.</strong> Nodejs</a></li></ol></li><li class="chapter-item expanded "><a href="Software/Android/Android.html"><strong aria-hidden="true">2.</strong> Android</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Software/Android/Termux+QEMU+linux_alpine+Docker.html"><strong aria-hidden="true">2.1.</strong> Termux+Docker</a></li></ol></li><li class="chapter-item expanded "><a href="Software/Linux/Linux.html"><strong aria-hidden="true">3.</strong> Linux</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Software/Linux/Command.html"><strong aria-hidden="true">3.1.</strong> Command</a></li><li class="chapter-item expanded "><a href="Software/Linux/Debian/Debian.html"><strong aria-hidden="true">3.2.</strong> Debian</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Software/Linux/Debian/debian-11-bullseye.html"><strong aria-hidden="true">3.2.1.</strong> debian-11-bullseye</a></li></ol></li><li class="chapter-item expanded "><a href="Software/Linux/Docker/Docker.html"><strong aria-hidden="true">3.3.</strong> Docker</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Software/Linux/Docker/docker-software.html"><strong aria-hidden="true">3.3.1.</strong> docker-software</a></li></ol></li><li class="chapter-item expanded "><a href="Software/Linux/Armbian/Armbian.html"><strong aria-hidden="true">3.4.</strong> Armbian</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Software/Linux/Armbian/X96MaxPlus搭建Armbian.html"><strong aria-hidden="true">3.4.1.</strong> X96MaxPlus搭建Armbian</a></li></ol></li><li class="chapter-item expanded "><a href="Software/Linux/H3CNX30Pro.html"><strong aria-hidden="true">3.5.</strong> H3C NX30 Pro</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">杂谈</li><li class="chapter-item expanded "><a href="杂谈/黑炮事件.html"><strong aria-hidden="true">4.</strong> 黑炮事件</a></li><li class="chapter-item expanded "><a href="杂谈/我们都无法成为大人.html"><strong aria-hidden="true">5.</strong> 我们都无法成为大人</a></li><li class="chapter-item expanded affix "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="About/mdbook-site.html">About</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
