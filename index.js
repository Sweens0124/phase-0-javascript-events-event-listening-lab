function addingEventListener () {
  const input = document.getElementById('input');

  function clickAlert () {
    alert('I was Clicked!');
  }
  input.addEventListener('click', clickAlert)
}

addingEventListener()


