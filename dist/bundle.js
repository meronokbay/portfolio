(()=>{"use strict";var e=document.querySelector("nav");document.querySelectorAll(".modal-btn").forEach((function(e){e.addEventListener("click",(function(){var t=document.createElement("div");t.classList="fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center";var n=document.createElement("div");n.classList="bg-white w-10/12 p-3 pt-7 rounded relative";var o=e.parentElement.querySelector("div.project"),a=e.parentElement.querySelector("ul.project-skills"),r=document.createElement("button");r.classList="absolute top-0 right-0 text-blue-800",r.innerHTML='<i class="fas fa-window-close fa-lg"></i>',r.addEventListener("click",(function(){t.remove()})),n.append(r,o.cloneNode(!0),a.cloneNode(!0),function(e){var t,n,o,a=document.createElement("div");return e.classList.contains("first-project")?(t="https://group-payments.herokuapp.com/",n="https://github.com/meronokbay/group-payments",o="Group Payments is a web app that allows you to group payments with your friends and family."):e.classList.contains("second-project")?(t="https://meronokbay.github.io/panda-runner/",n="https://github.com/meronokbay/panda-runner",o="Panda Runner is a game where you play the role of a panda and collect as many coins as you can before falling over a platform or getting hurt."):e.classList.contains("third-project")?(t="https://github.com/meronokbay/microverse-linters-setup/blob/main/setup_linters",n="https://github.com/meronokbay/microverse-linters-setup",o="This is a bash script that lets you install and setup linters quickly for the programming languages used in the Microverse curriculum."):e.classList.contains("fourth-project")&&(t="https://meronokbay.github.io/course-directory/",n="https://github.com/meronokbay/course-directory",o="This project is a directory of hot online coding courses. This project is built to demonstrate mastery of HTML and CSS."),a.innerHTML='\n  <p class="py-3">'.concat(o,'</p>\n  <a target="_blank" class="bg-blue-800 text-white font-semibold block py-3 mb-1 text-center rounded"\n  href="').concat(t,'">\n    See Live <i class="fas fa-external-link-alt"></i>\n  </a>\n  <a target="_blank" class="bg-blue-800 text-white font-semibold block py-3 mb-1 text-center rounded"\n  href="').concat(n,'">\n    See Source <i class="fab fa-lg fa-github"></i>\n  </a>\n  '),a}(o)),t.append(n),t.addEventListener("click",(function(e){e.target===t&&t.remove()})),document.body.append(t)}))})),window.addEventListener("scroll",(function(){0===window.scrollY?e.classList.remove("shadow"):e.classList.add("shadow")}))})();