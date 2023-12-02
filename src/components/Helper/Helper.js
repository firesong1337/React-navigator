export const ItemSelection = (item, setSelectedItem, setConnectedObj) => {
  setSelectedItem({ name: item.name, avatar: item.avatar });
  console.log("selected item: ", item);
  switch (true) {
    case "groups" in item && "meetings" in item:
      setConnectedObj([
        { name: "groups", value: item.groups },
        { name: "meetings", value: item.meetings },
      ]);
      break;
    case "users" in item && "meetings" in item:
      setConnectedObj([
        { name: "users", value: item.users },
        { name: "meetings", value: item.meetings },
      ]);
      break;
    case "users" in item && "groups" in item:
      setConnectedObj([
        { name: "users", value: item.users },
        { name: "groups", value: item.groups },
      ]);
      break;
  }
};

// - является эффектом, а не чистой функцией
export const emptyAvatarHandler = (data) => {
  const emptyAvatar = 
    "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg";
  for (let i = 0; i < data.length; i++) {
    if (data[i].avatar === "") {
      data[i].avatar = emptyAvatar;
    }
  }
};

// пример подготовки данных
/* const getUsers = (users) => {
  emptyAvatarHandler(users);
  fn(user);
  //...

  return users;
}; */

export const resizeHandler = (refMain, refL, refT, refR, refB) => {
  const resizeableElem = refMain.current;
  const styles = window.getComputedStyle(resizeableElem);
  let width = parseInt(styles.width, 10);
  let height = parseInt(styles.height, 10);
  let x = 0;
  let y = 0;

  resizeRightHandler(refR, resizeableElem, styles, width, x);
  resizeTopHandler(refT, resizeableElem, styles, height, y);
  resizeBottomHandler(refB, resizeableElem, styles, height, y);
  resizeLeftHandler(refL, resizeableElem, styles, width, x);
};

const resizeRightHandler = (refR, resizeableElem, styles, width, x) => {
  const onMouseMoveRightResize = (event) => {
    const dx = event.clientX - x;
    x = event.clientX;
    width = width + dx;
    resizeableElem.style.width = `${width}px`;
  };

  const onMouseUpRightResize = (event) => {
    document.removeEventListener("mousemove", onMouseMoveRightResize);
  };

  const onMouseDownRightResize = (event) => {
    x = event.clientX;
    resizeableElem.style.left = styles.left;
    resizeableElem.style.right = null;
    document.addEventListener("mousemove", onMouseMoveRightResize);
    document.addEventListener("mouseup", onMouseUpRightResize);
  };
  const resizerRight = refR.current;
  resizerRight.addEventListener("mousedown", onMouseDownRightResize);
  return () => {
    resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
  };
};

const resizeTopHandler = (refT, resizeableElem, styles, height, y) => {
  // Top resize
  const onMouseMoveTopResize = (event) => {
    const dy = event.clientY - y;
    height = height - dy;
    y = event.clientY;
    resizeableElem.style.height = `${height}px`;
  };

  const onMouseUpTopResize = (event) => {
    document.removeEventListener("mousemove", onMouseMoveTopResize);
  };

  const onMouseDownTopResize = (event) => {
    y = event.clientY;
    resizeableElem.style.bottom = styles.bottom;
    resizeableElem.style.top = null;
    document.addEventListener("mousemove", onMouseMoveTopResize);
    document.addEventListener("mouseup", onMouseUpTopResize);
  };

  const resizerTop = refT.current;
  resizerTop.addEventListener("mousedown", onMouseDownTopResize);

  return () => {
    resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
  };
};

const resizeBottomHandler = (refB, resizeableElem, styles, height, y) => {
  // Bottom resize
  const onMouseMoveBottomResize = (event) => {
    const dy = event.clientY - y;
    height = height + dy;
    y = event.clientY;
    resizeableElem.style.height = `${height}px`;
  };

  const onMouseUpBottomResize = (event) => {
    document.removeEventListener("mousemove", onMouseMoveBottomResize);
  };

  const onMouseDownBottomResize = (event) => {
    y = event.clientY;
    resizeableElem.style.top = styles.top;
    resizeableElem.style.bottom = null;
    document.addEventListener("mousemove", onMouseMoveBottomResize);
    document.addEventListener("mouseup", onMouseUpBottomResize);
  };
  const resizerBottom = refB.current;
  resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);

  return () => {
    resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
  };
};

const resizeLeftHandler = (refL, resizeableElem, styles, width, x) => {
  // Left resize
  const onMouseMoveLeftResize = (event) => {
    const dx = event.clientX - x;
    x = event.clientX;
    width = width - dx;
    resizeableElem.style.width = `${width}px`;
  };

  const onMouseUpLeftResize = (event) => {
    document.removeEventListener("mousemove", onMouseMoveLeftResize);
  };

  const onMouseDownLeftResize = (event) => {
    x = event.clientX;
    resizeableElem.style.right = styles.right;
    resizeableElem.style.left = null;
    document.addEventListener("mousemove", onMouseMoveLeftResize);
    document.addEventListener("mouseup", onMouseUpLeftResize);
  };

  const resizerLeft = refL.current;
  resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

  return () => {
    resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
  };
};
