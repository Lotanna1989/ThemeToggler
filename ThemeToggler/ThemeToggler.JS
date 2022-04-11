

function toggleTheme() {
    document.querySelector('.locations').classList.toggle('dark')
    document.querySelector('.placecard1').classList.toggle('dark_card')
    document.querySelector('.placecard3').classList.toggle('dark_card')
    document.querySelector('.placecard4').classList.toggle('dark_card')
    document.querySelector('.placecard5').classList.toggle('dark_card')
    document.querySelector('.placecard6').classList.toggle('dark_card')
    document.querySelector('.placecard7').classList.toggle('dark_card')
}

function changeFont(size) 
{
    if (size==='small')
    {
        document.querySelector(".locdetails").style.fontSize='1em';
    }
    else if(size==='medium') 
    {
        document.querySelector(".loccard").style.fontSize='2em';
    }

    else (size==='large') 
    {
        document.querySelector(".loccard").style.fontSize='4em';
    }

    
}