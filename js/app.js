const data = [
    {
      title: "Смартфон Apple iPhone 12 Pro 128GB Graphite",
      img: "img/iPhone-graphite.png",
      screen: "'Экран 6.1'/2532x1170 Пикс",
      tech: "Технология экрана OLED",
      processor: "Тип процессора A14 Bionic",
      memory: "Встроенная память (ROM) 128 ГБ",
      camera: "Основная камера МПикс 12/12/12/LiDAR",
      price: 99990,
      color: "Graphite"
    },
    {
      title: "Смартфон Apple iPhone 13 Pro 128GB Silver",
      img: "img/iPhone-silver.png",
      screen: "'Экран 6.1'/2532x1170 Пикс",
      tech: "Технология экрана LSD",
      processor: "Тип процессора A14 Bionic",
      memory: "Встроенная память (ROM) 128 ГБ",
      camera: "Основная камера МПикс 12/12/12/LiDAR",
      price: 99995,
      color: "Silver"
    },
    {
        title: "Смартфон Apple iPhone 14 Pro 128GB Pacific Blue",
        img: "img/iPhone-blue.png",
        screen: "'Экран 6.1'/2532x1170 Пикс",
        tech: "Технология экрана Amalet",
        processor: "Тип процессора A14 Bionic",
        memory: "Встроенная память (ROM) 128 ГБ",
        camera: "Основная камера МПикс 12/12/12/LiDAR",
        price: 99999,
        color: "Pacific Blue"
      }
    ];

    const cardDetailChange = document.querySelectorAll(".card-detail__change");

    const closeActiveBtn = () => {
        cardDetailChange.forEach(elem => {
            elem.classList.remove('active');
        });
    };

    const cardTitleChange = document.querySelector(".card-details__title");
    const cardPriceChange = document.querySelector(".card-details__price");
    const cardImageChange = document.querySelector(".card__image");
    const screenInfo = document.querySelector(".description__screen");
    const memoryInfo = document.querySelector(".description__memory");
    const processorInfo = document.querySelector(".description__processor");
    const techInfo = document.querySelector(".description__tech-screen");
    const cameraInfo = document.querySelector(".description__camera");
    const colorInfo = document.querySelector(".description__color");

    cardDetailChange.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            closeActiveBtn();
            btn.classList.add('active');
            cardImageChange.setAttribute("src", `${data[i].img}`);
            cardTitleChange.textContent = `${data[i].title}`;
            screenInfo.textContent = `${data[i].screen}`;
            techInfo.textContent = `${data[i].tech}`;
            processorInfo.textContent = `${data[i].processor}`;
            memoryInfo.textContent = `${data[i].memory}`;
            cameraInfo.textContent = `${data[i].camera}`;
            colorInfo.textContent = `Цвет: ${data[i].color}`;

            cardPriceChange.textContent = `${data[i].price}`;  
        });
    });

    const accordeon = () => {
        const characteristicsItemElem = document.querySelector(
          ".characteristics__item"
        );
        const characteristicsDescription = document.querySelector(
          ".characteristics__description"
        );
        const characteristicsListElem = document.querySelector(
          ".characteristics__list"
        );
        let gg = document.querySelectorAll(".characteristics__list-description");
    
        const open = (button, dropDown) => {
          dropDown.style.height = `${dropDown.scrollHeight}px`;
          button.classList.add("active");
          dropDown.classList.add("active");
        };
        const close = (button, dropDown) => {
            dropDown.style.height = `0px`;
            button.classList.remove("active");
            dropDown.classList.remove("active");
          };
        characteristicsListElem.addEventListener("click", (event) => {
          const target = event.target;
          if (target.classList.contains("active")) {
            const parent = target.closest(".characteristics__item");
            const description = parent.querySelector(
              ".characteristics__description"
            );
            close(target, description);
          } else { 
            const parent = target.closest(".characteristics__item");
            const description = parent.querySelector(
              ".characteristics__description"
            );
            open(target, description);
          }
        });
      };
   
      accordeon();