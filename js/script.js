const faqData = [
      {
        question: "DORI - A.I. enabled Dental chair",
        points: [
          "Reducing the risk of cross-contamination",
        "Rapidly analyse diagnostic images, such as X-rays or 3D scans",
        "Identify potential issues that may not be immediately visible to the human eye",
        "quicker diagnoses and more timely treatment"
        ],
        image: "IMAGES/clinic-img/dori-chair.png"
      },
      {
        question: "10x Safety and and 4 steps sterilization process",
        points: [
          "Reducing the risk of cross-contamination",
        "Rapidly analyse diagnostic images, such as X-rays or 3D scans",
        "Identify potential issues that may not be immediately visible to the human eye",
        "quicker diagnoses and more timely treatment"
        ],
        image: "IMAGES/clinic-img/sterilization.png"
      },
      {
        question: "Experienced and Certified implantologist",
        points: [
          "200+ Experienced and Certified Implant Specialists.",
            "50,000+ Implants placed successfully.",
            "Avg experience of 10+ Years with specialized training.",
            "Continuous training programs for dentists to keep them up to date with the latest technology.",
            "Minimally invasive implant procedures to reduce recovery and treatment times."
        ],
        image: "IMAGES/clinic-img/implantologist.png"
      },
      {
        question: "Updated with world class equipments",
        points: [
          "Reducing the risk of cross-contamination",
        "Rapidly analyse diagnostic images, such as X-rays or 3D scans",
        "Identify potential issues that may not be immediately visible to the human eye",
        "quicker diagnoses and more timely treatment"
        ],
        image: "IMAGES/clinic-img/implantologist.png"
      },
      {
        question: "Regular audits for safety protocols",
        points: [
          "Reducing the risk of cross-contamination",
        "Rapidly analyse diagnostic images, such as X-rays or 3D scans",
        "Identify potential issues that may not be immediately visible to the human eye",
        "quicker diagnoses and more timely treatment"
        ],
        image: "IMAGES/clinic-img/dori-chair.png"
      }
    ];

    const faqList = document.getElementById("faqList");
    const mainImage = document.getElementById("mainImage");
    const defaultImage = "IMAGES/clinic-img/implantologist.jpg.png";
    let currentOpen = null;

    for (let item of faqData) {
      const faqItem = document.createElement("div");
      faqItem.className = "faq-item";

      const header = document.createElement("div");
      header.className = "faq-header";

      const question = document.createElement("div");
      question.className = "faq-question";
      question.textContent = item.question;

      const plus = document.createElement("div");
      plus.className = "toggle-plus";
      plus.textContent = "+";

      const answer = document.createElement("div");
      answer.className = "faq-answer";

      const ul = document.createElement("ul");
      ul.className = "answer-points";

      item.points.forEach(point => {
        const li = document.createElement("li");
        li.textContent = point;
        ul.appendChild(li);
      });

      answer.appendChild(ul);
      header.appendChild(question);
      header.appendChild(plus);
      faqItem.appendChild(header);
      faqItem.appendChild(answer);
      faqList.appendChild(faqItem);

      header.onclick = function() {
        const isOpen = answer.classList.contains("open");

        if (currentOpen && currentOpen !== faqItem) {
          const prev = currentOpen;
          prev.children[1].classList.remove("open");
          prev.children[0].children[1].textContent = "+";
          prev.children[0].children[0].classList.remove("active");
        }

        if (!isOpen) {
          answer.classList.add("open");
          plus.textContent = "−";
          question.classList.add("active");
          currentOpen = faqItem;

          mainImage.style.opacity = 0;
          setTimeout(() => {
            mainImage.src = item.image;
            mainImage.style.opacity = 1;
          }, 300);
        } else {
          answer.classList.remove("open");
          plus.textContent = "+";
          question.classList.remove("active");
          currentOpen = null;

          mainImage.style.opacity = 0;
          setTimeout(() => {
            mainImage.src = defaultImage;
            mainImage.style.opacity = 1;
          }, 300);
        }
      };
    }
