// ==UserScript==
// @name         MonaKit Cubox 书签
// @name:zh      MonaKit Cubox 书签
// @name:en      Monakit Cubox
// @namespace    https://github.com/scris/monakit.git
// @homepageURL  https://ds.scris.top/
// @version      1.0.1
// @description  用 Cubox 将此页面保存为书签
// @description:zh  用 Cubox 将此页面保存为书签
// @description:en  Add this page to Cubox Bookmark
// @icon         data:image/png;base64,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
// @author       Tianze Ds Qiu <https://ds.scris.top/>
// @match        *://*/*
// @grant        none
// @run-at       document-end
// @require      http://libs.baidu.com/jquery/2.1.4/jquery.min.js
// ==/UserScript==
const style = document.createElement("style");
style.innerText = `
      .monakit-cubox {
        position: fixed;
        left: 8px;
        bottom: 7px;
        width: 80px;
        height: 30px;
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