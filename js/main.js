// advantages
class AdvantagesList {
  constructor(container = ".advantages__content") {
    this.container = document.querySelector(container);
    this.goods = [
      {
        id: 1,
        title: "Качественная продукция",
        text: "Все наши товары сертифицированы и&nbsp;имеют сопроводительную документацию.",
        img: "img/advantages1.png"
      },
      {
        id: 2,
        title: "Индивидуальный подход",
        text: "Возможность изготовления компонентов специально для вас на&nbsp;заводах-изготовителя.",
        img: "img/advantages2.png"
      },
      {
        id: 3,
        title: "Бесплатная доставка",
        text: "При наличии товара на&nbsp;складе и&nbsp;заказе от&nbsp;10&nbsp;000&nbsp;рублей, доставим бесплатно по&nbsp;Москве и&nbsp;СПБ в&nbsp;течение 2х&nbsp;часов.",
        img: "img/advantages3.png"
      },
      {
        id: 4,
        title: "Подбираем аналоги",
        text: "Поможем подобрать аналоги популярных европейских брендов в&nbsp;условиях санкций.",
        img: "img/advantages4.png"
      },
      {
        id: 5,
        title: "Резервный запас компонентов",
        text: "Хранение товара на&nbsp;наших складах для постоянных клиентов.",
        img: "img/advantages5.png"
      },
      {
        id: 6,
        title: "Гибкая система оплаты",
        text: "Отсрочка платежей для постоянных клиентов.",
        img: "img/advantages6.png"
      },
    ];
    this.allItems = [];
    this.render();
  }

  render() {
    for (let good of this.goods) {
      let item = new AdvantageItem(good);
      this.allItems.push(item);
      this.container.insertAdjacentHTML("beforeend", item.getMarkup());
    }
  }
}

class AdvantageItem {
  constructor(el) {
    this.id = el.id;
    this.title = el.title;
    this.text = el.text;
    this.img = el.img;
  }

  getMarkup() {
    return `
    <div class="advantages__item" data-id="${this.id}">
      <img src="${this.img}" alt="advantages" height="163">
      <h4>${this.title}</h4>
      <p>${this.text}</p>
    </div>
    `
  }
}

let advantages = new AdvantagesList();

//asnwers
let questionEls = document.querySelectorAll(".answers__question");
let answerEls = document.querySelectorAll(".answers__desc");

function showAnswer(array, newClass) {
  questionEls.forEach(question => {
    question.addEventListener("click", event => {
      let id = event.currentTarget.dataset.id;
      for (let arr of array) {
        if (arr.dataset.id === id) {
          arr.classList.toggle(newClass);
        }
      }
    });
  });
}

showAnswer(answerEls, "hidden");
showAnswer(questionEls, "hidden");