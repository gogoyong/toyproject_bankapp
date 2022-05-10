function dragElement(el) {
  var
    pos2 = 0,
    posY = 0; // 해당 기능 전체에서 사용할 변수를 초기화
  el.onmousedown = dragMouseDown; // 요소를 마우스로 눌렀을 경우 dragMouseDown()을 실행 시키게 됩니다 

  function dragMouseDown(e) {
    e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음) 
    e.preventDefault(); // 일단 e의 기본 수행을 막습니다. 
    posY = e.clientY; // 마우스 이벤트가 발생할 떄 마다 당시의 마우스 y좌표를 posY에 저장합니다. 
    document.onmouseup = closeDragElement; // 마우스 클릭을 해제 했을 떄 closeDragElement()을 호출합니다 
    document.onmousemove = elementDrag; // 마우스를 움직일때 elementDrag()을 호출합니다.
  }

  function elementDrag(e) {
     e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음) 
    e.preventDefault(); // 일단 e의 기본 수행을 막습니다. 
    pos2 = posY - e.clientY; // 기존의 마우스 위치값을 비교하여 움직인 새로운 y좌표를 구하여 pos2에 저장합니다. 
    posY = e.clientY; // 다시 새로운 y좌표를 pos3에 저장합니다. 
    el.style.top = (el.offsetTop - pos2) + "px"; // 요소의 y위치를 변경합니다. (마우스에 따라 요소가 y방향으로 움직입니다) 
  }

  function closeDragElement() {
   document.onmouseup = null; // onmouseup을 초기화 시킴니다. 
    document.onmousemove = null; // onmousemove을 초기화 시킴니다. 
    console.log("현재 요소의 위치 y는 " + el.style.top + "입니다."); 
  }

  // y값이 -150보다 작으면, 즉 위에 가까우면 화면 위로 올려붙이기
  if (el.style.top < -150) {
    
  } else {

  }
}
dragElement(document.getElementById("dragdiv"))

