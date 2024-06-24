const MarkAllAsReadBtn = document.querySelector("#mark-all-read-btn");
const unread = document.querySelectorAll(".unread");
const unreadCount = document.querySelector("#unread-count");

unreadCount.innerText = unread.length;

MarkAllAsReadBtn.addEventListener("click", () => {
  const notificationUnread = document.querySelectorAll("div.unread");

  for (let elem of notificationUnread) {
    elem.classList.remove("unread");
  }

  unreadCount.innerText = 0;
});
