const numberInput = document.getElementById('number');
const btn = document.getElementById('btn');

const randomNumber = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber);
btn.addEventListener('click', function(e){
    const userVal = parseInt(numberInput.value, 10);
if(userVal === randomNumber){
    // alert('You are Right');
    Swal.fire({
        title: 'Awesome!',
        text: 'You are Right!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    return;
}

    if(userVal > randomNumber){
        // alert('smaller');
        Swal.fire({
            title: 'Error!',
            text: 'smaller!',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        return;
    }

    if(userVal < randomNumber){
        // alert('larger');
        Swal.fire({
            title: 'Error!',
            text: 'larger!',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        return;
    }
});