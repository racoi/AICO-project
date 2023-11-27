function closePopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
}

// function textDecoding() {
//   let postTxt = document.getElementById("twit").value;
//   let txt = document.getElementById("twit");

//   alert(postTxt);
//   postTxt = postTxt.replaceAll(/\r\n/gm, "<br>");
//   txt.innerHTML = postTxt;
//   alert(postTxt);
//   return true;
// }

// function aa(c) {
//   alert(c.replace("\r\n", "<br>"));
// }

function showPopup(imgsrc, user, content, generateStyle) {
  let popup = document.getElementById("popup");
  let clickedImg = document.getElementById("post_img");
  let popupUser = document.getElementById("post_popup_userid");
  let cardTxt = document.getElementById("popupTxt");
  let style = document.getElementById("generate_style");
  // alert(content);
  style.innerHTML = ``;
  // content = content.replace(/\\r\\n|\\n|\\r/gm, "<br>");
  // alert(content);

  var arSplitUrl = generateStyle.split("/");
  var nArLength = arSplitUrl.length;
  var arFileName = arSplitUrl[nArLength - 1];
  var arSplitFileName = arFileName.split(".");
  var sFileName = decodeURIComponent(arSplitFileName[0]);

  var gTotalTxt = sFileName.split("_");
  var gTxt = gTotalTxt[1].split("[");

  if (gTxt.length > 1) {
    var gTagFirst = gTxt[1].split(`{"value":`).join("");
    var tags = gTagFirst.replace(/}/g, "");
    tags = tags.replace(/]/g, "");
    tags = tags.replace(/"/g, "");
    var printTags = tags.split(`,`);

    style.innerHTML = `#${printTags.join(` #`)}`;
  }

  popupUser.innerHTML = user;
  cardTxt.innerHTML = content;
  clickedImg.src = imgsrc;
  popup.style.display = "block";

  $("html, body").animate({ scrollTop: 0 }, 400);
}
