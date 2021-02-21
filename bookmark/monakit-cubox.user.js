// ==UserScript==
// @name         MonaKit Cubox 书签
// @name:zh      MonaKit Cubox 书签
// @name:en      Monakit Cubox
// @namespace    https://github.com/scris/monakit.git
// @homepageURL  https://ds.scris.top/
// @version      1.0.5
// @description  用 Cubox 将此页面保存为书签
// @description:zh  用 Cubox 将此页面保存为书签
// @description:en  Add this page to Cubox Bookmark
// @icon         https://cubox.pro/favicon.ico
// @author       Tianze Ds Qiu <https://ds.scris.top/>
// @match        *://*/*
// @grant        none
// @run-at       document-end
// @require      http://libs.baidu.com/jquery/2.1.4/jquery.min.js
// @license      MPL-2.0
// @noframes
// ==/UserScript==
const style = document.createElement("style");
style.innerText = `
      .monakit-cubox {
        position: fixed;
        left: 8px;
        bottom: 7px;
        z-index: 1300;
      }
      .monakit-cubox:focus, .monakit-cubox:active {
        border-color: #aaa #bbb #bbb;
        box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.15);
      }
      .monakit-cubox {
        border: 1px solid;
        border-color: #ccc #ccc #bbb;
        border-radius: 3px;
        background: #e6e6e6;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 15px 17px rgba(255, 255, 255, 0.5), inset 0 -5px 12px rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, .8);
        font-size: 12px !important;
        font-size: 0.75rem;
        line-height: 1;
        padding: .6em 1em .4em;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
      }
      `;
document.body.appendChild(style);
this.alt = document.createElement("button");
this.alt.className = "monakit-cubox";
this.alt.innerText = "Cubox";
document.body.appendChild(this.alt);
$(".monakit-cubox").click(function () {
  var url = location.href;
  var title = document.title;
  var desc = "";
  if (document.getSelection) {
    desc = document.getSelection();
  }
  if (desc.toString().length === 0) {
    let descTag = document.querySelector("[name=description]");
    desc = descTag ? descTag.getAttribute("content") : "";
  }
  if (desc != null) {
    if (desc.length > 500) {
      desc = desc.slice(0, 500) + "...";
    }
  }
  void open(
    "https://cubox.pro/web/tool/collection?url=" +
      encodeURIComponent(url) +
      "&title=" +
      encodeURIComponent(title) +
      "&description=" +
      encodeURIComponent(desc) +
      "&groupId=" +
      "&tags=" +
      "&starTarget=false" +
      "&editable=false",
    "cubox",
    "toolbar=no,resizable=no,location=no,menubar=no,width=300,height=100"
  );
});
