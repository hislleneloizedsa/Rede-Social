document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector(".like-btn");
  const postMedia = document.querySelector(".post-media");

  if (!likeBtn) return;

  const likesCountSpan = likeBtn.querySelector(".likes-count");
  const bookmarkBtn = document.querySelector(".bookmark-btn");

  let isLiked = false;
  let baseLikes = 0;

  if (likesCountSpan) {
    likesCountSpan.textContent = "0";
  }

  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  function animateSvg(element) {
    const svg = element.querySelector("svg");
    if (svg) {
      svg.style.transition = "transform 0.15s ease-in-out";
      svg.style.transform = "scale(1.3)";
      setTimeout(() => {
        svg.style.transform = "scale(1)";
      }, 150);
    }
  }

  function addLike() {
    baseLikes++;
    isLiked = true;
    likeBtn.classList.add("liked");

    if (likesCountSpan) {
      likesCountSpan.textContent = formatLikes(baseLikes);
    }

    animateSvg(likeBtn);
  }

  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isLiked) {
      isLiked = false;
      baseLikes = Math.max(0, baseLikes - 1);
      likeBtn.classList.remove("liked");

      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }
    } else {
      addLike();
    }
  });

  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  if (bookmarkBtn) {
    let isBookmarked = false;

    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);
      animateSvg(bookmarkBtn);
    });
  }
});