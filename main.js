let header = document.querySelector("header");
let navDesktop = document.getElementById("navDesktop");
let navMobile = document.createElement("div");
let navUl = document.createElement("ul");

navUl.innerHTML =
  navDesktop.innerHTML + `<i id="xmark" class="fa-solid fa-xmark"></i>`;
header.innerHTML += `<span><i id="bars" class="fa-solid fa-bars"></i></span>`;
navMobile.classList.add("menu");
navMobile.appendChild(navUl);
header.appendChild(navMobile);

window.addEventListener("scroll", () => {
  if (scrollY > 70) {
    header.classList.add("scrolling");
  } else {
    header.classList.remove("scrolling");
  }
});

//addEvent

let bars = document.getElementById("bars");
bars.addEventListener("click", () => {
  navMobile.style.display = "block";
});

let xmark = document.getElementById("xmark");
xmark.addEventListener("click", () => {
  navMobile.style.display = "none";
});

let boxFood = document.querySelector(".boxFood");
let mealTypeBtns = document.querySelectorAll(".mealType");
let allMmealTypeBtn = document.getElementById("all");
let arrayOfFood = [
  // breakfast
  {
    nameOfFood: "شاورما",
    weightOfFood: 250,
    imageFood: "images/menu-9.jpg",
    typeOfMeal: "breakfast",
  },
  {
    nameOfFood: "حمص بالطحينية مع خبز طابون",
    weightOfFood: 300,
    imageFood: "images/menu-10.jpg",
    typeOfMeal: "breakfast",
  },
  {
    nameOfFood: "مناقيش زعتر وزيت",
    weightOfFood: 200,
    imageFood: "images/menu-11.jpg",
    typeOfMeal: "breakfast",
  },
  {
    nameOfFood: "جبنة عكاوية مع زيتون",
    weightOfFood: 180,
    imageFood: "images/menu-12.jpg",
    typeOfMeal: "breakfast",
  },
  {
    nameOfFood: "شكشوكة بيض بالطماطم",
    weightOfFood: 350,
    imageFood: "images/menu-13.jpg",
    typeOfMeal: "breakfast",
  },

  // lunch
  {
    nameOfFood: "مسخّن دجاج بالخبز العربي",
    weightOfFood: 450,
    imageFood: "images/menu-14.jpg",
    typeOfMeal: "lunch",
  },
  {
    nameOfFood: "كبسة لحم مع أرز بسمتي",
    weightOfFood: 600,
    imageFood: "images/menu-15.jpg",
    typeOfMeal: "lunch",
  },
  {
    nameOfFood: "منسف أردني مع لحم الضأن",
    weightOfFood: 650,
    imageFood: "images/menu-16.jpg",
    typeOfMeal: "lunch",
  },
  {
    nameOfFood: "مسقعة الباذنجان باللحمة",
    weightOfFood: 500,
    imageFood: "images/menu-17.jpg",
    typeOfMeal: "lunch",
  },
  {
    nameOfFood: "دولمة ورق عنب",
    weightOfFood: 400,
    imageFood: "images/menu-17.jpg",
    typeOfMeal: "lunch",
  },
  {
    nameOfFood: "شاورما لحم عربي",
    weightOfFood: 550,
    imageFood: "images/menu-19.jpg",
    typeOfMeal: "lunch",
  },
  {
    nameOfFood: "مقلوبة رز مع دجاج",
    weightOfFood: 600,
    imageFood: "images/menu-20.jpg",
    typeOfMeal: "lunch",
  },
  {
    nameOfFood: "يخنة فاصوليا بيضاء باللحم",
    weightOfFood: 580,
    imageFood: "images/menu-21.jpg",
    typeOfMeal: "lunch",
  },

  // dinner
  {
    nameOfFood: "سمك مشوي مع تبولة",
    weightOfFood: 500,
    imageFood: "images/menu-22.jpg",
    typeOfMeal: "dinner",
  },
  {
    nameOfFood: "شيش طاووق مع أرز أبيض",
    weightOfFood: 550,
    imageFood: "images/menu-23.jpg",
    typeOfMeal: "dinner",
  },
  {
    nameOfFood: "كبة مقلية مع لبن",
    weightOfFood: 480,
    imageFood: "images/menu-24.jpg",
    typeOfMeal: "dinner",
  },
  {
    nameOfFood: "مجبوس دجاج مع خضار",
    weightOfFood: 600,
    imageFood: "images/menu-25.jpg",
    typeOfMeal: "dinner",
  },
  {
    nameOfFood: "محشي كوسا و بندورة",
    weightOfFood: 450,
    imageFood: "images/menu-26.jpg",
    typeOfMeal: "dinner",
  },
  {
    nameOfFood: "لحم عجل مشوي مع هريسة",
    weightOfFood: 650,
    imageFood: "images/menu-27.jpg",
    typeOfMeal: "dinner",
  },
  {
    nameOfFood: "فتّة حمص باللبن",
    weightOfFood: 350,
    imageFood: "images/menu-28.jpg",
    typeOfMeal: "dinner",
  },
  {
    nameOfFood: "مشاوي مشكلة مع خضار مشوي",
    weightOfFood: 700,
    imageFood: "images/menu-29.jpg",
    typeOfMeal: "dinner",
  },
  {
    nameOfFood: "رز معمر بالدجاج",
    weightOfFood: 600,
    imageFood: "images/menu-30.jpg",
    typeOfMeal: "dinner",
  },
];

function renderFoodItem(food) {
  return `
      <div class="Food">
          <img src="${food.imageFood}" alt="${food.nameOfFood}" />
          <div class="info">
              <p>${food.nameOfFood}</p>
              <span>جم ${food.weightOfFood}</span>
              <button><i class="fa-solid fa-plus"></i></button>
          </div>
      </div>
    `;
}

mealTypeBtns.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("active");
  });
});

arrayOfFood.forEach((element) => {
  boxFood.innerHTML += renderFoodItem(element);
});

function contentMain(typeOfFood) {
  boxFood.innerHTML = "";
  arrayOfFood.forEach((element) => {
    if (element.typeOfMeal === typeOfFood || typeOfFood === "all") {
      boxFood.innerHTML += renderFoodItem(element);
    }
  });

  for (let i = 0; i < mealTypeBtns.length; i++) {
    mealTypeBtns[i].classList.remove("active");
  }
  allMmealTypeBtn.classList.remove("active");
}

allMmealTypeBtn.onclick = () => {
  boxFood.innerHTML = "";
  allMmealTypeBtn.classList.add("active");
  arrayOfFood.forEach((element) => {
    boxFood.innerHTML += renderFoodItem(element);
  });

  for (let i = 0; i < mealTypeBtns.length; i++) {
    mealTypeBtns[i].classList.remove("active");
  }
};

let nowYear = new Date();
let persentYear = document.getElementById("persentYear");

persentYear.textContent = nowYear.getFullYear();
