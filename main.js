let header = document.querySelector("header"); // تحديد عنصر الهيدر
let navDesktop = document.getElementById("navDesktop"); // قائمة التنقل الخاصة بالديسكتوب
let navMobile = document.createElement("div"); // إنشاء عنصر جديد للقائمة الخاصة بالموبايل
let navUl = document.createElement("ul"); // إنشاء قائمة غير مرتبة

// نسخ عناصر القائمة من الـ desktop + زر X للإغلاق
navUl.innerHTML =
  navDesktop.innerHTML + `<i id="xmark" class="fa-solid fa-xmark"></i>`;

// إضافة أيقونة "bars" (☰) لفتح القائمة في الموبايل
header.innerHTML += `<span><i id="bars" class="fa-solid fa-bars"></i></span>`;

// إضافة class "menu" للقائمة الموبايل + إلحاقها بالهيدر
navMobile.classList.add("menu");
navMobile.appendChild(navUl);
header.appendChild(navMobile);

// إخفاء القائمة عند تكبير الشاشة (أكثر من 1000px)
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1000) navMobile.style.display = "none";
});

// عند التمرير للأسفل أكثر من 70px، نضيف كلاس "scrolling" للهيدر
window.addEventListener("scroll", () => {
  scrollY > 70
    ? header.classList.add("scrolling")
    : header.classList.remove("scrolling");
});

// التعامل مع أيقونة bars (فتح القائمة الموبايل)
let bars = document.getElementById("bars");
bars.addEventListener("click", () => {
  navMobile.style.display = "block";
});

// التعامل مع أيقونة xmark (إغلاق القائمة الموبايل)
let xmark = document.getElementById("xmark");
xmark.addEventListener("click", () => {
  navMobile.style.display = "none";
});

// اختيار صندوق الأكل + أزرار أنواع الوجبات
let boxFood = document.querySelector(".boxFood");
let mealTypeBtns = document.querySelectorAll(".mealType");
let allMmealTypeBtn = document.getElementById("all");

// مصفوفة تحتوي على جميع الأكلات (اسم، وزن، صورة، نوع الوجبة)
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

// دالة لإرجاع عنصر HTML جاهز لعرض الأكلة
function renderFoodItem(food) {
  return `
      <div class="Food">
          <img loading="lazy" src="${food.imageFood}" alt="${food.nameOfFood}" />
          <div class="info">
              <p>${food.nameOfFood}</p>
              <span>جم ${food.weightOfFood}</span>
              <button><i class="fa-solid fa-plus"></i></button>
          </div>
      </div>
    `;
}

// إضافة كلاس "active" عند الضغط على أي زر نوع وجبة
mealTypeBtns.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("active");
  });
});

// عرض جميع الأكلات بشكل افتراضي عند تحميل الصفحة
arrayOfFood.forEach((element) => {
  boxFood.innerHTML += renderFoodItem(element);
});

// دالة لتصفية الأكلات حسب نوع الوجبة
function contentMain(typeOfFood) {
  boxFood.innerHTML = "";
  arrayOfFood.forEach((element) => {
    if (element.typeOfMeal === typeOfFood || typeOfFood === "all") {
      boxFood.innerHTML += renderFoodItem(element);
    }
  });

  // إزالة التحديد من جميع الأزرار
  for (let i = 0; i < mealTypeBtns.length; i++) {
    mealTypeBtns[i].classList.remove("active");
  }
  allMmealTypeBtn.classList.remove("active");
}

// عند الضغط على زر "الكل" يتم عرض جميع الأكلات
allMmealTypeBtn.onclick = () => {
  boxFood.innerHTML = "";
  allMmealTypeBtn.classList.add("active");
  arrayOfFood.forEach((element) => {
    boxFood.innerHTML += renderFoodItem(element);
  });

  // إزالة الـ active من بقية الأزرار
  for (let i = 0; i < mealTypeBtns.length; i++) {
    mealTypeBtns[i].classList.remove("active");
  }
};

// إضافة السنة الحالية في الفوتر
let nowYear = new Date();
let persentYear = document.getElementById("persentYear");
persentYear.textContent = nowYear.getFullYear();
