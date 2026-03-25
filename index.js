// Truy xuất phần tử
// getElementById(): Lấy 1 phần tử theo id
const title1Element = document.getElementById("title-1");
console.log("title1Element: ", title1Element);

const title2Element = document.getElementById("title-2");
console.log("title2Element: ", title2Element);

// querySelector()
const paragraphElement = document.querySelector(".paragraph");
console.log("paragraphElement: ", paragraphElement);

// querySelectorAll()
const genderElements = document.querySelectorAll("input[name=gender]");
console.log("genderElements: ", genderElements);

// Sự khác nhau giữa NoteList với Mảng truyền thống
// Giống nhau: Đều có các phần tử và có chỉ số
// Khác nhau:
// 1. NodeList không thể sử dụng được các phương thức làm việc với mảng
// như filter, map, reduce,...; Không thể thao tác thêm, sửa, xóa;
// Chỉ có hỗ trợ đọc, duyệt thông forEach()

// 2. Truy xuất và thay đổi nội dung
// 2.1. Lấy ra phần tử (theo 3 cách trên)
const fullNameElement = document.getElementById("fullname");

// 2.2. Thay đổi hoặc lấy ra theo 3 phương thức
console.log("Lấy ra bằng innerHTML: ", fullNameElement.innerHTML);
console.log("Lấy ra bằng textContent: ", fullNameElement.textContent);
console.log("Lấy ra bằng innerText: ", fullNameElement.innerText);

// Thao tác cập nhật nội dung
// innerHTML: Dùng khi muốn cập nhật nội dung dạng HTML

const courceListElement = document.querySelector("#cource-list");
courceListElement.innerHTML = `<li>Ruby</li>`;

// Bài tập: Cho 1 danh sách tên: ["Nam", "An", "Tâm"],
// hãy render danh sách các tên ra ngoài giao diện bằng thẻ ul và li

const names = ["Nam", "An", "Tâm"];

// 1. Lấy ra phần tử cần được thay đổi
const nameListElement = document.querySelector("#name-list");

// 2. Duyệt qua mảng và gán giá trị cho từng thẻ li
// Cứ mỗi lần duyệt qua mảng, tiến hành cộng li lại lại với nhau
let html = "";
names.forEach((elment, index) => {
  html += `<li>${elment}</li>`;
});

// 3. Gán chuỗi HTML chứa dữ liệu vào thẻ ul
nameListElement.innerHTML = html;

// Bài tập 2: Cho 1 danh sách giá tiền: [10000, 20000, 30000],
// hãy render danh sách các giá ra ngoài giao diện bằng thẻ ul và li

const prices = [10000, 20000, 30000];

const priceListElement = document.querySelector("#price-list");

let priceHtml = "";
prices.forEach((elment, index) => {
  priceHtml += `<li>${elment}</li>`;
});

priceListElement.innerHTML = priceHtml;

// Render dữ liệu dạng object
const jobs = [
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
];

// Bước 1: Lấy ra phần tử tbody
const tbodyELement = document.querySelector("#tbody");

// Bước 2: Duyệt qua mảng và cập nhật dữ liệu vào trong tr
let jobHtml = "";
jobs.forEach((element) => {
  jobHtml += `
    <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.status ? `Hoàn thành` : `Chưa hoàn thành`}</td>
        <td>
            <button>Sửa</button>
            <button>Xóa</button>
        </td>
    </tr>
    `;
});

// Bước 3: Gán chuỗi HTML đã được cập nhật vào trong thẻ tbody
tbodyELement.innerHTML = jobHtml;

// 3. Thay đổi style cho phần tử
const titleMainElement = document.querySelector("#title-main");
// titleMainElement.style.color = "red";
// titleMainElement.style.fontSize = "40px";
// titleMainElement.style.fontStyle = "italic";

titleMainElement.classList.add("title-main");

titleMainElement.classList.remove("title-main");

// 4. Event (sự kiện)
const button2Element = document.querySelector("#button-2");

button2Element.onclick = () => {
  console.log("Clicked me 2");
};

const button3Element = document.querySelector("#button-3");

button3Element.addEventListener("click", () => {
  console.log("Clicked me 3");
});

const inputTextElement = document.querySelector("#input-text");

inputTextElement.addEventListener("input", (event) => {
  console.log("Input changed: ", event.target.value);
});
