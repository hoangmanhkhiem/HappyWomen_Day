const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const nameInput = $("#name");
const clickButton = $(".btn");
const loiChuc = $(".congratulate");
console.log(clickButton);
clickButton.addEventListener("click", showCongrate);
function showCongrate() {
  if (!(nameInput.value === "")) {
    var arrChuc = [
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
      `Chúc ${nameInput.value} một ngày 8/3 thật ý nghĩa, vui tư­ơi ngập tràn hạnh phúc. Chúc ${nameInput.value} luôn cười tư­ơi, cư­ời duyên, cư­ời e thẹn, cư­ời trẻ trung, ngập tràn các kiểu cười trong ngày hôm nay.`,
      `Chúc  ${nameInput.value} và các chị em trong toàn cơ quan có ngày vui trọn vẹn. Chúc ${nameInput.value} tìm cho mình được sự bình yên và hạnh phúc. Chúng ta là một gia đình. Mà gia đình thì phải luôn vui. Mình xin gửi lời chúc tốt đẹp nhất tới tất cả chị em một ngày 8/3 tràn ngập niềm hạnh phúc.`,
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
    ];
    var random = arrChuc[Math.floor(Math.random() * arrChuc.length)];
    console.log(random);
    loiChuc.style.display = "block";
    loiChuc.innerHTML = `
    <h1 class="head">${random}</h1>
    <h4 class="f-heading">Happy Woman's Day</h4>
     `;
    nameInput.value = "";
  }
}
