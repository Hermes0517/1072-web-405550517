function goPage(index) {
    // let p = document.getElementById('content'+i);
    // switch (index) {
    //     case 1:
    //         break;
    //     case 2:
    //         p.innerHTML = '<iframe src="https://www.youtube.com/watch?v=RechrtUxfQc" width="630" height="480"  frameborder="0"></iframe>';
    //         break;
    //     case 3:
    //         p.innerHTML = '<iframe src="https://www.youtube.com/watch?v=MRWX49Furew&t=2s" width="630" height="480"  frameborder="0"></iframe>';

    //         break;
    //     case 4:
    //         p.innerHTML = '<iframe src="https://www.youtube.com/watch?v=METhdbL_iMw&t=13s" width="630" height="480"  frameborder="0"></iframe>';

    //         break;
    //     case 5:
    //         p.innerHTML = '<iframe src="https://www.youtube.com/watch?v=ZyDbq-lEKTo&t=19s" width="630" height="480"  frameborder="0"></iframe>';

    //         break;
    //     case 6:
    //         p.innerHTML = '<iframe src="https://www.youtube.com/watch?v=NlsrJbVvjaA&t=2s" width="630" height="480"  frameborder="0"></iframe>';

    //         break;
    // }
    for(var i=1;i<=5;i++){
        var p=document.getElementById("content"+i);
        p.style.display="none";
        if(i==index){
            p.style.display="block";
        }
        
    }
}