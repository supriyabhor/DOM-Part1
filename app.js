var menuLinks = [
     { text: 'about', href: '/about' },
     { text: 'catalog', href: '/catalog' },
     { text: 'orders', href: '/orders' },
     { text: 'account', href: '/account' },
   ];

   const mainEl = document.querySelector("main");

   mainEl.style.backgroundColor = "var(--main-bg)";

   mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
   
   mainEl.classList.add("flex-ctr");


   const topMenuEl = document.querySelector("#top-menu");
   topMenuEl.style.height = "100%";
   topMenuEl.style.backgroundColor = "--top-menu-bg";
   topMenuEl.classList.add("flex-around");


   menuLinks.forEach( link => {
       const newElement = document.createElement("a");
       newElement.setAttribute("href", link.href);
       newElement.textContent = link.text;
       topMenuEl.append(newElement);
     });


