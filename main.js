const MarkAllAsReadBtn = document.querySelector("#mark-all-read-btn");
const unread = document.querySelectorAll(".unread");
const unreadCount = document.querySelector("#unread-count");

unreadCount.innerText = unread.length;

MarkAllAsReadBtn.addEventListener("click", () => {
  const notificationUnread = document.querySelectorAll("div.unread");
  const unreadAlert = document.querySelectorAll(".red-dot");

  for (let e of notificationUnread) {
    e.classList.remove("unread");
  }

  for (let e of unreadAlert) {
    e.classList.remove("red-dot");
  }

  const newUnread = document.querySelectorAll(".unread");
  unreadCount.innerText = newUnread.length;
});
