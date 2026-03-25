const jobList = [
  {
    id: 1,
    name: "Quét nhà",
    status: true,
  },
  {
    id: 2,
    name: "Giặt quần áo",
    status: false,
  },
  {
    id: 3,
    name: "Lau nhà",
    status: true,
  },
];

const jobListElement = document.querySelector("#job-list");
const formElement = document.querySelector("#form");
const jobNameElement = document.querySelector("#job-name");

// Render danh sách công việc
const renderJob = () => {
  let jobHtml = "";
  jobList.forEach((element) => {
    jobHtml += `
        <li>
            <input ${element.status ? `checked` : ``} type="checkbox" />
            ${
              element.status
                ? `<s>${element.name}</s>`
                : `<span>${element.name}</span>`
            }
            
            <button>Sửa</button>
            <button>Xóa</button>
        </li>
    `;
  });

  // gán chuỗi HTML đã chứa dữ liệu vào ul
  jobListElement.innerHTML = jobHtml;
};

// Lắng nghe sự kiện submit form thêm mới công việc
formElement.addEventListener("submit", (event) => {
  // Ngăn chặn sự kiện mặc định của form
  event.preventDefault();

  // 1. Lấy dữ liệu từ input + 2. Validate dữ liệu
  if (jobNameElement.value) {
    // 3. Gom dữ liệu thành 1 đối tượng
    const newJob = {
      id: jobList.length + 1,
      name: jobNameElement.value,
      status: false,
    };

    // 4. Thêm dữ liệu vào đầu mảng
    jobList.unshift(newJob);

    // 5. Render lại danh sách mới
    renderJob();

    // 6. Reset lại form
    jobNameElement.value = "";
  } else {
    alert("Tên công việc không được để trống");
  }
});

renderJob();
