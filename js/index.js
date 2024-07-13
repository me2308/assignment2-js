var qouteList=[{'qoute':'"The best revenge is massive success."',
                'auther':'--Frank Sinatra'},
{'qoute':"'You miss 100% of the shots you don't take.'",
                'auther':'--Wayne Gretzy'},
{'qoute':'"Do not take life too seriously. You will not get out alive."',
                'auther':'--Elbert Hubbard'}
            ];

function getQoute() {
    var num=Math.floor(Math.random()*qouteList.length);
    document.getElementById('qoute').innerHTML=qouteList[num].qoute ;
    document.getElementById('auther').innerHTML=qouteList[num].auther ;
}



